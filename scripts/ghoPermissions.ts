import {
  AddressInfo,
  Contracts,
  PermissionsJson,
  Roles,
} from '../helpers/types.js';
import { Pools } from '../helpers/configs.js';
import { ChainId } from '@aave/contract-helpers';
import { ethers, providers, utils } from 'ethers';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners } from '../helpers/guardian.js';
import ghoABI from '../abis/ghoABI.json' assert { type: 'json' };
import { IOwnable_ABI } from '@bgd-labs/aave-address-book';

const uniqueAddresses = (addressesInfo: AddressInfo[]): AddressInfo[] => {
  const cleanAddresses: AddressInfo[] = [];

  addressesInfo.forEach((addressInfo) => {
    const found = cleanAddresses.find(
      (cleanAddressInfo) => cleanAddressInfo.address === addressInfo.address,
    );
    if (!found) {
      cleanAddresses.push(addressInfo);
    }
  });

  return cleanAddresses;
};
export const resolveGHOModifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
  chainId: ChainId | number,
  adminRoles: Record<string, string[]>,
  gsmAdminRoles: Record<string, Roles>,
): Promise<Contracts> => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const owners: Record<string, Record<string, string[]>> = {};
  // owners
  for (const roleName of Object.keys(adminRoles)) {
    for (const roleAddress of adminRoles[roleName]) {
      if (!owners[roleName]) {
        owners[roleName] = {
          [roleAddress]: await getSafeOwners(provider, roleAddress),
        };
      } else if (owners[roleName] && !owners[roleName][roleAddress]) {
        owners[roleName][roleAddress] = await getSafeOwners(
          provider,
          roleAddress,
        );
      }
    }
  }

  const ghoContract = new ethers.Contract(
    addressBook.GHO_TOKEN,
    ghoABI,
    provider,
  );

  const facilitators = await ghoContract.getFacilitatorsList();

  const facilitatorOwners: Record<string, string[]> = {};
  for (const facilitator of facilitators) {
    facilitatorOwners[facilitator] = await getSafeOwners(provider, facilitator);
  }

  obj['GHO'] = {
    address: addressBook.GHO_TOKEN,
    modifiers: [
      {
        modifier: 'onlyFacilitator',
        addresses: facilitators.map((facilitator: string) => {
          return {
            address: facilitator,
            owners: facilitatorOwners[facilitator],
          };
        }),

        functions: roles['GHO']['onlyFacilitator'],
      },
      {
        modifier: 'onlyFacilitatorManager',
        addresses: uniqueAddresses([
          ...adminRoles['FACILITATOR_MANAGER_ROLE'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['FACILITATOR_MANAGER_ROLE'][roleAddress] || [],
            };
          }),
        ]),
        functions: roles['GHO']['onlyFacilitatorManager'],
      },
      {
        modifier: 'onlyBucketManager',
        addresses: uniqueAddresses([
          ...adminRoles['BUCKET_MANAGER_ROLE'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['BUCKET_MANAGER_ROLE'][roleAddress] || [],
            };
          }),
        ]),
        functions: roles['GHO']['onlyBucketManager'],
      },
    ],
  };

  for (let i = 0; i < Object.keys(gsmAdminRoles).length; i++) {
    const key = Object.keys(gsmAdminRoles)[i];
    const gsmRoles = gsmAdminRoles[key].role;
    const gsmOwners: Record<string, Record<string, string[]>> = {};
    // owners
    for (const roleName of Object.keys(gsmRoles)) {
      for (const roleAddress of gsmRoles[roleName]) {
        if (!gsmOwners[roleName]) {
          gsmOwners[roleName] = {
            [roleAddress]: await getSafeOwners(provider, roleAddress),
          };
        } else if (gsmOwners[roleName] && !gsmOwners[roleName][roleAddress]) {
          gsmOwners[roleName][roleAddress] = await getSafeOwners(
            provider,
            roleAddress,
          );
        }
      }
    }

    obj[key] = {
      address: addressBook[key],
      modifiers: [
        {
          modifier: 'onlyRescuer',
          addresses: uniqueAddresses([
            ...gsmRoles['TOKEN_RESCUER_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: gsmOwners['TOKEN_RESCUER_ROLE'][roleAddress] || [],
              };
            }),
          ]),
          functions: roles['GSM']['onlyRescuer'],
        },
        {
          modifier: 'onlySwapFreezer',
          addresses: uniqueAddresses([
            ...gsmRoles['SWAP_FREEZER_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: gsmOwners['SWAP_FREEZER_ROLE'][roleAddress] || [],
              };
            }),
          ]),
          functions: roles['GSM']['onlySwapFreezer'],
        },
        {
          modifier: 'onlyLiquidator',
          addresses: uniqueAddresses([
            ...gsmRoles['LIQUIDATOR_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: gsmOwners['LIQUIDATOR_ROLE'][roleAddress] || [],
              };
            }),
          ]),
          functions: roles['GSM']['onlyLiquidator'],
        },
        {
          modifier: 'onlyConfigurator',
          addresses: uniqueAddresses([
            ...gsmRoles['CONFIGURATOR_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: gsmOwners['CONFIGURATOR_ROLE'][roleAddress] || [],
              };
            }),
          ]),
          functions: roles['GSM']['onlyConfigurator'],
        },
      ],
    };
  }

  const gsmRegistryContract = new ethers.Contract(
    addressBook.GSM_REGISTRY,
    IOwnable_ABI,
    provider,
  );
  const gsmRegistryOwner = await gsmRegistryContract.owner();

  obj['GSMRegistry'] = {
    address: addressBook.GSM_REGISTRY,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: gsmRegistryOwner,
            owners: await getSafeOwners(provider, gsmRegistryOwner),
          },
        ],
        functions: roles['GSMRegistry']['onlyOwner'],
      },
    ],
  };

  return obj;
};

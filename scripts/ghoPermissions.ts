import {
  AddressInfo,
  Contracts,
  Guardian,
  PermissionsJson,
  Roles,
} from '../helpers/types.js';
import { Pools } from '../helpers/configs.js';
import { ChainId } from '@aave/contract-helpers';
import { ethers, providers, utils } from 'ethers';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { ghoABI } from '../abis/ghoABI.js';
import { IOwnable_ABI } from '@bgd-labs/aave-address-book';
import { ghoStewardV2 } from '../abis/ghoStewardV2.js';

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
  const owners: Record<string, Record<string, Guardian>> = {};
  // owners
  for (const roleName of Object.keys(adminRoles)) {
    for (const roleAddress of adminRoles[roleName]) {
      if (!owners[roleName]) {
        owners[roleName] = {
          [roleAddress]: {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          },
        };
      } else if (owners[roleName] && !owners[roleName][roleAddress]) {
        owners[roleName][roleAddress] = {
          owners: await getSafeOwners(provider, roleAddress),
          threshold: await getSafeThreshold(provider, roleAddress),
        };
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
              owners:
                owners['FACILITATOR_MANAGER_ROLE'][roleAddress].owners || [],
              signersThreshold:
                owners['FACILITATOR_MANAGER_ROLE'][roleAddress].threshold || 0,
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
              owners: owners['BUCKET_MANAGER_ROLE'][roleAddress].owners || [],
              signersThreshold:
                owners['BUCKET_MANAGER_ROLE'][roleAddress].threshold || 0,
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
    const gsmOwners: Record<string, Record<string, Guardian>> = {};
    // owners
    for (const roleName of Object.keys(gsmRoles)) {
      for (const roleAddress of gsmRoles[roleName]) {
        if (!gsmOwners[roleName]) {
          gsmOwners[roleName] = {
            [roleAddress]: {
              owners: await getSafeOwners(provider, roleAddress),
              threshold: await getSafeThreshold(provider, roleAddress),
            },
          };
        } else if (gsmOwners[roleName] && !gsmOwners[roleName][roleAddress]) {
          gsmOwners[roleName][roleAddress] = {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          };
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
                owners:
                  gsmOwners['TOKEN_RESCUER_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  gsmOwners['TOKEN_RESCUER_ROLE'][roleAddress].threshold || 0,
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
                owners:
                  gsmOwners['SWAP_FREEZER_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  gsmOwners['SWAP_FREEZER_ROLE'][roleAddress].threshold || 0,
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
                owners: gsmOwners['LIQUIDATOR_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  gsmOwners['LIQUIDATOR_ROLE'][roleAddress].threshold || 0,
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
                owners:
                  gsmOwners['CONFIGURATOR_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  gsmOwners['CONFIGURATOR_ROLE'][roleAddress].threshold || 0,
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
            signersThreshold: await getSafeThreshold(
              provider,
              gsmRegistryOwner,
            ),
          },
        ],
        functions: roles['GSMRegistry']['onlyOwner'],
      },
    ],
  };

  const ghoStewardContract = new ethers.Contract(
    '0x8F2411a538381aae2b464499005F0211e867d84f',
    ghoStewardV2,
    provider,
  );
  const ghoStewardOwner = await ghoStewardContract.owner();
  const riskCouncil = await ghoStewardContract.RISK_COUNCIL();

  obj['GhoStewardV2'] = {
    address: '0x8F2411a538381aae2b464499005F0211e867d84f',
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: ghoStewardOwner,
            owners: await getSafeOwners(provider, ghoStewardOwner),
            signersThreshold: await getSafeThreshold(provider, ghoStewardOwner),
          },
        ],
        functions: roles['GhoStewardV2']['onlyOwner'],
      },
      {
        modifier: 'onlyRiskCouncil',
        addresses: [
          {
            address: riskCouncil,
            owners: await getSafeOwners(provider, riskCouncil),
            signersThreshold: await getSafeThreshold(provider, riskCouncil),
          },
        ],
        functions: roles['GhoStewardV2']['onlyRiskCouncil'],
      },
    ],
  };

  return obj;
};

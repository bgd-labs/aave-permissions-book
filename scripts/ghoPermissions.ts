import { AddressInfo, Contracts, PermissionsJson } from '../helpers/types.js';
import { Pools } from '../helpers/configs.js';
import { ChainId } from '@aave/contract-helpers';
import { ethers, providers, utils } from 'ethers';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners } from '../helpers/guardian.js';
import ghoABI from '../abis/ghoABI.json' assert { type: 'json' };

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
  console.log(facilitatorOwners);

  obj['GHO'] = {
    address: addressBook.ORACLE,
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

  return obj;
};

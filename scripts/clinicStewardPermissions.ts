import { providers, constants } from 'ethers';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import {
  AddressInfo,
  Contracts,
  Guardian,
  PermissionsJson,
} from '../helpers/types.js';

const getAddressInfo = async (
  provider: providers.Provider,
  roleAddress: string,
): Promise<AddressInfo> => {
  const owners = await getSafeOwners(provider, roleAddress);
  return {
    address: roleAddress,
    owners,
  };
};

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

export const resolveClinicStewardModifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  adminRoles: Record<string, string[]>,
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

  if (
    addressBook.CLINIC_STEWARD &&
    addressBook.CLINIC_STEWARD !== constants.AddressZero
  ) {
    obj['ClinicSteward'] = {
      address: addressBook.CLINIC_STEWARD,
      modifiers: [
        {
          modifier: 'onlyCleanUpRole',
          addresses: uniqueAddresses([
            ...adminRoles['CLEANUP_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['CLEANUP_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  owners['CLEANUP_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ]),
          functions: roles['ClinicSteward']['onlyCleanUpRole'],
        },
        {
          modifier: 'onlyAdmin',
          addresses: [
            ...uniqueAddresses([
              ...adminRoles['DEFAULT_ADMIN'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: owners['DEFAULT_ADMIN'][roleAddress].owners || [],
                  signersThreshold:
                    owners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['ClinicSteward']['onlyAdmin'],
        },
      ],
    };
  }

  return obj;
};

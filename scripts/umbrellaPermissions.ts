import { providers, constants, ethers } from 'ethers';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import {
  AddressInfo,
  Contracts,
  Guardian,
  PermissionsJson,
} from '../helpers/types.js';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';

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

export const resolveUmbrellaModifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  umbrellaRoles: Record<string, string[]>,
  umbrellaIncentivesRoles: Record<string, string[]>,
): Promise<Contracts> => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const umbrellaOwners: Record<string, Record<string, Guardian>> = {};
  const umbrellaIncentivesOwners: Record<string, Record<string, Guardian>> = {};
  // owners
  for (const roleName of Object.keys(umbrellaRoles)) {
    for (const roleAddress of umbrellaRoles[roleName]) {
      if (!umbrellaOwners[roleName]) {
        umbrellaOwners[roleName] = {
          [roleAddress]: {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          },
        };
      } else if (umbrellaOwners[roleName] && !umbrellaOwners[roleName][roleAddress]) {
        umbrellaOwners[roleName][roleAddress] = {
          owners: await getSafeOwners(provider, roleAddress),
          threshold: await getSafeThreshold(provider, roleAddress),
        };
      }
    }
  }

  for (const roleName of Object.keys(umbrellaIncentivesRoles)) {
    for (const roleAddress of umbrellaIncentivesRoles[roleName]) {
      if (!umbrellaIncentivesOwners[roleName]) {
        umbrellaIncentivesOwners[roleName] = {
          [roleAddress]: {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          },
        };
      } else if (umbrellaIncentivesOwners[roleName] && !umbrellaIncentivesOwners[roleName][roleAddress]) {
        umbrellaIncentivesOwners[roleName][roleAddress] = {
          owners: await getSafeOwners(provider, roleAddress),
          threshold: await getSafeThreshold(provider, roleAddress),
        };
      }
    }
  }

  if (addressBook.UMBRELLA) {
    const umbrellaProxyAdmin = await getProxyAdmin(
      addressBook.UMBRELLA,
      provider,
    );
    const proxyAdminContract = new ethers.Contract(
      umbrellaProxyAdmin,
      onlyOwnerAbi,
      provider,
    );
    if (umbrellaProxyAdmin !== constants.AddressZero) {
      const proxyAdminOwner = await proxyAdminContract.owner();

      obj['UmbrellaProxyAdmin'] = {
        address: umbrellaProxyAdmin,
        modifiers: [
          {
            modifier: 'onlyOwner',
            addresses: [
              {
                address: proxyAdminOwner,
                owners: await getSafeOwners(provider, proxyAdminOwner),
                signersThreshold: await getSafeThreshold(provider, proxyAdminOwner),
              },
            ],
            functions: roles['ProxyAdmin']['onlyOwner'],
          },
        ],
      };
    }
    obj['Umbrella'] = {
      address: addressBook.UMBRELLA,
      proxyAdmin: umbrellaProxyAdmin,
      modifiers: [
        {
          modifier: 'onlyCoverageManager',
          addresses: uniqueAddresses([
            ...umbrellaRoles['COVERAGE_MANAGER_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: umbrellaOwners['COVERAGE_MANAGER_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  umbrellaOwners['COVERAGE_MANAGER_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ]),
          functions: roles['Umbrella']['onlyCoverageManager'],
        },
        {
          modifier: 'onlyAdmin',
          addresses: [
            ...uniqueAddresses([
              ...umbrellaRoles['DEFAULT_ADMIN'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: umbrellaOwners['DEFAULT_ADMIN'][roleAddress].owners || [],
                  signersThreshold:
                    umbrellaOwners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['Umbrella']['onlyAdmin'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            ...uniqueAddresses([
              ...umbrellaRoles['RESCUE_GUARDIAN_ROLE'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: umbrellaOwners['RESCUE_GUARDIAN_ROLE'][roleAddress].owners || [],
                  signersThreshold:
                    umbrellaOwners['RESCUE_GUARDIAN_ROLE'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['Umbrella']['onlyRescueGuardian'],
        },
        {
          modifier: 'onlyPauseGuardian',
          addresses: [
            ...uniqueAddresses([
              ...umbrellaRoles['PAUSE_GUARDIAN_ROLE'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: umbrellaOwners['PAUSE_GUARDIAN_ROLE'][roleAddress].owners || [],
                  signersThreshold:
                    umbrellaOwners['PAUSE_GUARDIAN_ROLE'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['Umbrella']['onlyPauseGuardian'],
        },
      ],
    };

  }

  if (addressBook.UMBRELLA_INCENTIVES_CONTROLLER) {
    const umbrellaICProxyAdmin = await getProxyAdmin(
      addressBook.UMBRELLA_INCENTIVES_CONTROLLER,
      provider,
    );
    const proxyAdminContract = new ethers.Contract(
      umbrellaICProxyAdmin,
      onlyOwnerAbi,
      provider,
    );
    if (umbrellaICProxyAdmin !== constants.AddressZero) {
      const proxyAdminOwner = await proxyAdminContract.owner();

      obj['UmbrellaIncentivesControllerProxyAdmin'] = {
        address: umbrellaICProxyAdmin,
        modifiers: [
          {
            modifier: 'onlyOwner',
            addresses: [
              {
                address: proxyAdminOwner,
                owners: await getSafeOwners(provider, proxyAdminOwner),
                signersThreshold: await getSafeThreshold(provider, proxyAdminOwner),
              },
            ],
            functions: roles['ProxyAdmin']['onlyOwner'],
          },
        ],
      };
    }

    obj['UmbrellaIncentivesController'] = {
      address: addressBook.UMBRELLA_INCENTIVES_CONTROLLER,
      proxyAdmin: umbrellaICProxyAdmin,
      modifiers: [

        {
          modifier: 'onlyRewardsAdmin',
          addresses: uniqueAddresses([
            ...umbrellaIncentivesRoles['REWARDS_ADMIN_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: umbrellaIncentivesOwners['REWARDS_ADMIN_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  umbrellaIncentivesOwners['REWARDS_ADMIN_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ]),
          functions: roles['UmbrellaRewardsController']['onlyRewardsAdmin'],
        },
        {
          modifier: 'onlyAdmin',
          addresses: [
            ...uniqueAddresses([
              ...umbrellaIncentivesRoles['DEFAULT_ADMIN'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: umbrellaIncentivesOwners['DEFAULT_ADMIN'][roleAddress].owners || [],
                  signersThreshold:
                    umbrellaIncentivesOwners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['UmbrellaRewardsController']['onlyAdmin'],
        },
      ],
    };

  }

  return obj;
}
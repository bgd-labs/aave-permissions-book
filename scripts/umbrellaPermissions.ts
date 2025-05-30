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
import { PERMISSIONED_PAYLOADS_CONTROLLER_ABI } from '../abis/permissionedPayloadsController.js';
import { IOwnable_ABI } from '@bgd-labs/aave-address-book/abis';

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


  if (
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER &&
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER !== constants.AddressZero
  ) {
    const ppcProxyAdmin = await getProxyAdmin(
      addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
      provider,
    );
    const proxyAdminContract = new ethers.Contract(
      ppcProxyAdmin,
      onlyOwnerAbi,
      provider,
    );
    if (ppcProxyAdmin !== constants.AddressZero) {
      const proxyAdminOwner = await proxyAdminContract.owner();

      obj['PermissionedPayloadsControllerProxyAdmin'] = {
        address: ppcProxyAdmin,
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


    const ppcContract = new ethers.Contract(
      addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
      PERMISSIONED_PAYLOADS_CONTROLLER_ABI,
      provider,
    );

    const pcGuardian = await ppcContract.guardian();
    const pcOwner = await ppcContract.owner();
    const rescuer = await ppcContract.whoCanRescue();
    const payloadsManager = await ppcContract.payloadsManager();

    obj['PermissionedPayloadsController'] = {
      address: addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
      proxyAdmin: ppcProxyAdmin,
      modifiers: [
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
              signersThreshold: await getSafeThreshold(provider, pcGuardian),
            },
          ],
          functions: roles['PermissionedPayloadsController']['onlyGuardian'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
              signersThreshold: await getSafeThreshold(provider, pcGuardian),
            },
            {
              address: pcOwner,
              owners: await getSafeOwners(provider, pcOwner),
              signersThreshold: await getSafeThreshold(provider, pcOwner),
            },
          ],
          functions: roles['PermissionedPayloadsController']['onlyOwnerOrGuardian'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            {
              address: rescuer,
              owners: await getSafeOwners(provider, rescuer),
              signersThreshold: await getSafeThreshold(provider, rescuer),
            },
          ],
          functions: roles['PermissionedPayloadsController']['onlyRescueGuardian'],
        },
        {
          modifier: 'onlyPayloadsManagerOrGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
              signersThreshold: await getSafeThreshold(provider, pcGuardian),
            },
            {
              address: payloadsManager,
              owners: await getSafeOwners(provider, payloadsManager),
              signersThreshold: await getSafeThreshold(provider, payloadsManager),
            },
          ],
          functions: roles['PermissionedPayloadsController']['onlyPayloadsManagerOrGuardian'],
        },
        {
          modifier: 'onlyPayloadsManager',
          addresses: [
            {
              address: payloadsManager,
              owners: await getSafeOwners(provider, payloadsManager),
              signersThreshold: await getSafeThreshold(provider, payloadsManager),
            },
          ],
          functions: roles['PermissionedPayloadsController']['onlyPayloadsManager'],
        },
      ],
    };
  }


  if (
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR &&
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR !== constants.AddressZero
  ) {
    const executorContract = new ethers.Contract(
      addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR,
      IOwnable_ABI,
      provider,
    );
    const owner = await executorContract.owner();
    obj['PermissionedExecutor'] = {
      address: addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
              signersThreshold: await getSafeThreshold(provider, owner),
            },
          ],
          functions: roles['Executor']['onlyOwner'],
        },
      ],
    };
  }


  return obj;
}
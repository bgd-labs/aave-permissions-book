import { ethers, providers, utils, constants } from 'ethers';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { ChainId } from '@aave/contract-helpers';
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

export const resolveCollectorModifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  chainId: ChainId | number,
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
    addressBook.COLLECTOR &&
    addressBook.COLLECTOR !== constants.AddressZero
  ) {
    const collectorProxyAdmin = await getProxyAdmin(
      addressBook.COLLECTOR,
      provider,
    );

    obj['Collector'] = {
      address: addressBook.COLLECTOR,
      modifiers: [
        {
          modifier: 'onlyFundsAdmin',
          addresses: uniqueAddresses([
            ...adminRoles['FUNDS_ADMIN_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['FUNDS_ADMIN_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  owners['FUNDS_ADMIN_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ]),
          functions: roles['Collector']['onlyFundsAdmin'],
        },
        {
          modifier: 'onlyAdminOrRecipient',
          addresses: [
            {
              address: collectorProxyAdmin,
              owners: await getSafeOwners(provider, collectorProxyAdmin),
              signersThreshold: await getSafeThreshold(
                provider,
                collectorProxyAdmin,
              ),
            },
            ...uniqueAddresses([
              ...adminRoles['FUNDS_ADMIN_ROLE'].map((roleAddress) => {
                return {
                  address: roleAddress,
                  owners: owners['FUNDS_ADMIN_ROLE'][roleAddress].owners || [],
                  signersThreshold:
                    owners['FUNDS_ADMIN_ROLE'][roleAddress].threshold || 0,
                };
              }),
            ])
          ],
          functions: roles['Collector']['onlyAdminOrRecipient'],
        },
      ],
    };
  }

  // add proxy admins
  const proxyAdminContracts: string[] = permissionsObject
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    if (obj[proxyAdminContracts[i]]) {
      obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
        obj[proxyAdminContracts[i]].address,
        provider,
      );
    }
  }

  return obj;
};

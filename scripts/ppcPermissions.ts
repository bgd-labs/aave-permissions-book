import {
  Contracts,
  PermissionsJson,
} from '../helpers/types.js';
import { ChainId } from '@bgd-labs/toolbox';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import {
  IOwnable_ABI,
} from '@bgd-labs/aave-address-book/abis';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';
import { PERMISSIONED_PAYLOADS_CONTROLLER_ABI } from '../abis/permissionedPayloadsController.js';
import { Address, Client, getAddress, getContract, zeroAddress } from 'viem';

export const resolvePpcModifiers = async (
  addressBook: any,
  provider: Client,
  permissionsObject: PermissionsJson,
  chainId: typeof ChainId | number,
) => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);


  if (
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER &&
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER !== zeroAddress
  ) {
    const ppcProxyAdmin = await getProxyAdmin(
      addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
      provider,
    );
    const proxyAdminContract = getContract({ address: getAddress(ppcProxyAdmin), abi: onlyOwnerAbi, client: provider });

    if (ppcProxyAdmin !== zeroAddress) {
      const proxyAdminOwner = await proxyAdminContract.read.owner() as Address;

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

    const ppcContract = getContract({
      address: getAddress(addressBook.PERMISSIONED_PAYLOADS_CONTROLLER),
      abi: PERMISSIONED_PAYLOADS_CONTROLLER_ABI,
      client: provider
    });
    const pcGuardian = await ppcContract.read.guardian() as Address;
    const pcOwner = await ppcContract.read.owner() as Address;
    const rescuer = await ppcContract.read.whoCanRescue() as Address;
    const payloadsManager = await ppcContract.read.payloadsManager() as Address;

    obj['PermissionedPayloadsController'] = {
      address: addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
      proxyAdmin: ppcProxyAdmin,
      modifiers: [
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

    if (chainId === ChainId.mainnet) {
      obj['PermissionedPayloadsController'].modifiers.push(
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
      );
    }
  }

  if (
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR &&
    addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR !== zeroAddress
  ) {
    const executorContract = getContract({ address: getAddress(addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR), abi: IOwnable_ABI, client: provider });
    const owner = await executorContract.read.owner();
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
          functions: roles['PermissionedExecutor']['onlyOwner'],
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

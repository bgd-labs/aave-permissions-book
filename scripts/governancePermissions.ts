import { generateRoles } from '../helpers/jsonParsers.js';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { AaveGovernanceV2ABI } from '../abis/AaveGovernanceV2.js';
import { executorWithTimelockAbi } from '../abis/executorWithTimelockAbi.js';
import { Contracts, PermissionsJson } from '../helpers/types.js';
import { Address, Client, getAddress, getContract } from 'viem';

export const resolveGovV2Modifiers = async (
  addressBook: any,
  provider: Client,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const govContract = getContract({ address: getAddress('0xec568fffba86c094cf06b22134b23074dfe2252c'), abi: AaveGovernanceV2ABI, client: provider });

  const guardian = await govContract.read.getGuardian() as Address;
  const govOwner = await govContract.read.owner() as Address;
  obj['AaveGovernanceV2'] = {
    address: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
    modifiers: [
      {
        modifier: 'onlyGuardian',
        addresses: [
          {
            address: guardian,
            owners: await getSafeOwners(provider, guardian),
            signersThreshold: await getSafeThreshold(provider, guardian),
          },
        ],
        functions: roles['AaveGovernanceV2']['onlyGuardian'],
      },
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: govOwner,
            owners: await getSafeOwners(provider, govOwner),
            signersThreshold: await getSafeThreshold(provider, govOwner),
          },
        ],
        functions: roles['AaveGovernanceV2']['onlyOwner'],
      },
    ],
  };

  const shortExecutor = getContract({ address: getAddress(addressBook.SHORT_EXECUTOR), abi: executorWithTimelockAbi, client: provider });
  const pendingAdmin = await shortExecutor.read.getPendingAdmin() as Address;
  const admin = await shortExecutor.read.getAdmin() as Address;

  obj['ShortExecutor'] = {
    address: addressBook.SHORT_EXECUTOR,
    modifiers: [
      {
        modifier: 'onlyTimelock',
        addresses: [
          {
            address: shortExecutor.address,
            owners: [],
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyTimelock'],
      },
      {
        modifier: 'onlyPendingAdmin',
        addresses: [
          {
            address: pendingAdmin,
            owners: await getSafeOwners(provider, pendingAdmin),
            signersThreshold: await getSafeThreshold(provider, pendingAdmin),
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyPendingAdmin'],
      },
      {
        modifier: 'onlyAdmin',
        addresses: [
          {
            address: admin,
            owners: await getSafeOwners(provider, admin),
            signersThreshold: await getSafeThreshold(provider, admin),
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyAdmin'],
      },
    ],
  };

  const longExecutor = getContract({ address: getAddress(addressBook.LONG_EXECUTOR), abi: executorWithTimelockAbi, client: provider });
  const longPendingAdmin = await longExecutor.read.getPendingAdmin() as Address;
  const longAdmin = await longExecutor.read.getAdmin() as Address;

  obj['LongExecutor'] = {
    address: addressBook.LONG_EXECUTOR,
    modifiers: [
      {
        modifier: 'onlyTimelock',
        addresses: [
          {
            address: longExecutor.address,
            owners: [],
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyTimelock'],
      },
      {
        modifier: 'onlyPendingAdmin',
        addresses: [
          {
            address: longPendingAdmin,
            owners: await getSafeOwners(provider, longPendingAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              longPendingAdmin,
            ),
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyPendingAdmin'],
      },
      {
        modifier: 'onlyAdmin',
        addresses: [
          {
            address: longAdmin,
            owners: await getSafeOwners(provider, longAdmin),
            signersThreshold: await getSafeThreshold(provider, longAdmin),
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyAdmin'],
      },
    ],
  };

  // add proxy admins
  const proxyAdminContracts: string[] = permissionsObject
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
      obj[proxyAdminContracts[i]].address,
      provider,
    );
  }

  return obj;
};

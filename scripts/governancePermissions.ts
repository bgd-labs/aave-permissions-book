import { ethers, providers } from 'ethers';
import { Contracts, PermissionsJson, Pools } from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import { getProxyAdmin } from '../helpers/proxyAdmin';
import { getSafeOwners } from '../helpers/guardian';
import AaveGovernanceV2ABI from '../abis/AaveGovernanceV2.json';
import executorWithTimelockAbi from '../abis/executorWithTimelockAbi.json';

export const resolveGovV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const govContract = new ethers.Contract(
    addressBook.GOV,
    AaveGovernanceV2ABI,
    provider,
  );

  const guardian = await govContract.getGuardian();
  const govOwner = await govContract.owner();

  obj['AaveGovernanceV2'] = {
    address: addressBook.GOV,
    modifiers: [
      {
        modifier: 'onlyGuardian',
        addresses: [
          {
            address: guardian,
            owners: await getSafeOwners(provider, guardian),
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
          },
        ],
        functions: roles['AaveGovernanceV2']['onlyOwner'],
      },
    ],
  };

  const shortExecutor = new ethers.Contract(
    addressBook.SHORT_EXECUTOR,
    executorWithTimelockAbi,
    provider,
  );
  const pendingAdmin = await shortExecutor.getPendingAdmin();
  const admin = await shortExecutor.getAdmin();

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
          },
        ],
        functions: roles['ExecutorWithTimelock']['onlyAdmin'],
      },
    ],
  };

  const longExecutor = new ethers.Contract(
    addressBook.LONG_EXECUTOR,
    executorWithTimelockAbi,
    provider,
  );
  const longPendingAdmin = await longExecutor.getPendingAdmin();
  const longAdmin = await longExecutor.getAdmin();

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

import { ethers, providers } from 'ethers';
import { Contracts, PermissionsJson, Pools } from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import lendingPoolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import arcTimelockAbi from '../abis/arcTimelockAbi.json';
import {
  AaveGovernanceV2,
  AaveV2EthereumArc,
} from '@bgd-labs/aave-address-book';
import executorWithTimelockAbi from '../abis/executorWithTimelockAbi.json';
import { getProxyAdmin } from '../helpers/proxyAdmin';

export const resolveV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const lendingPoolAddressesProvider = new ethers.Contract(
    addressBook.POOL_ADDRESSES_PROVIDER,
    lendingPoolAddressProviderAbi,
    provider,
  );

  const lendingPoolAddressesProviderOwner: string =
    await lendingPoolAddressesProvider.owner();
  const lendingRateOracleAddress: string =
    await lendingPoolAddressesProvider.getLendingRateOracle();
  const poolAdmin: string = await lendingPoolAddressesProvider.getPoolAdmin();
  const emergencyAdmin: string =
    await lendingPoolAddressesProvider.getEmergencyAdmin();

  obj['LendingPoolAddressesProvider'] = {
    address: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: [lendingPoolAddressesProviderOwner],
        functions: roles['LendingPoolAddressesProvider']['onlyOwner'],
      },
    ],
  };

  obj['LendingPool'] = {
    address: addressBook.POOL,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyLendingPoolConfigurator',
        address: [addressBook.POOL_CONFIGURATOR],
        functions: roles['LendingPool']['onlyLendingPoolConfigurator'],
      },
    ],
  };

  obj['LendingPoolConfigurator'] = {
    address: addressBook.POOL_CONFIGURATOR,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyPoolAdmin',
        address: [poolAdmin],
        functions: roles['LendingPoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: [emergencyAdmin],
        functions: roles['LendingPoolConfigurator']['onlyEmergencyAdmin'],
      },
    ],
  };

  const aaveOracle = new ethers.Contract(
    addressBook.ORACLE,
    onlyOwnerAbi,
    provider,
  );
  const aaveOracleOwner = await aaveOracle.owner();

  obj['AaveOracle'] = {
    address: addressBook.ORACLE,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: [aaveOracleOwner],
        functions: roles['AaveOracle']['onlyOwner'],
      },
    ],
  };

  const lendingRateOracle = new ethers.Contract(
    lendingRateOracleAddress,
    onlyOwnerAbi,
    provider,
  );
  const lendingRateOracleOwner = await lendingRateOracle.owner();

  obj['LendingRateOracle'] = {
    address: lendingRateOracleAddress,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: [lendingRateOracleOwner],
        functions: roles['LendingRateOracle']['onlyOwner'],
      },
    ],
  };

  // extra contracts for arc
  if (pool === Pools.ARC) {
    const arcTimelock = new ethers.Contract(
      poolAdmin,
      arcTimelockAbi,
      provider,
    );
    const governanceExecutor =
      await arcTimelock.getEthereumGovernanceExecutor();
    const arcTimelockGuardian = await arcTimelock.getGuardian();

    obj['ArcTimelock'] = {
      address: poolAdmin,
      modifiers: [
        {
          modifier: 'onlyEthereumGovernanceExecutor',
          address: [governanceExecutor],
          functions: roles['ArcTimelock']['onlyEthereumGovernanceExecutor'],
        },
        {
          modifier: 'onlyGuardian',
          address: [arcTimelockGuardian],
          functions: roles['ArcTimelock']['onlyGuardian'],
        },
      ],
    };

    const executorWithTimelock = new ethers.Contract(
      AaveGovernanceV2.SHORT_EXECUTOR,
      executorWithTimelockAbi,
      provider,
    );
    const pendingAdmin = await executorWithTimelock.getPendingAdmin();
    const admin = await executorWithTimelock.getAdmin();

    obj['ExecutorWithTimelock'] = {
      address: AaveGovernanceV2.SHORT_EXECUTOR,
      modifiers: [
        {
          modifier: 'onlyTimelock',
          address: [executorWithTimelock.address],
          functions: roles['ExecutorWithTimelock']['onlyTimelock'],
        },
        {
          modifier: 'onlyPendingAdmin',
          address: [pendingAdmin],
          functions: roles['ExecutorWithTimelock']['onlyPendingAdmin'],
        },
        {
          modifier: 'onlyAdmin',
          address: [admin],
          functions: roles['ExecutorWithTimelock']['onlyAdmin'],
        },
      ],
    };

    const permissionManager = new ethers.Contract(
      AaveV2EthereumArc.PERMISSION_MANAGER,
      onlyOwnerAbi,
      provider,
    );
    const permissionManagerOwner = await permissionManager.owner();

    obj['PermissionManager'] = {
      address: AaveV2EthereumArc.PERMISSION_MANAGER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          address: [permissionManagerOwner],
          functions: roles['PermissionManager']['onlyOwner'],
        },
      ],
    };
  }

  // TODO: incentives controller
  // TODO: weth gateway
  // TODO: collector controller. should have proxyAdmin true

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

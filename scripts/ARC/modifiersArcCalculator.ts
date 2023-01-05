import { ethers } from 'ethers';
import arcTimelockAbi from '../../abis/arcTimelockAbi.json';
import lendingPoolConfiguratorAbi from '../../abis/lendingPoolConfigurator.json';
import onlyOwnerAbi from '../../abis/onlyOwnerAbi.json';
import executorWithTimelockAbi from '../../abis/executorWithTimelockAbi.json';

import functionPermissions from '../../jsonBases/functionsPermissionsArc.json';
import { AaveV2EthereumArc } from '@bgd-labs/aave-address-book';
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book';
import { ChainId } from '@aave/contract-helpers';
import {
  Contracts,
  FullPermissions,
  networkConfigs,
  Pools,
} from '../../helpers/configs';
import { getAllPermissionsJson, saveJson } from '../../helpers/fileSystem';
import {
  ContractMethodsModifiers,
  generateRoles,
} from '../../helpers/jsonParsers';
import { getProxyAdmin } from '../../helpers/proxyAdmin';

const generateArcModifiers = async (): Promise<void> => {
  // TODO: provably makes sense to also externalize this
  const provider = new ethers.providers.StaticJsonRpcProvider(
    networkConfigs[ChainId.mainnet].rpcUrl,
  );

  const obj: Contracts = {};
  const roles = generateRoles(functionPermissions);

  // add Lending Pool Address Provider modifiers
  const lendingPoolAddressesProvider = new ethers.Contract(
    AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    lendingPoolConfiguratorAbi,
    provider,
  );
  const lendingPoolAddressesProviderOwner =
    await lendingPoolAddressesProvider.owner();
  const poolAdmin = await lendingPoolAddressesProvider.getPoolAdmin();
  const emergencyAdmin = await lendingPoolAddressesProvider.getEmergencyAdmin();

  obj['LendingPoolAddressesProvider'] = {
    address: AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: lendingPoolAddressesProviderOwner,
        functions: roles['LendingPoolAddressesProvider']['onlyOwner'],
      },
    ],
  };

  obj['LendingPool'] = {
    address: AaveV2EthereumArc.POOL,
    proxyAdmin: AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyLendingPoolConfigurator',
        address: AaveV2EthereumArc.POOL_CONFIGURATOR,
        functions: roles['LendingPool']['onlyLendingPoolConfigurator'],
      },
    ],
  };

  // add Lending Pool Configurator modifiers
  obj['LendingPoolConfigurator'] = {
    address: AaveV2EthereumArc.POOL_CONFIGURATOR,
    proxyAdmin: AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyPoolAdmin',
        address: poolAdmin,
        functions: roles['LendingPoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: emergencyAdmin,
        functions: roles['LendingPoolConfigurator']['onlyEmergencyAdmin'],
      },
    ],
  };

  const arcTimelock = new ethers.Contract(poolAdmin, arcTimelockAbi, provider);
  const governanceExecutor = await arcTimelock.getEthereumGovernanceExecutor();
  const arcTimelockGuardian = await arcTimelock.getGuardian();

  obj['ArcTimelock'] = {
    address: poolAdmin,
    modifiers: [
      {
        modifier: 'onlyEthereumGovernanceExecutor',
        address: governanceExecutor,
        functions: roles['ArcTimelock']['onlyEthereumGovernanceExecutor'],
      },
      {
        modifier: 'onlyGuardian',
        address: arcTimelockGuardian,
        functions: roles['ArcTimelock']['onlyGuardian'],
      },
    ],
  };

  const aaveOracle = new ethers.Contract(
    AaveV2EthereumArc.ORACLE,
    onlyOwnerAbi,
    provider,
  );
  const aaveOracleOwner = await aaveOracle.owner();

  obj['AaveOracle'] = {
    address: AaveV2EthereumArc.ORACLE,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: aaveOracleOwner,
        functions: roles['AaveOracle']['onlyOwner'],
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
        address: executorWithTimelock.address,
        functions: roles['ExecutorWithTimelock']['onlyTimelock'],
      },
      {
        modifier: 'onlyPendingAdmin',
        address: pendingAdmin,
        functions: roles['ExecutorWithTimelock']['onlyPendingAdmin'],
      },
      {
        modifier: 'onlyAdmin',
        address: admin,
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
        address: permissionManagerOwner,
        functions: roles['PermissionManager']['onlyOwner'],
      },
    ],
  };

  // add proxy admins
  const proxyAdminContracts = functionPermissions
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
      obj[proxyAdminContracts[i]].address,
      provider,
    );
  }

  // Add pool information to global json
  let fullJson: FullPermissions = getAllPermissionsJson();

  if (Object.keys(fullJson).length === 0) {
    fullJson = {
      [ChainId.mainnet]: {
        [Pools.ARC]: obj,
      },
    };
  } else {
    fullJson[ChainId.mainnet][Pools.ARC] = obj;
  }
  saveJson('./out/aavePermissionList.json', JSON.stringify(fullJson, null, 2));
};

generateArcModifiers().then().catch(console.log);

import { ethers, providers } from 'ethers';
import * as fs from 'fs';
import * as arcTimelockAbi from '../../abis/arcTimelockAbi.json';
import * as lendingPoolConfiguratorAbi from '../../abis/lendingPoolConfigurator.json';
import * as onlyOwnerAbi from '../../abis/onlyOwnerAbi.json';
import * as executorWithTimelockAbi from '../../abis/executorWithTimelockAbi.json';

import { AaveV2EthereumArc } from '@bgd-labs/aave-address-book';
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { networkConfigs } from '../../helpers/configs';
import { saveJson } from '../../helpers/fileSystem';

// TODO: this should provably be added on address book
const PERMISSION_MANAGER = '0xF4a1F5fEA79C3609514A417425971FadC10eCfBE';

type NetworkData = {
  networkName: string;
  addresses: string[];
};

type ModifierData = {
  contractName: string;
  contractAddress: string;
  modifier: string;
  networks: NetworkData[];
};

async function addModifierInArray(
  contractName: string,
  modifier: string,
  address: string,
  modifiers: ModifierData[],
  contractAddress: string,
) {
  modifiers.push({
    contractName: contractName,
    contractAddress,
    modifier: modifier,
    networks: [
      {
        networkName: ChainIdToNetwork[ChainId.mainnet],
        // TODO: chainId should be added
        addresses: [address],
      },
    ],
  });
}

const generateArcModifiers = async () => {
  const modifiers: ModifierData[] = [];

  const provider = new ethers.providers.StaticJsonRpcProvider(
    networkConfigs[ChainId.mainnet].rpcUrl,
  );

  // add Lending Pool Address Provider modifiers
  const lendingPoolAddressProvider = new ethers.Contract(
    AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    lendingPoolConfiguratorAbi,
    provider,
  );
  const lendingPoolAddressProviderOwner =
    await lendingPoolAddressProvider.owner();
  const poolAdmin = await lendingPoolAddressProvider.getPoolAdmin();
  const emergencyAdmin = await lendingPoolAddressProvider.getEmergencyAdmin();

  const obj: Record<string, any> = {};

  obj['LendingPoolAddressProvider'] = {
    address: AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: lendingPoolAddressProviderOwner,
      },
    ],
  };

  // add Lending Pool Configurator modifiers
  obj['LendingPoolConfigurator'] = {
    address: AaveV2EthereumArc.POOL_CONFIGURATOR,
    modifiers: [
      {
        modifier: 'onlyPoolAdmin',
        address: poolAdmin,
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: emergencyAdmin,
      },
    ],
  };

  // addModifierInArray(
  //   'LendingPoolConfigurator',
  //   'onlyPoolAdmin',
  //   await lendingPoolAddressProvider.getPoolAdmin(),
  //   modifiers,
  // );
  //
  // addModifierInArray(
  //   'LendingPoolConfigurator',
  //   'onlyEmergencyAdmin',
  //   await lendingPoolAddressProvider.getEmergencyAdmin(),
  //   modifiers,
  // );

  const arcTimelock = new ethers.Contract(
    await lendingPoolAddressProvider.getPoolAdmin(),
    arcTimelockAbi,
    provider,
  );

  addModifierInArray(
    'ArcTimelock',
    'onlyEthereumGovernanceExecutor',
    await arcTimelock.getEthereumGovernanceExecutor(),
    modifiers,
  );

  addModifierInArray(
    'ArcTimelock',
    'onlyGuardian',
    await arcTimelock.getGuardian(),
    modifiers,
  );

  const aaveOracle = new ethers.Contract(
    AaveV2EthereumArc.ORACLE,
    onlyOwnerAbi,
    provider,
  );

  addModifierInArray(
    'AaveOracle',
    'onlyOwner',
    await aaveOracle.owner(),
    modifiers,
  );

  const executorWithTimelock = new ethers.Contract(
    AaveGovernanceV2.SHORT_EXECUTOR,
    executorWithTimelockAbi,
    provider,
  );

  addModifierInArray(
    'ExecutorWithTimelock',
    'onlyTimelock',
    executorWithTimelock.address,
    modifiers,
  );

  addModifierInArray(
    'ExecutorWithTimelock',
    'onlyPendingAdmin',
    await executorWithTimelock.getPendingAdmin(),
    modifiers,
  );

  addModifierInArray(
    'ExecutorWithTimelock',
    'onlyAdmin',
    await executorWithTimelock.getAdmin(),
    modifiers,
  );

  const permissionManager = new ethers.Contract(
    PERMISSION_MANAGER,
    onlyOwnerAbi,
    provider,
  );

  addModifierInArray(
    'PermissionManager',
    'onlyOwner',
    await permissionManager.owner(),
    modifiers,
  );

  saveJson('./generated/modifiersArc.json', JSON.stringify(modifiers, null, 2));
};

generateArcModifiers();

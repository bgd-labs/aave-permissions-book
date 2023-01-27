import { ethers, providers } from 'ethers';
import { Pools } from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import lendingPoolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import arcTimelockAbi from '../abis/arcTimelockAbi.json';
import { AaveV2EthereumArc } from '@bgd-labs/aave-address-book';
import { getProxyAdmin } from '../helpers/proxyAdmin';
import { getSafeOwners } from '../helpers/guardian';
import collectorAbi from '../abis/collectorAbi.json';
import { ChainId } from '@aave/contract-helpers';
import { POOL_ADDRESSES_PROVIDER_REGISTRY } from '@bgd-labs/aave-address-book/dist/AaveV2EthereumAMM';
import { Contracts, PermissionsJson } from '../helpers/types';

export const resolveV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
  chainId: ChainId,
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
        addresses: [
          {
            address: lendingPoolAddressesProviderOwner,
            owners: await getSafeOwners(
              provider,
              lendingPoolAddressesProviderOwner,
            ),
          },
        ],
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
        addresses: [
          {
            address: addressBook.POOL_CONFIGURATOR,
            owners: [],
          },
        ],
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
        addresses: [
          {
            address: poolAdmin,
            owners: await getSafeOwners(provider, poolAdmin),
          },
        ],
        functions: roles['LendingPoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        addresses: [
          {
            address: emergencyAdmin,
            owners: await getSafeOwners(provider, emergencyAdmin),
          },
        ],
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
        addresses: [
          {
            address: aaveOracleOwner,
            owners: await getSafeOwners(provider, aaveOracleOwner),
          },
        ],
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
        addresses: [
          {
            address: lendingRateOracleOwner,
            owners: await getSafeOwners(provider, lendingRateOracleOwner),
          },
        ],
        functions: roles['LendingRateOracle']['onlyOwner'],
      },
    ],
  };

  // TODO: investigate why avalanche v2 doesnt have collector controller
  if (chainId !== ChainId.avalanche) {
    const collectorController = new ethers.Contract(
      addressBook.COLLECTOR_CONTROLLER,
      onlyOwnerAbi,
      provider,
    );

    const collectorControllerOwner = await collectorController.owner();

    obj['CollectorController'] = {
      address: addressBook.COLLECTOR_CONTROLLER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: collectorControllerOwner,
              owners: await getSafeOwners(provider, collectorControllerOwner),
            },
          ],
          functions: roles['CollectorController']['onlyOwner'],
        },
      ],
    };
    const collector = new ethers.Contract(
      addressBook.COLLECTOR,
      collectorAbi,
      provider,
    );

    const fundsAdmin = await collector.getFundsAdmin();
    obj['Collector'] = {
      address: addressBook.COLLECTOR,
      modifiers: [
        {
          modifier: 'onlyFundsAdmin',
          addresses: [
            {
              address: fundsAdmin,
              owners: await getSafeOwners(provider, fundsAdmin),
            },
          ],
          functions: roles['Collector']['onlyFundsAdmin'],
        },
      ],
    };
  }

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
          addresses: [
            {
              address: governanceExecutor,
              owners: await getSafeOwners(provider, governanceExecutor),
            },
          ],
          functions: roles['ArcTimelock']['onlyEthereumGovernanceExecutor'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: arcTimelockGuardian,
              owners: await getSafeOwners(provider, arcTimelockGuardian),
            },
          ],
          functions: roles['ArcTimelock']['onlyGuardian'],
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
          addresses: [
            {
              address: permissionManagerOwner,
              owners: await getSafeOwners(provider, permissionManagerOwner),
            },
          ],
          functions: roles['PermissionManager']['onlyOwner'],
        },
      ],
    };
  }

  if (pool !== Pools.ARC) {
    const wethGatewayContract = new ethers.Contract(
      addressBook.WETH_GATEWAY,
      onlyOwnerAbi,
      provider,
    );
    const wethGatewayOwner = await wethGatewayContract.owner();

    obj['WrappedTokenGatewayV2'] = {
      address: addressBook.WETH_GATEWAY,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: wethGatewayOwner,
              owners: await getSafeOwners(provider, wethGatewayOwner),
            },
          ],
          functions: roles['WrappedTokenGatewayV2']['onlyOwner'],
        },
      ],
    };
  }

  if (pool !== Pools.AMM && pool !== Pools.ARC) {
    const paraswapLiquiditySwapContract = new ethers.Contract(
      addressBook.SWAP_COLLATERAL_ADAPTER,
      onlyOwnerAbi,
      provider,
    );
    const liquiditySwapOwner = await paraswapLiquiditySwapContract.owner();

    obj['ParaSwapLiquiditySwapAdapter'] = {
      address: addressBook.SWAP_COLLATERAL_ADAPTER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: liquiditySwapOwner,
              owners: await getSafeOwners(provider, liquiditySwapOwner),
            },
          ],
          functions: roles['ParaSwapLiquiditySwapAdapter']['onlyOwner'],
        },
      ],
    };

    const paraswapRepaySwapContract = new ethers.Contract(
      addressBook.REPAY_WITH_COLLATERAL_ADAPTER,
      onlyOwnerAbi,
      provider,
    );
    const repaySwapOwner = await paraswapRepaySwapContract.owner();

    obj['ParaSwapRepayAdapter'] = {
      address: addressBook.REPAY_WITH_COLLATERAL_ADAPTER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: repaySwapOwner,
              owners: await getSafeOwners(provider, repaySwapOwner),
            },
          ],
          functions: roles['ParaSwapRepayAdapter']['onlyOwner'],
        },
      ],
    };
  }

  if (pool !== Pools.ARC) {
    const addressesRegistryContract = new ethers.Contract(
      addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY,
      onlyOwnerAbi,
      provider,
    );
    const addressRegistryOwner = await addressesRegistryContract.owner();

    obj['LendingPoolAddressesProviderRegistry'] = {
      address: addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: addressRegistryOwner,
              owners: await getSafeOwners(provider, addressRegistryOwner),
            },
          ],
          functions: roles['LendingPoolAddressesProviderRegistry']['onlyOwner'],
        },
      ],
    };
  }

  // TODO: incentives controller

  // add proxy admins
  const proxyAdminContracts: string[] = permissionsObject
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    // TODO: finally fix avax v2 collector stuff
    if (
      proxyAdminContracts[i] === 'Collector' &&
      chainId === ChainId.avalanche
    ) {
      break;
    }
    obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
      obj[proxyAdminContracts[i]].address,
      provider,
    );
  }

  return obj;
};

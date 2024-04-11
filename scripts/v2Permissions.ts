import { ethers, providers, utils } from 'ethers';
import { Pools } from '../helpers/configs.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import lendingPoolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json' assert { type: 'json' };
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json' assert { type: 'json' };
import arcTimelockAbi from '../abis/arcTimelockAbi.json' assert { type: 'json' };
import { AaveV2EthereumArc } from '@bgd-labs/aave-address-book';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import collectorAbi from '../abis/collectorAbi.json' assert { type: 'json' };
import { ChainId } from '@aave/contract-helpers';
import { Contracts, PermissionsJson } from '../helpers/types.js';
import { getBridgeExecutor } from './bridgeExecutors.js';

export const resolveV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
  chainId: ChainId,
): Promise<Contracts> => {
  let obj: Contracts = {};
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
            signersThreshold: await getSafeThreshold(
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
            signersThreshold: await getSafeThreshold(provider, poolAdmin),
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
            signersThreshold: await getSafeThreshold(provider, emergencyAdmin),
          },
        ],
        functions: roles['LendingPoolConfigurator']['onlyEmergencyAdmin'],
      },
    ],
  };

  // Proof of reserve contracts
  if (chainId === ChainId.avalanche) {
    // const code = ethers.utils.solidityKeccak256(
    //   ['string'],
    //   ['PROOF_OF_RESERVE_ADMIN'],
    // );
    // const proofOfReserveAdmin = await lendingPoolAddressesProvider.getAddress(
    //   code,
    // );
    obj['LendingPoolConfigurator'].modifiers.push({
      modifier: 'onlyPoolOrProofOfReserveAdmin',
      addresses: [
        {
          address: poolAdmin,
          owners: await getSafeOwners(provider, poolAdmin),
          signersThreshold: await getSafeThreshold(provider, poolAdmin),
        },
        {
          address: addressBook.PROOF_OF_RESERVE,
          owners: await getSafeOwners(provider, addressBook.PROOF_OF_RESERVE),
          signersThreshold: await getSafeThreshold(
            provider,
            addressBook.PROOF_OF_RESERVE,
          ),
        },
      ],
      functions:
        roles['LendingPoolConfigurator']['onlyPoolOrProofOfReserveAdmin'],
    });

    const porExecutorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE,
      onlyOwnerAbi,
      provider,
    );
    const porExecutorOwner = await porExecutorContract.owner();
    obj['ProofOfReserveExecutorV2'] = {
      address: addressBook.PROOF_OF_RESERVE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: porExecutorOwner,
              owners: await getSafeOwners(provider, porExecutorOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                porExecutorOwner,
              ),
            },
          ],
          functions: roles['ProofOfReserveExecutorV2']['onlyOwner'],
        },
      ],
    };
    const porAggregatorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE_AGGREGATOR,
      onlyOwnerAbi,
      provider,
    );
    const porAggregatorOwner = await porAggregatorContract.owner();
    obj['ProofOfReserveAggregatorV2'] = {
      address: addressBook.PROOF_OF_RESERVE_AGGREGATOR,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: porAggregatorOwner,
              owners: await getSafeOwners(provider, porAggregatorOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                porAggregatorOwner,
              ),
            },
          ],
          functions: roles['ProofOfReserveAggregatorV2']['onlyOwner'],
        },
      ],
    };
  }

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
            signersThreshold: await getSafeThreshold(provider, aaveOracleOwner),
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
            signersThreshold: await getSafeThreshold(
              provider,
              lendingRateOracleOwner,
            ),
          },
        ],
        functions: roles['LendingRateOracle']['onlyOwner'],
      },
    ],
  };

  const collector = new ethers.Contract(
    addressBook.COLLECTOR,
    collectorAbi,
    provider,
  );

  const fundsAdmin = await collector.getFundsAdmin();
  const collectorProxyAdmin = await getProxyAdmin(
    addressBook.COLLECTOR,
    provider,
  );
  obj['Collector'] = {
    address: addressBook.COLLECTOR,
    modifiers: [
      {
        modifier: 'onlyFundsAdmin',
        addresses: [
          {
            address: fundsAdmin,
            owners: await getSafeOwners(provider, fundsAdmin),
            signersThreshold: await getSafeThreshold(provider, fundsAdmin),
          },
        ],
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
          {
            address: fundsAdmin,
            owners: await getSafeOwners(provider, fundsAdmin),
            signersThreshold: await getSafeThreshold(provider, fundsAdmin),
          },
        ],
        functions: roles['Collector']['onlyAdminOrRecipient'],
      },
    ],
  };
  const proxyAdminContract = new ethers.Contract(
    collectorProxyAdmin,
    onlyOwnerAbi,
    provider,
  );
  const proxyAdminOwner = await proxyAdminContract.owner();
  obj['ProxyAdmin'] = {
    address: utils.getAddress(collectorProxyAdmin),
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

  // extra contracts for arc
  if (pool === Pools.V2_ARC || pool === Pools.V2_ARC_TENDERLY) {
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
              signersThreshold: await getSafeThreshold(
                provider,
                governanceExecutor,
              ),
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
              signersThreshold: await getSafeThreshold(
                provider,
                arcTimelockGuardian,
              ),
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
              signersThreshold: await getSafeThreshold(
                provider,
                permissionManagerOwner,
              ),
            },
          ],
          functions: roles['PermissionManager']['onlyOwner'],
        },
      ],
    };
  }

  if (pool !== Pools.V2_ARC && pool !== Pools.V2_ARC_TENDERLY) {
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
              signersThreshold: await getSafeThreshold(
                provider,
                wethGatewayOwner,
              ),
            },
          ],
          functions: roles['WrappedTokenGatewayV2']['onlyOwner'],
        },
      ],
    };
  }

  if (
    pool !== Pools.V2_AMM &&
    pool !== Pools.V2_ARC &&
    pool !== Pools.V2_AMM_TENDERLY &&
    pool !== Pools.V2_ARC_TENDERLY
  ) {
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
              signersThreshold: await getSafeThreshold(
                provider,
                liquiditySwapOwner,
              ),
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
              signersThreshold: await getSafeThreshold(
                provider,
                repaySwapOwner,
              ),
            },
          ],
          functions: roles['ParaSwapRepayAdapter']['onlyOwner'],
        },
      ],
    };
  }

  if (pool !== Pools.V2_ARC && pool !== Pools.V2_ARC_TENDERLY) {
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
              signersThreshold: await getSafeThreshold(
                provider,
                addressRegistryOwner,
              ),
            },
          ],
          functions: roles['LendingPoolAddressesProviderRegistry']['onlyOwner'],
        },
      ],
    };
  }

  // TODO: for now we use the first encountered as default
  if (
    addressBook.DEFAULT_INCENTIVES_CONTROLLER !==
    '0x0000000000000000000000000000000000000000'
  ) {
    obj['DefaultIncentivesController'] = {
      address: addressBook.DEFAULT_INCENTIVES_CONTROLLER,
      modifiers: [
        {
          modifier: 'onlyEmissionManager',
          addresses: [
            {
              address: addressBook.EMISSION_MANAGER,
              owners: await getSafeOwners(
                provider,
                addressBook.EMISSION_MANAGER,
              ),
              signersThreshold: await getSafeThreshold(
                provider,
                addressBook.EMISSION_MANAGER,
              ),
            },
          ],
          functions:
            chainId === ChainId.mainnet
              ? roles['DefaultIncentivesController'][
                  'onlyEmissionManager'
                ].filter((functionName) => functionName !== 'setRewardsVault')
              : roles['DefaultIncentivesController']['onlyEmissionManager'],
        },
      ],
    };
  }

  let bridgeExecutor = {};
  if (chainId === ChainId.polygon) {
    bridgeExecutor = await getBridgeExecutor(provider, chainId);
  }
  obj = { ...obj, ...bridgeExecutor };

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

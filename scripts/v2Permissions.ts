import { Pools } from '../helpers/configs.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { poolAddressProviderAbi } from '../abis/lendingPoolAddressProviderAbi.js';
import { lendingPoolConfigurator } from '../abis/lendingPoolConfigurator.js';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';
import { arcTimelockAbi } from '../abis/arcTimelockAbi.js';
import { AaveV2EthereumArc } from '@bgd-labs/aave-address-book';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { ChainId } from '@bgd-labs/toolbox';
import { Contracts, PermissionsJson } from '../helpers/types.js';
import { Address, Client, getAddress, getContract } from 'viem';

export const resolveV2Modifiers = async (
  addressBook: any,
  provider: Client,
  permissionsObject: PermissionsJson,
  pool: Pools,
  chainId: string,
): Promise<Contracts> => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const lendingPoolAddressesProvider = getContract({ address: getAddress(addressBook.POOL_ADDRESSES_PROVIDER), abi: poolAddressProviderAbi, client: provider });
  const lendingPoolAddressesProviderOwner: Address =
    await lendingPoolAddressesProvider.read.owner() as Address;
  const lendingRateOracleAddress: Address =
    await lendingPoolAddressesProvider.read.getLendingRateOracle() as Address;
  const poolAdmin: Address = await lendingPoolAddressesProvider.read.getPoolAdmin() as Address;
  const emergencyAdmin: string =
    await lendingPoolAddressesProvider.read.getEmergencyAdmin() as Address;

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

  const lendingPoolConfiguratorContract = getContract({ address: getAddress(addressBook.POOL_ADDRESSES_PROVIDER), abi: lendingPoolConfigurator, client: provider });
  const poolConfiguratorAdmin: Address =
    await lendingPoolConfiguratorContract.read.getPoolAdmin() as Address;
  const emergencyAdminConfigurator: Address =
    await lendingPoolConfiguratorContract.read.getEmergencyAdmin() as Address;
  obj['LendingPoolConfigurator'] = {
    address: addressBook.POOL_CONFIGURATOR,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyPoolAdmin',
        addresses: [
          {
            address: poolConfiguratorAdmin,
            owners: await getSafeOwners(provider, poolConfiguratorAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              poolConfiguratorAdmin,
            ),
          },
        ],
        functions: roles['LendingPoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        addresses: [
          {
            address: emergencyAdminConfigurator,
            owners: await getSafeOwners(provider, emergencyAdminConfigurator),
            signersThreshold: await getSafeThreshold(
              provider,
              emergencyAdminConfigurator,
            ),
          },
        ],
        functions: roles['LendingPoolConfigurator']['onlyEmergencyAdmin'],
      },
    ],
  };
  if (pool === Pools.V2) {
    obj['LendingPoolConfigurator'].modifiers.push({
      modifier: 'onlyPoolOrEmergencyAdmin',
      addresses: [
        {
          address: poolConfiguratorAdmin,
          owners: await getSafeOwners(provider, poolConfiguratorAdmin),
          signersThreshold: await getSafeThreshold(
            provider,
            poolConfiguratorAdmin,
          ),
        },
        {
          address: emergencyAdminConfigurator,
          owners: await getSafeOwners(provider, emergencyAdminConfigurator),
          signersThreshold: await getSafeThreshold(
            provider,
            emergencyAdminConfigurator,
          ),
        },
      ],
      functions: roles['LendingPoolConfigurator']['onlyPoolOrEmergencyAdmin'],
    });
  }

  // Proof of reserve contracts
  if (Number(chainId) === Number(ChainId.avalanche)) {
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

    const porExecutorContract = getContract({ address: getAddress(addressBook.PROOF_OF_RESERVE), abi: onlyOwnerAbi, client: provider });
    const porExecutorOwner = await porExecutorContract.read.owner() as Address;
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
    const porAggregatorContract = getContract({ address: getAddress(addressBook.PROOF_OF_RESERVE_AGGREGATOR), abi: onlyOwnerAbi, client: provider });
    const porAggregatorOwner = await porAggregatorContract.read.owner() as Address;
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

  const aaveOracle = getContract({ address: getAddress(addressBook.ORACLE), abi: onlyOwnerAbi, client: provider });
  const aaveOracleOwner = await aaveOracle.read.owner() as Address;

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

  const lendingRateOracle = getContract({ address: getAddress(lendingRateOracleAddress), abi: onlyOwnerAbi, client: provider });
  const lendingRateOracleOwner = await lendingRateOracle.read.owner() as Address;

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


  const collectorProxyAdmin = await getProxyAdmin(
    addressBook.COLLECTOR,
    provider,
  );

  const proxyAdminContract = getContract({ address: getAddress(collectorProxyAdmin), abi: onlyOwnerAbi, client: provider });
  const proxyAdminOwner = await proxyAdminContract.read.owner() as Address;
  obj['ProxyAdmin'] = {
    address: getAddress(collectorProxyAdmin),
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
    const arcTimelock = getContract({ address: getAddress(poolAdmin), abi: arcTimelockAbi, client: provider });
    const governanceExecutor =
      await arcTimelock.read.getEthereumGovernanceExecutor() as Address;
    const arcTimelockGuardian = await arcTimelock.read.getGuardian() as Address;

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

    const permissionManager = getContract({ address: getAddress(AaveV2EthereumArc.PERMISSION_MANAGER), abi: onlyOwnerAbi, client: provider });
    const permissionManagerOwner = await permissionManager.read.owner() as Address;

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
    const wethGatewayContract = getContract({ address: getAddress(addressBook.WETH_GATEWAY), abi: onlyOwnerAbi, client: provider });
    const wethGatewayOwner = await wethGatewayContract.read.owner() as Address;

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
    const paraswapLiquiditySwapContract = getContract({ address: getAddress(addressBook.SWAP_COLLATERAL_ADAPTER), abi: onlyOwnerAbi, client: provider });
    const liquiditySwapOwner = await paraswapLiquiditySwapContract.read.owner() as Address;

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

    const paraswapRepaySwapContract = getContract({ address: getAddress(addressBook.REPAY_WITH_COLLATERAL_ADAPTER), abi: onlyOwnerAbi, client: provider });
    const repaySwapOwner = await paraswapRepaySwapContract.read.owner() as Address;

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
    const addressesRegistryContract = getContract({ address: getAddress(addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY), abi: onlyOwnerAbi, client: provider });
    const addressRegistryOwner = await addressesRegistryContract.read.owner() as Address;

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
    addressBook.DEFAULT_INCENTIVES_CONTROLLER != undefined &&
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
            Number(chainId) === Number(ChainId.mainnet)
              ? roles['DefaultIncentivesController'][
                'onlyEmissionManager'
              ].filter((functionName) => functionName !== 'setRewardsVault')
              : roles['DefaultIncentivesController']['onlyEmissionManager'],
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

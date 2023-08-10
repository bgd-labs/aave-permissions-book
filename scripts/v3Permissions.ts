import { ethers, providers, utils } from 'ethers';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json' assert { type: 'json' };
import collectorAbi from '../abis/collectorAbi.json' assert { type: 'json' };
import { Pools } from '../helpers/configs.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import poolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json' assert { type: 'json' };
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners } from '../helpers/guardian.js';
import { ChainId } from '@aave/contract-helpers';
import { getBridgeExecutor } from './bridgeExecutors.js';
import { AddressInfo, Contracts, PermissionsJson } from '../helpers/types.js';

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

export const resolveV3Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
  chainId: ChainId | number,
  adminRoles: Record<string, string[]>,
): Promise<Contracts> => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const owners: Record<string, Record<string, string[]>> = {};
  // owners
  for (const roleName of Object.keys(adminRoles)) {
    for (const roleAddress of adminRoles[roleName]) {
      if (!owners[roleName]) {
        owners[roleName] = {
          [roleAddress]: await getSafeOwners(provider, roleAddress),
        };
      } else if (owners[roleName] && !owners[roleName][roleAddress]) {
        owners[roleName][roleAddress] = await getSafeOwners(
          provider,
          roleAddress,
        );
      }
    }
  }

  const poolAddressesProvider = new ethers.Contract(
    addressBook.POOL_ADDRESSES_PROVIDER,
    poolAddressProviderAbi,
    provider,
  );

  const poolAddressesProviderOwner = await poolAddressesProvider.owner();

  obj['PoolAddressesProvider'] = {
    address: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: poolAddressesProviderOwner,
            owners: await getSafeOwners(provider, poolAddressesProviderOwner),
          },
        ],
        functions: roles['PoolAddressesProvider']['onlyOwner'],
      },
    ],
  };

  obj['Pool'] = {
    address: addressBook.POOL,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyPoolConfigurator',
        addresses: [
          {
            address: addressBook.POOL_CONFIGURATOR,
            owners: [],
          },
        ],
        functions: roles['Pool']['onlyPoolConfigurator'],
      },
      {
        modifier: 'onlyPoolAdmin',
        addresses: [
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
        ],
        functions: roles['Pool']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyBridge',
        addresses: [
          ...adminRoles['BRIDGE'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['BRIDGE'][roleAddress] || [],
            };
          }),
        ],
        functions: roles['Pool']['onlyBridge'],
      },
    ],
  };

  obj['PoolConfigurator'] = {
    address: addressBook.POOL_CONFIGURATOR,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyPoolAdmin',
        addresses: [
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
        ],
        functions: roles['PoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        addresses: [
          ...adminRoles['EMERGENCY_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['EMERGENCY_ADMIN'][roleAddress] || [],
            };
          }),
        ],
        functions: roles['PoolConfigurator']['onlyEmergencyAdmin'],
      },
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
          ...adminRoles['ASSET_LISTING_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['ASSET_LISTING_ADMIN'][roleAddress] || [],
            };
          }),
        ]),
        functions: roles['PoolConfigurator']['onlyAssetListingOrPoolAdmins'],
      },
      {
        modifier: 'onlyRiskOrPoolAdmins',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
          ...adminRoles['RISK_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['RISK_ADMIN'][roleAddress] || [],
            };
          }),
        ]),

        functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
      },
      {
        modifier: 'onlyEmergencyOrPoolAdmin',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
          ...adminRoles['EMERGENCY_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['EMERGENCY_ADMIN'][roleAddress] || [],
            };
          }),
        ]),

        functions: roles['PoolConfigurator']['onlyEmergencyOrPoolAdmin'],
      },
    ],
  };

  if (chainId === ChainId.avalanche) {
    const porExecutorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE,
      onlyOwnerAbi,
      provider,
    );
    const porExecutorOwner = await porExecutorContract.owner();
    obj['ProofOfReserveExecutor'] = {
      address: addressBook.PROOF_OF_RESERVE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: porExecutorOwner,
              owners: await getSafeOwners(provider, porExecutorOwner),
            },
          ],
          functions: roles['ProofOfReserveExecutor']['onlyOwner'],
        },
      ],
    };
    const porAggregatorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE_AGGREGATOR,
      onlyOwnerAbi,
      provider,
    );
    const porAggregatorOwner = await porAggregatorContract.owner();
    obj['ProofOfReserveAggregator'] = {
      address: addressBook.PROOF_OF_RESERVE_AGGREGATOR,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: porAggregatorOwner,
              owners: await getSafeOwners(provider, porAggregatorOwner),
            },
          ],
          functions: roles['ProofOfReserveAggregator']['onlyOwner'],
        },
      ],
    };
  }

  obj['AaveOracle'] = {
    address: addressBook.ORACLE,
    modifiers: [
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress] || [],
            };
          }),
          ...adminRoles['ASSET_LISTING_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['ASSET_LISTING_ADMIN'][roleAddress] || [],
            };
          }),
        ]),
        functions: roles['AaveOracle']['onlyAssetListingOrPoolAdmins'],
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
          },
          {
            address: fundsAdmin,
            owners: await getSafeOwners(provider, fundsAdmin),
          },
        ],
        functions: roles['Collector']['onlyAdminOrRecipient'],
      },
    ],
  };

  // for now, we use the same as practically there is only one rewards controller and emission manager
  // but could be that there is one of these for every token
  obj['RewardsController'] = {
    address: addressBook.DEFAULT_INCENTIVES_CONTROLLER,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: addressBook.EMISSION_MANAGER,
            owners: await getSafeOwners(provider, addressBook.EMISSION_MANAGER),
          },
        ],
        functions: roles['RewardsController']['onlyEmissionManager'],
      },
    ],
  };
  if (chainId === ChainId.mainnet || chainId === 1088) {
    obj['RewardsController'].proxyAdmin = addressBook.POOL_ADDRESSES_PROVIDER;
  }

  if (addressBook.WETH_GATEWAY) {
    const wethGatewayContract = new ethers.Contract(
      addressBook.WETH_GATEWAY,
      onlyOwnerAbi,
      provider,
    );
    const wethGatewayOwner = await wethGatewayContract.owner();

    obj['WrappedTokenGatewayV3'] = {
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
          functions: roles['WrappedTokenGatewayV3']['onlyOwner'],
        },
      ],
    };
  }
  if (addressBook.SWAP_COLLATERAL_ADAPTER) {
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
  }
  if (addressBook.REPAY_WITH_COLLATERAL_ADAPTER) {
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

  const emissionManagerContract = new ethers.Contract(
    addressBook.EMISSION_MANAGER,
    onlyOwnerAbi,
    provider,
  );
  const emissionManagerOwner = await emissionManagerContract.owner();

  obj['EmissionManager'] = {
    address: addressBook.EMISSION_MANAGER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: emissionManagerOwner,
            owners: await getSafeOwners(provider, emissionManagerOwner),
          },
        ],
        functions: roles['EmissionManager']['onlyOwner'],
      },
      // TODO: as emissionAdmin is for reward, for now we leave it commented, not so sure what to do with this
      // {
      //   modifier: 'onlyEmissionAdmin',
      //   addresses: [
      //     {
      //       address: 'Dependent on reward',
      //       owners: [],
      //     },
      //   ],
      //   functions: roles['EmissionManager']['onlyEmissionAdmin'],
      // },
    ],
  };

  const addressesRegistryContract = new ethers.Contract(
    addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY,
    onlyOwnerAbi,
    provider,
  );
  const addressRegistryOwner = await addressesRegistryContract.owner();

  obj['PoolAddressesProviderRegistry'] = {
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
        functions: roles['PoolAddressesProviderRegistry']['onlyOwner'],
      },
    ],
  };

  if (addressBook.RATES_FACTORY) {
    obj['RatesFactory'] = {
      address: addressBook.RATES_FACTORY,
      modifiers: [],
    };
    const proxyAdminContractAddress = await getProxyAdmin(
      addressBook.RATES_FACTORY,
      provider,
    );

    const proxyAdminContract = new ethers.Contract(
      proxyAdminContractAddress,
      onlyOwnerAbi,
      provider,
    );
    const proxyAdminOwner = await proxyAdminContract.owner();

    obj['ProxyAdmin'] = {
      address: utils.getAddress(proxyAdminContractAddress),
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: proxyAdminOwner,
              owners: await getSafeOwners(provider, proxyAdminOwner),
            },
          ],
          functions: roles['ProxyAdmin']['onlyOwner'],
        },
      ],
    };
  }

  obj['ACLManager'] = {
    address: addressBook.ACL_MANAGER,
    modifiers: [
      {
        modifier: 'setRoleAdmin',
        addresses: [
          ...adminRoles['DEFAULT_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['DEFAULT_ADMIN'][roleAddress] || [],
            };
          }),
        ],
        functions: roles['ACLManager']['setRoleAdmin'],
      },
    ],
  };

  let bridgeExecutor = {};
  if (
    chainId === ChainId.polygon ||
    chainId === ChainId.optimism ||
    chainId === ChainId.arbitrum_one ||
    chainId === 1088
  ) {
    bridgeExecutor = await getBridgeExecutor(provider, chainId);
  }
  obj = { ...obj, ...bridgeExecutor };

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

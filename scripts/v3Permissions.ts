import { ethers, providers, utils, constants } from 'ethers';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';
import { collectorAbi } from '../abis/collectorAbi.js';
import { Pools } from '../helpers/configs.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { poolAddressProviderAbi } from '../abis/lendingPoolAddressProviderAbi.js';
import { getProxyAdmin, getProxyAdminFromFactory } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { ChainId } from '@bgd-labs/toolbox';
import {
  AddressInfo,
  Contracts,
  Guardian,
  PermissionsJson,
  PoolGuardians,
} from '../helpers/types.js';
import { capsPlusRiskStewardABI } from '../abis/capsPlusRiskSteward.js';
import { erc20Bridge } from '../abis/Erc20Bridge.js';
import { RISK_STEWARDS_ABI } from '../abis/riskStewards.js';
import { SVR_ORACLE_STEWARD_ABI } from '../abis/svrOracle.js';
import { EDGE_RISK_STEWARD_CAPS_ABI } from '../abis/edgeRiskStewardCaps.js';
import { POOL_EXPOSURE_STEWARD_ABI } from '../abis/poolExposureStewards.js';

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

  const owners: Record<string, Record<string, Guardian>> = {};
  // owners
  for (const roleName of Object.keys(adminRoles)) {
    for (const roleAddress of adminRoles[roleName]) {
      if (!owners[roleName]) {
        owners[roleName] = {
          [roleAddress]: {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          },
        };
      } else if (owners[roleName] && !owners[roleName][roleAddress]) {
        owners[roleName][roleAddress] = {
          owners: await getSafeOwners(provider, roleAddress),
          threshold: await getSafeThreshold(provider, roleAddress),
        };
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
            signersThreshold: await getSafeThreshold(
              provider,
              poolAddressesProviderOwner,
            ),
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
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
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
              owners: owners['BRIDGE'][roleAddress].owners || [],
              signersThreshold: owners['BRIDGE'][roleAddress].threshold || 0,
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
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ],
        functions: roles['PoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['ASSET_LISTING_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['ASSET_LISTING_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['ASSET_LISTING_ADMIN'][roleAddress].threshold || 0,
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
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['RISK_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['RISK_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['RISK_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ]),

        functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
      },
      {
        modifier: 'onlyRiskOrPoolOrEmergencyAdmins',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['RISK_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['RISK_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['RISK_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['EMERGENCY_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['EMERGENCY_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['EMERGENCY_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ]),

        functions: roles['PoolConfigurator']['onlyRiskOrPoolOrEmergencyAdmins'],
      },
      {
        modifier: 'onlyEmergencyOrPoolAdmin',
        addresses: uniqueAddresses([
          ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['EMERGENCY_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['EMERGENCY_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['EMERGENCY_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ]),

        functions: roles['PoolConfigurator']['onlyEmergencyOrPoolAdmin'],
      },
    ],
  };

  if (chainId === ChainId.mainnet) {
    obj['GHOFlashMinter'] = {
      address: '0xb639D208Bcf0589D54FaC24E655C79EC529762B8',
      modifiers: [
        {
          modifier: 'onlyPoolAdmin',
          addresses: uniqueAddresses([
            ...adminRoles['POOL_ADMIN'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                signersThreshold:
                  owners['POOL_ADMIN'][roleAddress].threshold || 0,
              };
            }),
          ]),
          functions: roles['GHOFlashMinter']['onlyPoolAdmin'],
        },
      ],
    };
  }

  if (chainId === ChainId.avalanche) {
    const porExecutorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE,
      onlyOwnerAbi,
      provider,
    );
    const porExecutorOwner = await porExecutorContract.owner();

    obj['ProofOfReserveExecutorV3'] = {
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
          functions: roles['ProofOfReserveExecutorV3']['onlyOwner'],
        },
      ],
    };

    const porAggregatorContract = new ethers.Contract(
      addressBook.PROOF_OF_RESERVE_AGGREGATOR,
      onlyOwnerAbi,
      provider,
    );
    const porAggregatorOwner = await porAggregatorContract.owner();

    obj['ProofOfReserveAggregatorV3'] = {
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
          functions: roles['ProofOfReserveAggregatorV3']['onlyOwner'],
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
              owners: owners['POOL_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['POOL_ADMIN'][roleAddress].threshold || 0,
            };
          }),
          ...adminRoles['ASSET_LISTING_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['ASSET_LISTING_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['ASSET_LISTING_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ]),
        functions: roles['AaveOracle']['onlyAssetListingOrPoolAdmins'],
      },
    ],
  };

  // for now, we use the same as practically there is only one rewards controller and emission manager
  // but could be that there is one of these for every token
  obj['RewardsController'] = {
    address: addressBook.DEFAULT_INCENTIVES_CONTROLLER,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: addressBook.EMISSION_MANAGER,
            owners: await getSafeOwners(provider, addressBook.EMISSION_MANAGER),
            signersThreshold: await getSafeThreshold(
              provider,
              addressBook.EMISSION_MANAGER,
            ),
          },
        ],
        functions: roles['RewardsController']['onlyEmissionManager'],
      },
    ],
  };

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
              signersThreshold: await getSafeThreshold(
                provider,
                wethGatewayOwner,
              ),
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
            signersThreshold: await getSafeThreshold(
              provider,
              emissionManagerOwner,
            ),
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
            signersThreshold: await getSafeThreshold(
              provider,
              addressRegistryOwner,
            ),
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
  }


  if (addressBook.PROXY_ADMIN) {
    const proxyAdminContract = new ethers.Contract(
      addressBook.PROXY_ADMIN,
      onlyOwnerAbi,
      provider,
    );
    const proxyAdminOwner = await proxyAdminContract.owner();

    obj['ProxyAdmin'] = {
      address: addressBook.PROXY_ADMIN,
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

  if (addressBook.PROXY_ADMIN_LONG) {
    const proxyAdminLongContract = new ethers.Contract(
      addressBook.PROXY_ADMIN_LONG,
      onlyOwnerAbi,
      provider,
    );
    const proxyAdminLongOwner = await proxyAdminLongContract.owner();

    obj['ProxyAdminLong'] = {
      address: addressBook.PROXY_ADMIN_LONG,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: proxyAdminLongOwner,
              owners: await getSafeOwners(provider, proxyAdminLongOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                proxyAdminLongOwner,
              ),
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
        modifier: 'onlyRole',
        addresses: [
          ...adminRoles['DEFAULT_ADMIN'].map((roleAddress) => {
            return {
              address: roleAddress,
              owners: owners['DEFAULT_ADMIN'][roleAddress].owners || [],
              signersThreshold:
                owners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
            };
          }),
        ],
        functions: roles['ACLManager']['onlyRole'],
      },
    ],
  };

  if (addressBook.CAPS_PLUS_RISK_STEWARD) {
    const riskStewardContract = new ethers.Contract(
      addressBook.CAPS_PLUS_RISK_STEWARD,
      capsPlusRiskStewardABI,
      provider,
    );
    const riskCouncil = await riskStewardContract.RISK_COUNCIL();
    obj['CapPlusRiskSteward'] = {
      address: addressBook.CAPS_PLUS_RISK_STEWARD,
      modifiers: [
        {
          modifier: 'onlyRiskCouncil',
          addresses: [
            {
              address: riskCouncil,
              owners: await getSafeOwners(provider, riskCouncil),
              signersThreshold: await getSafeThreshold(provider, riskCouncil),
            },
          ],
          functions: roles['CapPlusRiskSteward']['onlyRiskCouncil'],
        },
      ],
    };
  }

  if (addressBook.FREEZING_STEWARD) {
    obj['FreezeSteward'] = {
      address: addressBook.FREEZING_STEWARD,
      modifiers: [
        {
          modifier: 'onlyEmergencyAdmin',
          addresses: [
            ...adminRoles['EMERGENCY_ADMIN'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['EMERGENCY_ADMIN'][roleAddress].owners || [],
                signersThreshold:
                  owners['EMERGENCY_ADMIN'][roleAddress].threshold || 0,
              };
            }),
          ],
          functions: roles['FreezeSteward']['onlyEmergencyAdmin'],
        },
      ],
    };
  }

  if (addressBook.AAVE_MERKLE_DISTRIBUTOR) {
    const merkleDistributorContract = new ethers.Contract(
      addressBook.AAVE_MERKLE_DISTRIBUTOR,
      onlyOwnerAbi,
      provider,
    );
    const merkleDistributorOwner = await merkleDistributorContract.owner();

    obj['AaveMerkleDistributor'] = {
      address: addressBook.AAVE_MERKLE_DISTRIBUTOR,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: merkleDistributorOwner,
              owners: await getSafeOwners(provider, merkleDistributorOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                merkleDistributorOwner,
              ),
            },
          ],
          functions: roles['AaveMerkleDistributor']['onlyOwner'],
        },
      ],
    };
  }

  if (addressBook.SVR_STEWARD) {
    const svrOracleStewardContract = new ethers.Contract(
      addressBook.SVR_STEWARD,
      SVR_ORACLE_STEWARD_ABI,
      provider,
    );
    const svrOwner = await svrOracleStewardContract.owner();
    const svrGuardian = await svrOracleStewardContract.guardian();

    obj['SvrOracleSteward'] = {
      address: addressBook.SVR_STEWARD,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: svrOwner,
              owners: await getSafeOwners(provider, svrOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                svrOwner,
              ),
            },
          ],
          functions: roles['SvrOracleSteward']['onlyOwner'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: svrGuardian,
              owners: await getSafeOwners(provider, svrGuardian),
              signersThreshold: await getSafeThreshold(
                provider,
                svrGuardian,
              ),
            },
          ],
          functions: roles['SvrOracleSteward']['onlyGuardian'],
        },
      ],
    };
  }

  if (addressBook.EDGE_RISK_STEWARD_CAPS) {
    const edgeRiskStewardCapsContract = new ethers.Contract(
      addressBook.EDGE_RISK_STEWARD_CAPS,
      EDGE_RISK_STEWARD_CAPS_ABI,
      provider,
    );
    const edgeRiskStewardOwner = await edgeRiskStewardCapsContract.owner();
    const edgeRiskStewardCouncil = await edgeRiskStewardCapsContract.RISK_COUNCIL();


    obj['EdgeRiskStewardCaps'] = {
      address: addressBook.EDGE_RISK_STEWARD_CAPS,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: edgeRiskStewardOwner,
              owners: await getSafeOwners(provider, edgeRiskStewardOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                edgeRiskStewardOwner,
              ),
            },
          ],
          functions: roles['EdgeRiskStewardCaps']['onlyOwner'],
        },
        {
          modifier: 'onlyRiskCouncil',
          addresses: [
            {
              address: edgeRiskStewardCouncil,
              owners: await getSafeOwners(provider, edgeRiskStewardCouncil),
              signersThreshold: await getSafeThreshold(
                provider,
                edgeRiskStewardCouncil,
              ),
            },
          ],
          functions: roles['EdgeRiskStewardCaps']['onlyRiskCouncil'],
        },
      ],
    };
  }

  if (addressBook.POOL_EXPOSURE_STEWARD) {
    const poolExposureStewardContract = new ethers.Contract(
      addressBook.POOL_EXPOSURE_STEWARD,
      POOL_EXPOSURE_STEWARD_ABI,
      provider,
    );
    const poolExposureStewardOwner = await poolExposureStewardContract.owner();
    const poolExposureStewardGuardian = await poolExposureStewardContract.guardian();

    obj['PoolExposureSteward'] = {
      address: addressBook.POOL_EXPOSURE_STEWARD,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: poolExposureStewardOwner,
              owners: await getSafeOwners(provider, poolExposureStewardOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                poolExposureStewardOwner,
              ),
            },
          ],
          functions: roles['PoolExposureSteward']['onlyOwner'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: poolExposureStewardGuardian,
              owners: await getSafeOwners(provider, poolExposureStewardGuardian),
              signersThreshold: await getSafeThreshold(provider, poolExposureStewardGuardian),
            },
            {
              address: poolExposureStewardOwner,
              owners: await getSafeOwners(provider, poolExposureStewardOwner),
              signersThreshold: await getSafeThreshold(provider, poolExposureStewardOwner),
            },
          ],
          functions: roles['PoolExposureSteward']['onlyOwnerOrGuardian'],
        },
      ],
    };
  }

  if (addressBook.GHO_AAVE_CORE_STEWARD) {
    const ghoAaveCoreStewardContract = new ethers.Contract(
      addressBook.GHO_AAVE_CORE_STEWARD,
      EDGE_RISK_STEWARD_CAPS_ABI,
      provider,
    );
    const ghoAaveCoreStewardOwner = await ghoAaveCoreStewardContract.owner();
    const ghoAaveCoreStewardGuardian = await ghoAaveCoreStewardContract.RISK_COUNCIL();

    obj['GhoAaveSteward'] = {
      address: addressBook.GHO_AAVE_CORE_STEWARD,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: ghoAaveCoreStewardOwner,
              owners: await getSafeOwners(provider, ghoAaveCoreStewardOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                ghoAaveCoreStewardOwner,
              ),
            },
          ],
          functions: roles['GhoAaveSteward']['onlyOwner'],
        },
        {
          modifier: 'onlyRiskCouncil',
          addresses: [
            {
              address: ghoAaveCoreStewardGuardian,
              owners: await getSafeOwners(provider, ghoAaveCoreStewardGuardian),
              signersThreshold: await getSafeThreshold(provider, ghoAaveCoreStewardGuardian),
            },
          ],
          functions: roles['GhoAaveSteward']['onlyRiskCouncil'],
        },
      ],
    };
  }




  if (addressBook.AAVE_POL_ETH_BRIDGE) {
    const polEthBridgeContract = new ethers.Contract(
      addressBook.AAVE_POL_ETH_BRIDGE,
      erc20Bridge,
      provider,
    );
    const polEthBridgeOwner = await polEthBridgeContract.owner();
    const polEthBridgeRescuer = await polEthBridgeContract.whoCanRescue();

    obj['AavePolEthBridge'] = {
      address: addressBook.AAVE_POL_ETH_BRIDGE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: polEthBridgeOwner,
              owners: await getSafeOwners(provider, polEthBridgeOwner),
              signersThreshold: await getSafeThreshold(
                provider,
                polEthBridgeOwner,
              ),
            },
          ],
          functions: roles['AavePolEthBridge']['onlyOwner'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            {
              address: polEthBridgeRescuer,
              owners: await getSafeOwners(provider, polEthBridgeRescuer),
              signersThreshold: await getSafeThreshold(
                provider,
                polEthBridgeRescuer,
              ),
            },
          ],
          functions: roles['AavePolEthBridge']['onlyRescueGuardian'],
        },
      ],
    };
  }

  if (addressBook.RISK_STEWARD) {
    const riskStewardsContract = new ethers.Contract(
      addressBook.RISK_STEWARD,
      RISK_STEWARDS_ABI,
      provider,
    );
    const riskOwner = await riskStewardsContract.owner();
    const riskCouncil = await riskStewardsContract.RISK_COUNCIL();

    obj['Manual AGRS'] = {
      address: addressBook.RISK_STEWARD,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: riskOwner,
              owners: await getSafeOwners(provider, riskOwner),
              signersThreshold: await getSafeThreshold(provider, riskOwner),
            },
          ],
          functions: roles['Manual_AGRS']['onlyOwner'],
        },
        {
          modifier: 'onlyRiskCouncil',
          addresses: [
            {
              address: riskCouncil,
              owners: await getSafeOwners(provider, riskCouncil),
              signersThreshold: await getSafeThreshold(provider, riskCouncil),
            },
          ],
          functions: roles['Manual_AGRS']['onlyRiskCouncil'],
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

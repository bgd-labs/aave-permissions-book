import { ethers, providers } from 'ethers';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import collectorAbi from '../abis/collectorAbi.json';
import {
  AddressInfo,
  Contracts,
  PermissionsJson,
  Pools,
} from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import poolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json';
import { getProxyAdmin } from '../helpers/proxyAdmin';
import { getSafeOwners } from '../helpers/guardian';

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
  adminRoles: Record<string, string[]>,
): Promise<Contracts> => {
  const obj: Contracts = {};
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

  // const addressProviderRegistry = new ethers.Contract(
  //   poolAddressProviderRegistryAddress,
  //   onlyOwnerAbi,
  //   provider,
  // );
  // const addressProviderRegistryOwner = await addressProviderRegistry.owner();
  // addModifier(
  //   network,
  //   addressProviderRegistryOwner,
  //   index,
  //   'PoolAddressesProviderRegistry',
  //   'onlyOwner',
  // );

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

  // TODO: emission manager
  // TODO: bridge executor

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

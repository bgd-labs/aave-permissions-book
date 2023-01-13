import { ethers, providers } from 'ethers';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import collectorAbi from '../abis/collectorAbi.json';
import { Contracts, PermissionsJson, Pools, Roles } from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import poolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json';
import { getProxyAdmin } from '../helpers/proxyAdmin';

export const resolveV3Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
  adminRoles: Roles,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const lendingPoolAddressesProvider = new ethers.Contract(
    addressBook.POOL_ADDRESSES_PROVIDER,
    poolAddressProviderAbi,
    provider,
  );

  const lendingPoolAddressesProviderOwner =
    await lendingPoolAddressesProvider.owner();

  obj['PoolAddressesProvider'] = {
    address: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyOwner',
        address: lendingPoolAddressesProviderOwner,
        functions: roles['PoolAddressesProvider']['onlyOwner'],
      },
    ],
  };

  obj['Pool'] = {
    address: addressBook.POOL,
    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
    modifiers: [
      {
        modifier: 'onlyLendingPoolConfigurator',
        address: [addressBook.POOL_CONFIGURATOR],
        functions: roles['Pool']['onlyLendingPoolConfigurator'],
      },
      {
        modifier: 'onlyPoolAdmin',
        address: [...adminRoles.role['POOL_ADMIN']],
        functions: roles['Pool']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyBridge',
        address: [...adminRoles.role['BRIDGE']],
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
        address: [...adminRoles.role['POOL_ADMIN']],
        functions: roles['PoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: [...adminRoles.role['EMERGENCY_ADMIN']],
        functions: roles['PoolConfigurator']['onlyEmergencyAdmin'],
      },
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'],
            ...adminRoles.role['ASSET_LISTING_ADMIN'],
          ]),
        ],
        functions: roles['PoolConfigurator']['onlyAssetListingOrPoolAdmins'],
      },
      {
        modifier: 'onlyRiskOrPoolAdmins',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'],
            ...adminRoles.role['RISK_ADMIN'],
          ]),
        ],
        functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
      },
      {
        modifier: 'onlyEmergencyOrPoolAdmin',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'],
            ...adminRoles.role['EMERGENCY_ADMIN'],
          ]),
        ],
        functions: roles['PoolConfigurator']['onlyEmergencyOrPoolAdmin'],
      },
    ],
  };

  obj['AaveOracle'] = {
    address: addressBook.ORACLE,
    modifiers: [
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'],
            ...adminRoles.role['ASSET_LISTING_ADMIN'],
          ]),
        ],
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
        address: [collectorControllerOwner],
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
        address: [fundsAdmin],
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
        address: [addressBook.EMISSION_MANAGER],
        functions: roles['Collector']['onlyEmissionManager'],
      },
    ],
  };

  // TODO: weth gateway

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

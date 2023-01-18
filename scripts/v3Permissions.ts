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
        address: [lendingPoolAddressesProviderOwner],
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
        address: [addressBook.POOL_CONFIGURATOR],
        functions: roles['Pool']['onlyPoolConfigurator'],
      },
      {
        modifier: 'onlyPoolAdmin',
        address: [...adminRoles.role['POOL_ADMIN'].map((role) => role.address)],
        functions: roles['Pool']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyBridge',
        address: [...adminRoles.role['BRIDGE'].map((role) => role.address)],
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
        address: [...adminRoles.role['POOL_ADMIN'].map((role) => role.address)],
        functions: roles['PoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: [
          ...adminRoles.role['EMERGENCY_ADMIN'].map((role) => role.address),
        ],
        functions: roles['PoolConfigurator']['onlyEmergencyAdmin'],
      },
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'].map((role) => role.address),
            ...adminRoles.role['ASSET_LISTING_ADMIN'].map(
              (role) => role.address,
            ),
          ]),
        ],
        functions: roles['PoolConfigurator']['onlyAssetListingOrPoolAdmins'],
      },
      {
        modifier: 'onlyRiskOrPoolAdmins',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'].map((role) => role.address),
            ...adminRoles.role['RISK_ADMIN'].map((role) => role.address),
          ]),
        ],
        functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
      },
      {
        modifier: 'onlyEmergencyOrPoolAdmin',
        address: [
          ...new Set([
            ...adminRoles.role['POOL_ADMIN'].map((role) => role.address),
            ...adminRoles.role['EMERGENCY_ADMIN'].map((role) => role.address),
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
            ...adminRoles.role['POOL_ADMIN'].map((role) => role.address),
            ...adminRoles.role['ASSET_LISTING_ADMIN'].map(
              (role) => role.address,
            ),
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
        functions: roles['RewardsController']['onlyEmissionManager'],
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

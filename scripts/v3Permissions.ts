import { ethers, providers } from 'ethers';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import collectorAbi from '../abis/collectorAbi.json';
import rewardsControllerAbi from '../abis/rewardsControllerAbi.json';
import { Contracts, PermissionsJson, Pools } from '../helpers/configs';
import { generateRoles } from '../helpers/jsonParsers';
import poolAddressProviderAbi from '../abis/lendingPoolAddressProviderAbi.json';
import { getProxyAdmin } from '../helpers/proxyAdmin';

async function resolveV3Modifiers(
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  pool: Pools,
) {
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

  // todo use acl admin to get the roles addresses
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
        address: [poolAdmin],
        functions: roles['Pool']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyBridge',
        address: [bridgeAdmin],
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
        address: [poolAdmin],
        functions: roles['PoolConfigurator']['onlyPoolAdmin'],
      },
      {
        modifier: 'onlyEmergencyAdmin',
        address: [emergencyAdmin],
        functions: roles['PoolConfigurator']['onlyEmergencyAdmin'],
      },
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        address: [poolAdmin, assetListingAdmin],
        functions: roles['PoolConfigurator']['onlyAssetListingOrPoolAdmins'],
      },
      {
        modifier: 'onlyRiskOrPoolAdmins',
        address: [riskAdmin, poolAdmin],
        functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
      },
      {
        modifier: 'onlyEmergencyOrPoolAdmin',
        address: [emergencyAdmin, poolAdmin],
        functions: roles['PoolConfigurator']['onlyEmergencyOrPoolAdmin'],
      },
    ],
  };

  obj['AaveOracle'] = {
    address: addressBook.ORACLE,
    modifiers: [
      {
        modifier: 'onlyAssetListingOrPoolAdmins',
        address: [assetListingAdmin, poolAdmin],
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
        address: collectorControllerOwner,
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
    address: addressBook.COLLECTOR_CONTROLLER,
    // proxyAdmin: addressBook.ACL_ADMIN,
    modifiers: [
      {
        modifier: 'onlyFundsAdmin',
        address: fundsAdmin,
        functions: roles['Collector']['onlyFundsAdmin'],
      },
    ],
  };

  // const rewardsController = new ethers.Contract(
  //   rewardsControllerAddress,
  //   rewardsControllerAbi,
  //   provider,
  // );
  // const emissionManager = await rewardsController.getEmissionManager();
  // addModifier(
  //   network,
  //   emissionManager,
  //   index,
  //   'RewardsController',
  //   'onlyEmissionManager',
  // );

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
}

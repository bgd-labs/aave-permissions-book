import { ethers, providers } from 'ethers';
import {
  collectorRoleNames,
  ghoGSMRoleNames,
  ghoRoleNames,
  granularGuardianRoleNames,
  networkConfigs,
  Pools,
  protocolRoleNames,
} from '../helpers/configs.js';
import {
  getAllPermissionsJson,
  getPermissionsByNetwork,
  getStaticPermissionsJson,
  saveJson,
} from '../helpers/fileSystem.js';
import { getCurrentRoleAdmins } from '../helpers/adminRoles.js';
import { resolveV2Modifiers } from './v2Permissions.js';
import { resolveV3Modifiers } from './v3Permissions.js';
import { resolveGovV2Modifiers } from './governancePermissions.js';
import { Collector, Contracts, FullPermissions, GovV3, Roles } from '../helpers/types.js';
import { resolveSafetyV2Modifiers } from './safetyPermissions.js';
import { resolveV2MiscModifiers } from './v2MiscPermissions.js';
import { getCCCSendersAndAdapters } from '../helpers/crossChainControllerLogs.js';
import { resolveGovV3Modifiers } from './govV3Permissions.js';
import { resolveGHOModifiers } from './ghoPermissions.js';
import { overwriteBaseTenderlyPool } from '../helpers/jsonParsers.js';
import { resolveCollectorModifiers } from './collectorPermissions.js';

const generateNetworkPermissions = async (network: string) => {
  // get current permissions
  let fullJson = getPermissionsByNetwork(network);
  // generate permissions
  let provider = new ethers.providers.JsonRpcProvider(
    networkConfigs[network].rpcUrl,
  );

  const pools = networkConfigs[network].pools;
  const poolsKeys = Object.keys(pools).map((pool) => pool);
  for (let i = 0; i < poolsKeys.length; i++) {
    const poolKey = poolsKeys[i];
    if (
      (!process.env.TENDERLY || process.env.TENDERLY === 'false') &&
      poolKey.toLowerCase().indexOf('tenderly') > -1
    ) {
      continue;
    }
    const pool = pools[poolKey];

    const permissionsJson = getStaticPermissionsJson(pool.permissionsJson);
    let poolPermissions: Contracts = {};
    let admins = {} as Roles;
    let gsmAdmins = {} as Record<string, Roles>;
    let collector = {} as Collector;
    let cAdmins = {} as Roles;
    let govV3 = {} as GovV3;
    govV3.ggRoles = {} as Roles;

    if (
      poolKey !== Pools.GOV_V2 &&
      poolKey !== Pools.GOV_V2_TENDERLY &&
      poolKey !== Pools.SAFETY_MODULE &&
      poolKey !== Pools.SAFETY_MODULE_TENDERLY &&
      poolKey !== Pools.V2_MISC_TENDERLY &&
      poolKey !== Pools.V2_MISC &&
      poolKey !== Pools.TENDERLY &&
      poolKey !== Pools.GHO_TENDERLY &&
      poolKey !== Pools.GHO &&
      !pool.aclBlock
    ) {
      console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
          ------------------------------------
          `);
      if (pool.tenderlyBasePool) {
        await overwriteBaseTenderlyPool(
          poolKey,
          network,
          pool.tenderlyBasePool,
        );
      }
      if (Object.keys(pool.addressBook).length > 0) {
        poolPermissions = await resolveV2Modifiers(
          pool.addressBook,
          poolKey === Pools.V2_TENDERLY ||
            poolKey === Pools.V2_AMM_TENDERLY ||
            poolKey === Pools.V2_ARC_TENDERLY
            ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
            : provider,
          permissionsJson,
          Pools[poolKey as keyof typeof Pools],
          Number(network),
        );
      }
    } else if (poolKey === Pools.GOV_V2 || poolKey === Pools.GOV_V2_TENDERLY) {
      console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
          ------------------------------------
          `);

      poolPermissions = await resolveGovV2Modifiers(
        pool.addressBook,
        poolKey === Pools.GOV_V2_TENDERLY
          ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
          : provider,
        permissionsJson,
      );
    } else if (
      poolKey === Pools.SAFETY_MODULE ||
      poolKey === Pools.SAFETY_MODULE_TENDERLY
    ) {
      console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
          ------------------------------------
          `);
      poolPermissions = await resolveSafetyV2Modifiers(
        pool.addressBook,
        poolKey === Pools.SAFETY_MODULE_TENDERLY
          ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
          : provider,
        permissionsJson,
      );
    } else if (
      poolKey === Pools.V2_MISC ||
      poolKey === Pools.V2_MISC_TENDERLY
    ) {
      console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
          ------------------------------------
          `);
      poolPermissions = await resolveV2MiscModifiers(
        pool.addressBook,
        pool.addresses || {},
        poolKey === Pools.V2_MISC_TENDERLY
          ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
          : provider,
        permissionsJson,
      );
    } else if (poolKey === Pools.GHO || poolKey === Pools.GHO_TENDERLY) {
      let fromBlock;
      let gsmBlock;
      if (pool.tenderlyBasePool) {
        await overwriteBaseTenderlyPool(
          poolKey,
          network,
          pool.tenderlyBasePool,
        );
        // get current permissions
        fullJson = getPermissionsByNetwork(network);
        fromBlock = pool.tenderlyBlock;
        gsmBlock = pool.tenderlyBlock;
      } else {
        fromBlock =
          fullJson[poolKey]?.roles?.latestBlockNumber || pool.ghoBlock;
      }

      if (fromBlock) {
        console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
            fromBlock: ${fromBlock}
          ------------------------------------
          `);
        if (Object.keys(pool.addressBook).length > 0) {
          admins = await getCurrentRoleAdmins(
            provider,
            (fullJson[poolKey] && fullJson[poolKey]?.roles?.role) ||
              ({} as Record<string, string[]>),
            fromBlock,
            Number(network),
            Pools[poolKey as keyof typeof Pools],
            ghoRoleNames,
            pool.addressBook.GHO_TOKEN,
          );
          // get gsms admin roles
          if (pool.gsmBlocks) {
            for (let i = 0; i < Object.keys(pool.gsmBlocks).length; i++) {
              const key = Object.keys(pool.gsmBlocks)[i];
              let gsmBlock = pool.gsmBlocks[key];
              if (
                fullJson[poolKey] &&
                // @ts-ignore
                Object.keys(fullJson[poolKey].gsmRoles).length > 0 &&
                !pool.tenderlyBasePool
              ) {
                gsmBlock =
                  fullJson[poolKey].gsmRoles?.[key].latestBlockNumber || 0;
              }
              gsmAdmins[key] = await getCurrentRoleAdmins(
                provider,
                (fullJson[poolKey] &&
                  // @ts-ignore
                  Object.keys(fullJson[poolKey].gsmRoles).length > 0 &&
                  fullJson[poolKey]?.gsmRoles?.[key].role) ||
                  ({} as Record<string, string[]>),
                gsmBlock,
                Number(network),
                Pools[poolKey as keyof typeof Pools],
                ghoGSMRoleNames,
                pool.addressBook[key],
              );
            }
          }

          poolPermissions = await resolveGHOModifiers(
            pool.addressBook,
            poolKey === Pools.GHO_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            permissionsJson,
            Pools[poolKey as keyof typeof Pools],
            Number(network),
            admins.role,
            gsmAdmins,
          );
        }
      }
    } else if (pool.aclBlock) {
      let fromBlock;
      if (pool.tenderlyBasePool) {
        await overwriteBaseTenderlyPool(
          poolKey,
          network,
          pool.tenderlyBasePool,
        );
        // get current permissions
        fullJson = getPermissionsByNetwork(network);
        fromBlock = pool.tenderlyBlock;
      } else {
        fromBlock =
          fullJson[poolKey]?.roles?.latestBlockNumber || pool.aclBlock;
      }

      if (fromBlock) {
        console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
            fromBlock: ${fromBlock}
          ------------------------------------
          `);
          
        if (Object.keys(pool.addressBook).length > 0) {
          admins = await getCurrentRoleAdmins(
            poolKey === Pools.TENDERLY ||
              poolKey === Pools.LIDO_TENDERLY ||
              poolKey === Pools.ETHERFI_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            (fullJson[poolKey] && fullJson[poolKey]?.roles?.role) ||
              ({} as Record<string, string[]>),
            fromBlock,
            Number(network),
            Pools[poolKey as keyof typeof Pools],
            protocolRoleNames,
            pool.addressBook.ACL_MANAGER,
          );
          
          poolPermissions = await resolveV3Modifiers(
            pool.addressBook,
            poolKey === Pools.TENDERLY ||
              poolKey === Pools.LIDO_TENDERLY ||
              poolKey === Pools.ETHERFI_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            permissionsJson,
            Pools[poolKey as keyof typeof Pools],
            Number(network),
            admins.role,
          );
        }
      }
    } else {
      console.log(`pool not supported: ${poolKey}`);
    }

    if (pool.collectorBlock && pool.addressBook.COLLECTOR) {
      let fromBlock;
      if (pool.tenderlyBasePool) {
        await overwriteBaseTenderlyPool(
          poolKey,
          network,
          pool.tenderlyBasePool,
        );
        // get current permissions
        fullJson = getPermissionsByNetwork(network);
        fromBlock = pool.tenderlyBlock;
      } else {
        fromBlock =
          fullJson[poolKey]?.collector?.latestBlockNumber || pool.collectorBlock;
      }
      console.log(`
        ------------------------------------
          network: ${network}
          pool: ${poolKey}
          fromBlock: ${fromBlock}
          Collector Table
        ------------------------------------
        `);
      if (fromBlock) {
        cAdmins = await getCurrentRoleAdmins(
          poolKey === Pools.TENDERLY ||
            poolKey === Pools.LIDO_TENDERLY ||
            poolKey === Pools.ETHERFI_TENDERLY
            ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
            : provider,
          (fullJson[poolKey] && fullJson[poolKey]?.collector?.cRoles?.role) ||
            ({} as Record<string, string[]>),
          fromBlock,
          Number(network),
          Pools[poolKey as keyof typeof Pools],
          collectorRoleNames,
          pool.addressBook.COLLECTOR,
          true
        );
        
        const collectorPermissions = await resolveCollectorModifiers(
          pool.addressBook,
          poolKey === Pools.TENDERLY ||
            poolKey === Pools.LIDO_TENDERLY ||
            poolKey === Pools.ETHERFI_TENDERLY
            ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
            : provider,
          permissionsJson,
          Number(network),
          cAdmins.role,
        );
        collector.contracts = collectorPermissions;
        collector.cRoles = cAdmins;
      }
    }

    if (
      pool.crossChainControllerBlock &&
      pool.crossChainPermissionsJson &&
      pool.governanceAddressBook
    ) {

      let cccFromBlock;
      if (pool.tenderlyBasePool) {
        cccFromBlock = pool.tenderlyBlock;
      } else {
        cccFromBlock =
          fullJson[poolKey]?.govV3?.latestCCCBlockNumber ||
          pool.crossChainControllerBlock;
      }
      console.log(`
        ------------------------------------
          network: ${network}
          pool: ${poolKey}
          fromBlock: ${cccFromBlock}
          Governance Table
        ------------------------------------
        `);
      if (cccFromBlock) {
        const { senders, latestCCCBlockNumber } =
          await getCCCSendersAndAdapters(
            poolKey === Pools.TENDERLY ||
              poolKey === Pools.LIDO_TENDERLY ||
              poolKey === Pools.ETHERFI_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            (fullJson[poolKey] && fullJson[poolKey]?.govV3?.senders) || [],
            cccFromBlock,
            pool.governanceAddressBook,
            Number(network),
            Pools[poolKey as keyof typeof Pools],
          );

        if (pool.granularGuardianBlock) {
          let ggFromBlock;
          if (pool.tenderlyBasePool) {
            ggFromBlock = pool.tenderlyBlock;
          } else {
            ggFromBlock =
              fullJson[poolKey]?.govV3?.ggRoles?.latestBlockNumber ||
              pool.granularGuardianBlock;
          }

          if (ggFromBlock) {
            const ggRoles = await getCurrentRoleAdmins(
              poolKey === Pools.TENDERLY ||
                poolKey === Pools.LIDO_TENDERLY ||
                poolKey === Pools.ETHERFI_TENDERLY
                ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                : provider,
              (fullJson[poolKey] &&
                fullJson[poolKey]?.govV3?.ggRoles?.role) ||
                ({} as Record<string, string[]>),
              ggFromBlock,
              Number(network),
              Pools[poolKey as keyof typeof Pools],
              granularGuardianRoleNames,
              pool.governanceAddressBook.GRANULAR_GUARDIAN,
            );

            govV3.ggRoles.role = ggRoles.role;
            govV3.ggRoles.latestBlockNumber = ggRoles.latestBlockNumber;
          }
        }

        const permissionsGovV3Json = getStaticPermissionsJson(
          pool.crossChainPermissionsJson,
        );
        console.log('------------------------------------');
        govV3.contracts = await resolveGovV3Modifiers(
          pool.governanceAddressBook,
          poolKey === Pools.TENDERLY ||
            poolKey === Pools.LIDO_TENDERLY ||
            poolKey === Pools.ETHERFI_TENDERLY
            ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
            : provider,
          permissionsGovV3Json,
          Number(network),
          senders,
          poolKey === Pools.TENDERLY ||
            poolKey === Pools.LIDO_TENDERLY ||
            poolKey === Pools.ETHERFI_TENDERLY,
          govV3.ggRoles.role || {},
          pool.addresses,
        );

        console.log('------------------------------------');
        govV3.senders = senders;
        govV3.latestCCCBlockNumber = latestCCCBlockNumber;
      }
    }

    if (Object.keys(fullJson).length === 0) {
      fullJson = {
        [poolKey]: {
          contracts: poolPermissions,
          roles: admins,
          gsmRoles: gsmAdmins,
          govV3: govV3,
          collector: collector
        },
      };
    } else {
      // if (!fullJson[network][poolKey]) {
      fullJson[poolKey] = {
        contracts: poolPermissions,
        roles: admins,
        gsmRoles: gsmAdmins,
        govV3: govV3,
        collector: collector
      };
    }
    console.log(`----${network} : ${poolKey} finished`);
  }

  // save permissions in json object
  console.log(
    `-----------${network} : ------------------SAVE JSON-----------------------------------`,
  );
  saveJson(
    `out/permissions/${network}-permissions.json`,
    JSON.stringify(fullJson, null, 2),
  );
};

async function main() {
  const networks = Object.keys(networkConfigs).map((network) => network);
  const permissions = networks.map((network) =>
    generateNetworkPermissions(network),
  );

  const results = await Promise.allSettled(permissions);
}

main();

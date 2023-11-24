import { ethers, providers } from 'ethers';
import {
  ghoRoleNames,
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
import { Contracts, FullPermissions, GovV3, Roles } from '../helpers/types.js';
import { resolveSafetyV2Modifiers } from './safetyPermissions.js';
import { resolveV2MiscModifiers } from './v2MiscPermissions.js';
import { getCCCSendersAndAdapters } from '../helpers/crossChainControllerLogs.js';
import { resolveGovV3Modifiers } from './govV3Permissions.js';
import { resolveGHOModifiers } from './ghoPermissions.js';
import { overwriteBaseTenderlyPool } from '../helpers/jsonParsers.js';

const generateNetworkPermissions = async (network: string) => {
  // get current permissions
  let fullJson = getPermissionsByNetwork(network);
  // generate permissions
  let provider = new ethers.providers.JsonRpcProvider(
    networkConfigs[network].rpcUrl,
  );

  const pools = networkConfigs[network].pools;
  const poolsKeys = Object.keys(pools).map((pool) => pool);
  for (const poolKey of poolsKeys) {
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
    let govV3 = {} as GovV3;
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
          poolPermissions = await resolveGHOModifiers(
            pool.addressBook,
            poolKey === Pools.GHO_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            permissionsJson,
            Pools[poolKey as keyof typeof Pools],
            Number(network),
            admins.role,
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
            provider,
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
            poolKey === Pools.TENDERLY || poolKey === Pools.V2_TENDERLY
              ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
              : provider,
            permissionsJson,
            Pools[poolKey as keyof typeof Pools],
            Number(network),
            admins.role,
          );
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
          if (cccFromBlock) {
            const { senders, latestCCCBlockNumber } =
              await getCCCSendersAndAdapters(
                provider,
                (fullJson[poolKey] && fullJson[poolKey]?.govV3?.senders) || [],
                cccFromBlock,
                pool.governanceAddressBook,
                Number(network),
                Pools[poolKey as keyof typeof Pools],
              );

            const permissionsGovV3Json = getStaticPermissionsJson(
              pool.crossChainPermissionsJson,
            );
            govV3.contracts = await resolveGovV3Modifiers(
              pool.governanceAddressBook,
              poolKey === Pools.TENDERLY
                ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                : provider,
              permissionsGovV3Json,
              Number(network),
              senders,
              poolKey === Pools.TENDERLY,
              pool.addresses,
            );
            govV3.senders = senders;
            govV3.latestCCCBlockNumber = latestCCCBlockNumber;
          }
        }
      }
    } else {
      console.log(`pool not supported: ${poolKey}`);
    }

    if (Object.keys(fullJson).length === 0) {
      fullJson = {
        [poolKey]: {
          contracts: poolPermissions,
          roles: admins,
          govV3: govV3,
        },
      };
    } else {
      // if (!fullJson[network][poolKey]) {
      fullJson[poolKey] = {
        contracts: poolPermissions,
        roles: admins,
        govV3: govV3,
      };
    }
  }

  // save permissions in json object

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

import { ethers, providers } from 'ethers';
import { networkConfigs, Pools } from '../helpers/configs.js';
import {
  getAllPermissionsJson,
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

async function main() {
  let fullJson: FullPermissions = getAllPermissionsJson();

  const networks = Object.keys(networkConfigs).map((network) => network);
  for (const network of networks) {
    let provider = new ethers.providers.JsonRpcProvider(
      networkConfigs[network].rpcUrl,
    );

    const pools = networkConfigs[network].pools;
    const poolsKeys = Object.keys(pools).map((pool) => pool);

    for (const poolKey of poolsKeys) {
      const pool = pools[poolKey];
      const permissionsJson = getStaticPermissionsJson(pool.permissionsJson);
      let poolPermissions: Contracts = {};
      let admins = {} as Roles;
      let govV3 = {} as GovV3;
      if (
        poolKey !== Pools.GOV_V2 &&
        poolKey !== Pools.SAFETY_MODULE &&
        poolKey !== Pools.V2_MISC &&
        poolKey !== Pools.TENDERLY &&
        !pool.aclBlock
      ) {
        if (poolKey === Pools.V2_TENDERLY) {
          provider = new ethers.providers.JsonRpcProvider(
            networkConfigs[network].pools[poolKey].tenderlyRpcUrl,
          );
        }
        if (Object.keys(pool.addressBook).length > 0) {
          poolPermissions = await resolveV2Modifiers(
            pool.addressBook,
            provider,
            permissionsJson,
            Pools[poolKey as keyof typeof Pools],
            Number(network),
          );
        }
      } else if (poolKey === Pools.GOV_V2) {
        poolPermissions = await resolveGovV2Modifiers(
          pool.addressBook,
          provider,
          permissionsJson,
        );
      } else if (poolKey === Pools.SAFETY_MODULE) {
        poolPermissions = await resolveSafetyV2Modifiers(
          pool.addressBook,
          provider,
          permissionsJson,
        );
      } else if (poolKey === Pools.V2_MISC) {
        poolPermissions = await resolveV2MiscModifiers(
          pool.addressBook,
          pool.addresses || {},
          provider,
          permissionsJson,
        );
      } else if (pool.aclBlock) {
        let fromBlock;
        if (poolKey === Pools.TENDERLY) {
          fromBlock =
            (fullJson[network] &&
              fullJson[network][poolKey]?.roles?.latestBlockNumber) ||
            pool.tenderlyBlock;
        } else {
          fromBlock =
            (fullJson[network] &&
              fullJson[network][poolKey]?.roles?.latestBlockNumber) ||
            pool.aclBlock;
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
              poolKey === Pools.TENDERLY
                ? new providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                : provider,
              (fullJson[network] &&
                fullJson[network][poolKey] &&
                fullJson[network][poolKey]?.roles?.role) ||
                ({} as Record<string, string[]>),
              fromBlock,
              pool.addressBook,
              network === 'tenderly-mainnet'
                ? 'tenderly-mainnet'
                : Number(network),
              Pools[poolKey as keyof typeof Pools],
            );

            poolPermissions = await resolveV3Modifiers(
              pool.addressBook,
              poolKey === Pools.TENDERLY
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
            const cccFromBlock =
              (fullJson[network] &&
                fullJson[network][poolKey]?.govV3?.latestCCCBlockNumber) ||
              pool.crossChainControllerBlock;

            const { senders, latestCCCBlockNumber } =
              await getCCCSendersAndAdapters(
                provider,
                (fullJson[network] &&
                  fullJson[network][poolKey] &&
                  fullJson[network][poolKey]?.govV3?.senders) ||
                  [],
                cccFromBlock,
                pool.governanceAddressBook,
                network === 'tenderly-mainnet'
                  ? 'tenderly-mainnet'
                  : Number(network),
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
            );
            govV3.senders = senders;
            govV3.latestCCCBlockNumber = latestCCCBlockNumber;
          }
        }
      } else {
        console.log(`pool not supported: ${poolKey}`);
      }

      if (Object.keys(fullJson).length === 0) {
        fullJson = {
          [network]: {
            [poolKey]: {
              contracts: poolPermissions,
              roles: admins,
              govV3: govV3,
            },
          },
        };
      } else if (!fullJson[network]) {
        fullJson[network] = {
          [poolKey]: {
            contracts: poolPermissions,
            roles: admins,
            govV3: govV3,
          },
        };
      } else {
        // if (!fullJson[network][poolKey]) {
        fullJson[network][poolKey] = {
          contracts: poolPermissions,
          roles: admins,
          govV3: govV3,
        };
      }
    }
  }

  saveJson('./out/aavePermissionList.json', JSON.stringify(fullJson, null, 2));
}

main();

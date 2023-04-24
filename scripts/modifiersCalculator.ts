import { ethers, providers } from 'ethers';
import { networkConfigs, Pools } from '../helpers/configs';
import {
  getAllPermissionsJson,
  getStaticPermissionsJson,
  saveJson,
} from '../helpers/fileSystem';
import { getCurrentRoleAdmins } from '../helpers/adminRoles';
import { resolveV2Modifiers } from './v2Permissions';
import { resolveV3Modifiers } from './v3Permissions';
import { resolveGovV2Modifiers } from './governancePermissions';
import { Contracts, FullPermissions, Roles } from '../helpers/types';
import { resolveSafetyV2Modifiers } from './safetyPermissions';
import { resolveV2MiscModifiers } from './v2MiscPermissions';

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
      console.log('pool key: ', poolKey);
      const pool = pools[poolKey];
      const permissionsJson = getStaticPermissionsJson(pool.permissionsJson);
      let poolPermissions: Contracts = {};
      let admins = {} as Roles;
      if (
        poolKey !== Pools.GOV_V2 &&
        poolKey !== Pools.SAFETY_MODULE &&
        poolKey !== Pools.V2_MISC &&
        !pool.aclBlock
      ) {
        if (poolKey === Pools.TENDERLY) {
          provider = new ethers.providers.JsonRpcProvider(
            networkConfigs[network].pools[poolKey].tenderlyRpcUrl,
          );
        }
        poolPermissions = await resolveV2Modifiers(
          pool.addressBook,
          provider,
          permissionsJson,
          Pools[poolKey as keyof typeof Pools],
          Number(network),
        );
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
        const fromBlock =
          (fullJson[network] &&
            fullJson[network][poolKey]?.roles?.latestBlockNumber) ||
          pool.aclBlock;
        if (fromBlock) {
          console.log(`
          ------------------------------------
            network: ${network}
            pool: ${poolKey}
            fromBlock: ${fromBlock}
          ------------------------------------
          `);
          admins = await getCurrentRoleAdmins(
            provider,
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
      } else {
        console.log(`pool not supported: ${poolKey}`);
      }

      if (Object.keys(fullJson).length === 0) {
        fullJson = {
          [network]: {
            [poolKey]: {
              contracts: poolPermissions,
              roles: admins,
            },
          },
        };
      } else if (!fullJson[network]) {
        fullJson[network] = {
          [poolKey]: {
            contracts: poolPermissions,
            roles: admins,
          },
        };
      } else {
        // if (!fullJson[network][poolKey]) {
        fullJson[network][poolKey] = {
          contracts: poolPermissions,
          roles: admins,
        };
      }
    }
  }
  console.log('---------------');
  saveJson('./out/aavePermissionList.json', JSON.stringify(fullJson, null, 2));
}

main();

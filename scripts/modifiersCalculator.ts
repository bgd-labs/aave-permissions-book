import { ethers } from 'ethers';
import {
  Contracts,
  FullPermissions,
  networkConfigs,
  Pools,
  Roles,
} from '../helpers/configs';
import {
  getAllPermissionsJson,
  getStaticPermissionsJson,
  saveJson,
} from '../helpers/fileSystem';
import { getCurrentRoleAdmins } from '../helpers/adminRoles';
import { resolveV2Modifiers } from './v2Permissions';

// TODO: extract this logic to different file

async function main() {
  let fullJson: FullPermissions = getAllPermissionsJson();

  const networks = Object.keys(networkConfigs).map((network) => network);
  for (const network of networks) {
    const provider = new ethers.providers.JsonRpcProvider(
      networkConfigs[network].rpcUrl,
    );

    const pools = networkConfigs[network].pools;
    const poolsKeys = Object.keys(pools).map((pool) => pool);

    for (const poolKey of poolsKeys) {
      const pool = pools[poolKey];
      const permissionsJson = getStaticPermissionsJson(pool.permissionsJson);
      let poolPermissions: Contracts = {};
      let admins = {} as Roles;
      if (
        poolKey === Pools.V2 ||
        poolKey === Pools.AMM ||
        poolKey === Pools.ARC
      ) {
        poolPermissions = await resolveV2Modifiers(
          pool.addressBook,
          provider,
          permissionsJson,
          poolKey,
        );
      } else if (poolKey === Pools.V3) {
        console.log('V3 not implemented yet');

        const fromBlock =
          (fullJson[network] &&
            fullJson[network][poolKey]?.roles?.latestBlockNumber) ||
          networkConfigs[network].pools[poolKey].aclBlock;
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
            fromBlock,
            pool.addressBook,
            Number(network),
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
      } else if (!fullJson[network][poolKey]) {
        fullJson[network][poolKey] = {
          contracts: poolPermissions,
          roles: admins,
        };
      }
      // TODO: get roles admins
    }
  }

  saveJson('./out/aavePermissionList.json', JSON.stringify(fullJson, null, 2));
}

main();

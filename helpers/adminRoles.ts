import { ethers, utils } from 'ethers';

import {
  AaveV3Optimism,
  AaveV3Arbitrum,
  AaveV3Polygon,
  AaveV3Fantom,
  AaveV3Avalanche,
  AaveV3Harmony,
} from '@bgd-labs/aave-address-book';
import { ChainId } from '@aave/contract-helpers';
import { networkConfigs, Pools, RoleInfo } from './configs';
import { getAllPermissionsJson, saveJson } from './fileSystem';

export const roleGrantedEventABI = [
  'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
];
export const roleRevokedEventABI = [
  'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
];

export const defaultRolesAdmin =
  '0x0000000000000000000000000000000000000000000000000000000000000000';
export const roleNames = [
  'ASSET_LISTING_ADMIN',
  'BRIDGE',
  'DEFAULT_ADMIN',
  'EMERGENCY_ADMIN',
  'FLASH_BORROWER',
  'POOL_ADMIN',
  'RISK_ADMIN',
];

function initializeRoleCodeMap() {
  let roleCodeMap = new Map<string, string>([
    [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      'DEFAULT_ADMIN',
    ],
  ]);

  for (const roleName of roleNames) {
    const code = ethers.utils.solidityKeccak256(['string'], [roleName]);
    roleCodeMap.set(code, roleName);
  }

  return roleCodeMap;
}
export const aclByChainId: Record<number, string> = {
  [ChainId.harmony]: AaveV3Harmony.ACL_MANAGER,
  [ChainId.avalanche]: AaveV3Avalanche.ACL_MANAGER,
  [ChainId.fantom]: AaveV3Fantom.ACL_MANAGER,
  [ChainId.polygon]: AaveV3Polygon.ACL_MANAGER,
  [ChainId.arbitrum_one]: AaveV3Arbitrum.ACL_MANAGER,
  [ChainId.optimism]: AaveV3Optimism.ACL_MANAGER,
};

export const getRoleBytes32 = (roleName: string): string => {
  return utils.solidityKeccak256(['string'], [roleName]);
};

export const parseLog = (
  abi: string[],
  eventLog: ethers.providers.Log,
): { account: string; role: string } => {
  const iface = new ethers.utils.Interface(roleRevokedEventABI);
  const parsedEvent = iface.parseLog(eventLog);
  const { role, account } = parsedEvent.args;

  return { account, role };
};

export const getCurrentACLRoleAdmins = async (
  chainId: ChainId,
  pool: Pools,
): Promise<{}> => {
  // TODO: provably makes sense to also externalize this
  const provider = new ethers.providers.StaticJsonRpcProvider(
    networkConfigs[chainId].rpcUrl,
  );
  const aclManager = aclByChainId[chainId];

  // get last block
  let fullJson = getAllPermissionsJson();

  const roleHexToNameMap = initializeRoleCodeMap();

  const fromBlock =
    (fullJson[chainId] && fullJson[chainId][pool]?.roles?.latestBlockNumber) ||
    networkConfigs[chainId].V3?.aclBlock;

  // if block doesn't exist means it does not have acl
  if (!fromBlock) {
    return {};
  }

  const latestBlockNumber = await provider.getBlockNumber();
  const filter = {
    address: aclManager,
    fromBlock,
    toBlock: latestBlockNumber,
  };

  const eventLogs = await provider.getLogs(filter);

  const roles: Record<string, string[]> = {};

  // get roleGranted events
  const roleGrantedTopic0 = utils.id('RoleGranted(bytes32,address,address)');
  const roleRevokedTopic0 = utils.id('RoleRevoked(bytes32,address,address)');

  // save or remove admins
  eventLogs.forEach((eventLog) => {
    if (eventLog.topics[0] === roleGrantedTopic0) {
      const { role, account } = parseLog(roleGrantedEventABI, eventLog);
      const roleName = roleHexToNameMap.get(role);

      if (roleName && !roles[roleName]) {
        roles[roleName] = [];
      } else if (roleName && roles[roleName]) {
        roles[roleName].push(account);
      }
    } else if (eventLog.topics[0] === roleRevokedTopic0) {
      const { role, account } = parseLog(roleRevokedEventABI, eventLog);
      const roleName = roleHexToNameMap.get(role);
      if (roleName) {
        roles[roleName].splice(roles[roleName].indexOf(account), 1);
      }
    } else {
      console.error(new Error('some error parsing logs'));
      return {};
    }
  });

  // if (Object.keys(fullJson).length === 0) {
  //   fullJson = {
  //     [chainId]: {
  //       [pool]: {
  //         roles: {
  //           latestBlockNumber,
  //           role: roles,
  //         },
  //         contracts: {},
  //       },
  //     },
  //   };
  // } else {
  //   fullJson[chainId][pool].roles = {
  //     role: roles,
  //     latestBlockNumber,
  //   };
  // }
  // saveJson('./out/aavePermissionList.json', JSON.stringify(fullJson, null, 2));

  return { role: roles, latestBlockNumber };
};

getCurrentACLRoleAdmins(ChainId.arbitrum_one, Pools.V3);

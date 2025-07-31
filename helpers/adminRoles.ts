import { ethers, providers, utils } from 'ethers';
import { ChainId } from '@bgd-labs/toolbox';
import { getLogs } from './eventLogs.js';
import { Roles } from './types.js';
import { networkConfigs, Pools } from './configs.js';
import { getLimit } from './limits.js';

export const roleGrantedEventABI = [
  'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
];
export const roleRevokedEventABI = [
  'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
];

export const defaultRolesAdmin =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

function initializeRoleCodeMap(roleNames: string[], collector?: boolean): Map<string, string> {
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
  if (collector) {
    roleCodeMap.set(
      '0x46554e44535f41444d494e000000000000000000000000000000000000000000',
      'FUNDS_ADMIN_ROLE',
    );
  }

  return roleCodeMap;
}

export const parseLog = (
  abi: string[],
  eventLog: ethers.providers.Log,
): { account: string; role: string } => {
  const iface = new ethers.utils.Interface(abi);
  const parsedEvent = iface.parseLog(eventLog);
  const { role, account } = parsedEvent.args;

  return { account, role };
};

export const getCurrentRoleAdmins = async (
  provider: providers.Provider,
  oldRoles: Record<string, string[]>,
  fromBlock: number,
  chainId: typeof ChainId | string,
  pool: Pools,
  roleNames: string[],
  contract: string,
  collector?: boolean,
): Promise<Roles> => {
  const roleHexToNameMap = initializeRoleCodeMap(roleNames, collector);
  let limit = getLimit(chainId);
  let timeout = undefined;

  let eventLogs: providers.Log[] = [];
  let finalBlock: number = 0;
  if (
    pool === Pools.TENDERLY ||
    pool === Pools.GHO_TENDERLY ||
    pool == Pools.ETHERFI_TENDERLY ||
    pool == Pools.LIDO_TENDERLY
  ) {
    const networkLogs = await getLogs({
      provider,
      address: contract,
      fromBlock,
      logs: [],
      limit,
      timeout,
      maxBlock: networkConfigs[Number(chainId)].pools[pool].tenderlyBlock,
      chainId,
    });
    const tenderlyProvider = new providers.StaticJsonRpcProvider(
      networkConfigs[Number(chainId)].pools[pool].tenderlyRpcUrl,
    );
    limit = 999;
    timeout = 10000;

    const tenderlyBlock =
      networkConfigs[Number(chainId)].pools[pool].tenderlyBlock ||
      networkLogs.finalBlock;

    const tenderlyLogs = await getLogs({
      provider: tenderlyProvider,
      address: contract,
      fromBlock: tenderlyBlock,
      logs: [],
      limit,
      timeout,
      tenderly: true,
      chainId,
    });

    const logs = [...networkLogs.eventLogs, ...tenderlyLogs.eventLogs];
    eventLogs = logs;
    finalBlock = networkLogs.finalBlock;
  } else {
    const logs = await getLogs({
      provider,
      address: contract,
      fromBlock,
      logs: [],
      limit,
      timeout,
      chainId,
    });
    eventLogs = logs.eventLogs;
    finalBlock = logs.finalBlock;
  }

  // get roleGranted events
  const roleGrantedTopic0 = utils.id('RoleGranted(bytes32,address,address)');
  const roleRevokedTopic0 = utils.id('RoleRevoked(bytes32,address,address)');

  const roles: Record<string, string[]> = { ...oldRoles };
  // save or remove admins
  for (let eventLog of eventLogs) {
    // eventLogs.forEach((eventLog) => {
    if (eventLog.topics[0] === roleGrantedTopic0) {
      const { role, account } = parseLog(roleGrantedEventABI, eventLog);
      const roleName = roleHexToNameMap.get(role);
      // console.log(`role granted
      //   topic0: ${eventLog.topics[0]}
      //   grant : ${roleGrantedTopic0}
      //   revoke: ${roleRevokedTopic0}
      //   address: ${account}
      //   rawRole: ${role}
      //   role: ${roleName}
      // `);

      if (roleName && !roles[roleName]) {
        roles[roleName] = [];
      }

      if (roleName && roles[roleName]) {
        const accountFound = roles[roleName].find(
          (roleAddress) => roleAddress === account,
        );
        if (!accountFound) {
          roles[roleName].push(account);
        }
      }
    } else if (eventLog.topics[0] === roleRevokedTopic0) {
      const { role, account } = parseLog(roleRevokedEventABI, eventLog);
      const roleName = roleHexToNameMap.get(role);
      // console.log(`role revoked
      //   topic0: ${eventLog.topics[0]}
      //   grant : ${roleGrantedTopic0}
      //   revoke: ${roleRevokedTopic0}
      //   address: ${account}
      //   rawRole: ${role}
      //   role: ${roleName}
      // `);
      if (roleName) {
        roles[roleName] = roles[roleName].filter((role) => role !== account);
      }
    } else {
      // console.log(`
      //   topic0: ${eventLog}
      // `);
    }
  }

  roleNames.forEach((roleName) => {
    if (!roles[roleName]) roles[roleName] = [];
  });
  // console.log('roes: ', roles);
  // console.log('-------------------------------');
  return { role: roles, latestBlockNumber: finalBlock };
};

import { ethers, providers, utils } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { Roles } from './configs';
import { getLogs } from './eventLogs';
import { getSafeOwners } from './guardian';

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

function initializeRoleCodeMap(): Map<string, string> {
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
  addressBook: any,
  chainId: ChainId | string,
): Promise<Roles> => {
  // console.log(`
  // ------------------------------
  //       ChainId: ${chainId}
  // `);
  const aclManager = addressBook.ACL_MANAGER;
  const roleHexToNameMap = initializeRoleCodeMap();

  let limit = undefined;
  let timeout = undefined;
  if (chainId === ChainId.avalanche) {
    limit = 99999;
  } else if (chainId === ChainId.harmony) {
    limit = 1000;
  } else if (chainId === ChainId.fantom) {
    limit = 99999;
  } else if (chainId === 'tenderly-mainnet') {
    limit = 999;
    timeout = 10000;
  }

  const { eventLogs, finalBlock } = await getLogs(
    provider,
    aclManager,
    fromBlock,
    [],
    limit,
    timeout,
  );

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
      //   console.log(`
      //   topic0: ${eventLog.topics[0]}
      //   grant : ${roleGrantedTopic0}
      //   revoke: ${roleRevokedTopic0}
      //   address: ${account}
      //   role: ${roleName}
      // `);

      if (roleName && !roles[roleName]) {
        roles[roleName] = [];
      } else if (roleName && roles[roleName]) {
        roles[roleName].push(account);
      }
    } else if (eventLog.topics[0] === roleRevokedTopic0) {
      const { role, account } = parseLog(roleRevokedEventABI, eventLog);
      const roleName = roleHexToNameMap.get(role);
      //   console.log(`
      //   topic0: ${eventLog.topics[0]}
      //   grant : ${roleGrantedTopic0}
      //   revoke: ${roleRevokedTopic0}
      //   address: ${account}
      //   role: ${roleName}
      // `);
      if (roleName) {
        roles[roleName] = roles[roleName].filter((role) => role !== account);
      }
    } else {
      console.error(new Error('some error parsing logs'));
      return {} as Roles;
    }
  }

  roleNames.forEach((roleName) => {
    if (!roles[roleName]) roles[roleName] = [];
  });
  // console.log('roes: ', roles);
  // console.log('-------------------------------');
  return { role: roles, latestBlockNumber: finalBlock };
};

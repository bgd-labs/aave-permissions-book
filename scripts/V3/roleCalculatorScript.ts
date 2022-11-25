import { ethers } from "ethers";
import * as fs from "fs";
import {
  ACL_MANAGER_ADDRESS,
  roleGrantedEventABI,
  roleRevokedEventABI,
  roleNames,
  networkSettings,
} from "../../helpers/constants";

type NetworkData = {
  networkName: string;
  addresses: Array<string>;
};

type RoleData = {
  role: string;
  networks: Array<NetworkData>;
};

async function registerRolesInDb(filename: string, value: Array<RoleData>) {
  fs.writeFile(filename, JSON.stringify(value, null, 2), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

function initializeRoleCodeMap() {
  let roleCodeMap = new Map<string, string>([
    [
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "DEFAULT_ADMIN",
    ],
  ]);

  for (const roleName of roleNames) {
    const code = ethers.utils.solidityKeccak256(["string"], [roleName]);
    roleCodeMap.set(code, roleName);
  }

  return roleCodeMap;
}

function initializeRolesArray() {
  let roles: Array<RoleData> = new Array<RoleData>();
  for (const roleName of roleNames) {
    roles.push({ role: roleName, networks: new Array<NetworkData>() });
  }

  return roles;
}

function initializeRoleMap() {
  return new Map<string, Array<string>>([
    ["ASSET_LISTING_ADMIN", []],
    ["BRIDGE", []],
    ["DEFAULT_ADMIN", []],
    ["EMERGENCY_ADMIN", []],
    ["FLASH_BORROWER", []],
    ["POOL_ADMIN", []],
    ["RISK_ADMIN", []],
  ]);
}

function getDataFromEvent(
  eventAbi: string[],
  log: ethers.providers.Log,
  roleCodeMap: Map<string, string>
) {
  const iface = new ethers.utils.Interface(eventAbi);
  const event = iface.parseLog(log);
  const eventCode = event.args[0];

  const eventName = event.name;
  const roleName: string = roleCodeMap.get(eventCode);
  const account = event.args[1];

  return { eventName, roleName, account };
}

function resolveLog(
  log: ethers.providers.Log,
  roleCodeMap: Map<string, string>
) {
  try {
    return getDataFromEvent(roleGrantedEventABI, log, roleCodeMap);
  } catch {
    return getDataFromEvent(roleRevokedEventABI, log, roleCodeMap);
  }
}

async function main() {
  let roleCodeMap = initializeRoleCodeMap();
  let roles: Array<RoleData> = initializeRolesArray();

  for (const network of networkSettings) {
    let roleMap = initializeRoleMap();

    const provider = new ethers.providers.AlchemyProvider(
      network.name,
      network.apiKey
    );

    /*
    var filter = {
      address: ACL_MANAGER_ADDRESS,
      fromBlock: 0,
    };

    var eventLogs = await provider.getLogs(filter);

    eventLogs.forEach((log) => {
      let { eventName, roleName, account } = resolveLog(log, roleCodeMap);

      const roleOwners = roleMap.get(roleName);

      if (eventName == "RoleGranted") {
        roleOwners.push(account);
      } else if (eventName == "RoleRevoked") {
        const index = roleOwners.indexOf(account);
        roleOwners.splice(index, 1);
      }

      roleMap.set(roleName, roleOwners);
    });

    for (const roleName of roleNames) {
      const index = roleNames.indexOf(roleName);
      roles[index].networks.push({
        networkName: network.name,
        addresses: roleMap.get(roleName),
      });
    }*/
  }
  registerRolesInDb("./rolesV3.json", roles);
}

main();

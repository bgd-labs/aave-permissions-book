import { ethers } from "ethers";
import * as fs from "fs";
import {
  ACL_MANAGER_ADDRESS,
  roleCodeMap,
  ONE,
  roleGrantedEventABI,
  roleRevokedEventABI,
  ZERO,
  networks,
  roleNames,
  TWO,
} from "../helpers/constants";

type NetworkData = {
  networkName: string;
  addresses: Array<string>;
};

type RoleData = {
  role: string;
  networks: Array<NetworkData>;
};

async function registerRolesInDb(value: Array<RoleData>) {
  fs.writeFile("./rolesV3.json", JSON.stringify(value, null, TWO), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

function initializeRolesArray() {
  let roles: Array<RoleData> = new Array<RoleData>();
  for (let i = 0; i < roleNames.length; i++) {
    roles.push({ role: roleNames[i], networks: new Array<NetworkData>() });
  }

  return roles;
}

function initializeRoleMap() {
  return new Map<string, Array<string>>([
    ["ASSET_LISTING_ADMIN_ROLE", []],
    ["BRIDGE_ROLE", []],
    ["DEFAULT_ADMIN_ROLE", []],
    ["EMERGENCY_ADMIN_ROLE", []],
    ["FLASH_BORROWER_ROLE", []],
    ["POOL_ADMIN_ROLE", []],
    ["RISK_ADMIN_ROLE", []],
  ]);
}

async function main() {
  let roles: Array<RoleData> = initializeRolesArray();

  for (const network of networks) {
    let roleMap = initializeRoleMap();
    const provider = new ethers.providers.AlchemyProvider(network);

    var filter = {
      address: ACL_MANAGER_ADDRESS,
      fromBlock: ZERO,
    };

    var callPromise = await provider.getLogs(filter);

    callPromise.forEach((call) => {
      let event: ethers.utils.LogDescription;
      try {
        const iface = new ethers.utils.Interface(roleGrantedEventABI);
        event = iface.parseLog(call);

        const roleName: string = roleCodeMap.get(event.args[ZERO])!;

        const account = event.args[ONE];

        const roleOwners = roleMap.get(roleName)!;
        roleOwners.push(account);
        roleMap.set(roleName, roleOwners);
      } catch {
        const iface = new ethers.utils.Interface(roleRevokedEventABI);
        event = iface.parseLog(call);

        let roleName: string = roleCodeMap.get(event.args[ZERO])!;

        const account = event.args[ONE];

        const roleOwners = roleMap.get(roleName)!;

        const index = roleOwners.indexOf(account);
        roleOwners.splice(index, ONE);
        roleMap.set(roleName, roleOwners);
      }
    });

    for (let i = 0; i < roleNames.length; i++) {
      roles[i].networks.push({
        networkName: network,
        addresses: roleMap.get(roleNames[i])!,
      });
    }
  }
  registerRolesInDb(roles);
}

main();
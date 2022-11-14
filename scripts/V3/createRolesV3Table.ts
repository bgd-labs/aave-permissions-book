import { writeFileSync } from "fs";
import { join } from "path";
import * as roles from "../../jsonBases/rolesV3.json";

const ROLES_FILENAME = "../../out/ROLES_V3.md";
const CONTRACT_FILENAME_V3 = "../../out/PERMISSIONS_V3.md";

const networks = [
  "optimism",
  "matic",
  "arbitrum",
  "avalanche",
  "fantom",
  "harmony",
];

function initializeRolesFile() {
  let data = "# ROLES\n";
  writeFileSync(join(__dirname, ROLES_FILENAME), data, {
    flag: "w",
  });
}

function writeNetworkNameBeforeTable(network: string) {
  const data =
    "\n## " + network.charAt(0).toUpperCase() + network.slice(1) + "\n";
  writeFileSync(join(__dirname, ROLES_FILENAME), data, {
    flag: "a+",
  });
}

function writeTableHeader() {
  let data = "| Role | Addreesses |\n";
  data += "|------|------------|\n";

  writeFileSync(join(__dirname, ROLES_FILENAME), data, {
    flag: "a+",
  });
}

function createLink(source: string, destinationFile: string) {
  return (
    "[" +
    source +
    "](" +
    destinationFile +
    "#" +
    source.toLocaleLowerCase() +
    ")"
  );
}

function insertIntoRolesTable(roleName: string, addresses: string[]) {
  let data = "| ";
  data += createLink(roleName, CONTRACT_FILENAME_V3);
  data += " | ";
  data += addresses;
  data += " |\n";

  writeFileSync(join(__dirname, ROLES_FILENAME), data, {
    flag: "a+",
  });
}

async function main() {
  initializeRolesFile();

  for (const network of networks) {
    writeNetworkNameBeforeTable(network);
    writeTableHeader();

    for (const role of roles) {
      const index = networks.indexOf(network);
      insertIntoRolesTable(role.role, role.networks[index].addresses);
    }
  }
}

main();

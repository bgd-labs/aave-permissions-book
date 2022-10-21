import { writeFileSync } from "fs";
import { join } from "path";
import * as roles from "../out/rolesV3.json";
import * as contractsV3 from "../out/functionsPermissionsV3.json";
import * as contractsV2 from "../out/functionsPermissionsV2.json";
import {
  modifierNames,
  modifierNamesV2,
  roleNames,
} from "../helpers/constants";

const ROLES_FILENAME = "../out/ROLES_ADDRESSES.md";
const CONTRACT_FILENAME_V3 = "../out/PERMISSIONS_V3.md";
const CONTRACT_FILENAME_V2 = "../out/PERMISSIONS_V2.md";
const networks = [
  "optimism",
  "matic",
  "arbitrum",
  "avalanche",
  "fantom",
  "harmony",
];

async function main() {
  let data = "# ROLES\n";
  writeFileSync(join(__dirname, ROLES_FILENAME), data, {
    flag: "w",
  });

  let i = 0;
  for (const network of networks) {
    data = "\n";
    writeFileSync(join(__dirname, ROLES_FILENAME), data, {
      flag: "a+",
    });

    data = "## " + network.charAt(0).toUpperCase() + network.slice(1) + "\n";
    writeFileSync(join(__dirname, ROLES_FILENAME), data, {
      flag: "a+",
    });

    data = "| Role | Addresses |\n";
    data += "|------|------------|\n";

    writeFileSync(join(__dirname, ROLES_FILENAME), data, {
      flag: "a+",
    });

    for (const role of roles) {
      data = "| ";
      data += role.role;
      data += " | ";
      data += role.networks[i].addresses;
      data += " |\n";
      writeFileSync(join(__dirname, ROLES_FILENAME), data, {
        flag: "a+",
      });
    }
    i++;
  }

  data = "# Roles\n";
  writeFileSync(join(__dirname, CONTRACT_FILENAME_V3), data, {
    flag: "w",
  });

  for (const role of roleNames) {
    data = "<br/>\n\n";
    data += "## " + role + "\n\n";

    data += "| Contract | Function |\n";
    data += "|----------|----------|\n";
    writeFileSync(join(__dirname, CONTRACT_FILENAME_V3), data, {
      flag: "a+",
    });

    for (const contract of contractsV3) {
      for (const func of contract.functions) {
        if (func.roles.includes(role)) {
          data = "| ";
          data += contract.contract;
          data += " | ";
          data += func.name;
          data += " |\n";
          writeFileSync(join(__dirname, CONTRACT_FILENAME_V3), data, {
            flag: "a+",
          });
        }
      }
    }
  }

  for (const modifier of modifierNames) {
    for (const contract of contractsV3) {
      let firstTime = true;
      for (const func of contract.functions) {
        if (func.roles.includes(modifier)) {
          if (firstTime) {
            data = "<br/>\n\n";
            data += "## " + contract.contract + "." + modifier + "\n\n";

            data += "| Contract | Function |\n";
            data += "|----------|----------|\n";
            writeFileSync(join(__dirname, CONTRACT_FILENAME_V3), data, {
              flag: "a+",
            });

            firstTime = false;
          }

          data = "| ";
          data += contract.contract;
          data += " | ";
          data += func.name;
          data += " |\n";
          writeFileSync(join(__dirname, CONTRACT_FILENAME_V3), data, {
            flag: "a+",
          });
        }
      }
    }
  }

  for (const modifier of modifierNamesV2) {
    for (const contract of contractsV2) {
      let firstTime = true;
      for (const func of contract.functions) {
        if (func.roles.includes(modifier)) {
          if (firstTime) {
            data = "<br/>\n\n";
            data += "## " + contract.contract + "." + modifier + "\n\n";

            data += "| Contract | Function |\n";
            data += "|----------|----------|\n";
            writeFileSync(join(__dirname, CONTRACT_FILENAME_V2), data, {
              flag: "a+",
            });

            firstTime = false;
          }

          data = "| ";
          data += contract.contract;
          data += " | ";
          data += func.name;
          data += " |\n";
          writeFileSync(join(__dirname, CONTRACT_FILENAME_V2), data, {
            flag: "a+",
          });
        }
      }
    }
  }
}

main();

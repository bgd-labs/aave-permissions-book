import { writeFileSync } from "fs";
import { join } from "path";
import * as v3Contracts from "../../jsonBases/functionsPermissionsV3.json";
import { modifierNames, roleNames } from "../../helpers/constants";

const OUTPUT_FILE = "../../out/PERMISSIONS_V3.md";

function emptyFile() {
  writeFileSync(join(__dirname, OUTPUT_FILE), "", {
    flag: "w",
  });
}

function createRolesTableHeader(role: string) {
  let data = "<br/>\n\n";
  data += "## " + role + "\n\n";

  data += "| Contract | Function |\n";
  data += "|----------|----------|\n";
  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}

function createModifiersTableHeader(contract: string, modifier: string) {
  let data = "<br/>\n\n";
  data += "## " + contract + "." + modifier + "\n\n";

  data += "| Contract | Function |\n";
  data += "|----------|----------|\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}

function insertIntoTable(contract: string, functionName: string) {
  let data = "| ";
  data += contract;
  data += " | ";
  data += functionName;
  data += " |\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}

async function main() {
  emptyFile();

  for (const role of roleNames) {
    createRolesTableHeader(role);

    for (const contract of v3Contracts) {
      for (const func of contract.functions) {
        if (func.roles.includes(role)) {
          insertIntoTable(contract.contract, func.name);
        }
      }
    }
  }

  for (const modifier of modifierNames) {
    for (const contract of v3Contracts) {
      let firstTime = true;
      for (const func of contract.functions) {
        if (func.roles.includes(modifier)) {
          if (firstTime) {
            createModifiersTableHeader(contract.contract, modifier);

            firstTime = false;
          }

          insertIntoTable(contract.contract, func.name);
        }
      }
    }
  }
}

main();

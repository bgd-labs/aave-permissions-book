import { writeFileSync } from "fs";
import { join } from "path";
import * as v2Contracts from "../../jsonBases/functionsPermissionsV2.json";
import { modifierNamesV2 } from "../../helpers/constants";

const OUTPUT_FILE = "../../out/PERMISSIONS_V2.md";

function emptyFile() {
  writeFileSync(join(__dirname, OUTPUT_FILE), "", {
    flag: "w",
  });
}

function createTableHeader(contract: string, modifier: string) {
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

  for (const modifier of modifierNamesV2) {
    for (const contract of v2Contracts) {
      let firstTime = true;

      for (const func of contract.functions) {
        if (func.roles.includes(modifier)) {
          if (firstTime) {
            createTableHeader(contract.contract, modifier);

            firstTime = false;
          }

          insertIntoTable(contract.contract, func.name);
        }
      }
    }
  }
}

main();

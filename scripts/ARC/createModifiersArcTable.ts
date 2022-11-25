import { writeFileSync } from "fs";
import { join } from "path";
import * as modifiers from "../../jsonBases/modifiersArc.json";

const OUTPUT_FILE = "../../out/MODIFIERS_ARC.md";

function initializeModifiersFile() {
  const data = "# MODIFIERS ARC\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "w",
  });
}

function writeNetworkNameBeforeTable(network: string) {
  const data =
    "\n## " + network.charAt(0).toUpperCase() + network.slice(1) + "\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}

function writeTableHeader() {
  let data = "| Modifier | Addreess |\n";
  data += "|----------|----------|\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}
function createLink(
  contract: string,
  modifier: string,
  destinationFile: string
) {
  return (
    "[" +
    contract +
    "." +
    modifier +
    "](" +
    destinationFile +
    "#" +
    (contract + modifier).toLocaleLowerCase() +
    ")"
  );
}

function insertIntoModifierTable(
  contract: string,
  modifier: string,
  addresses: string | string[]
) {
  let data = "| ";
  data += createLink(contract, modifier, "../out/PERMISSIONS_ARC.md");
  data += " | ";
  data += addresses;
  data += " |\n";

  writeFileSync(join(__dirname, OUTPUT_FILE), data, {
    flag: "a+",
  });
}

async function main() {
  initializeModifiersFile();

  writeNetworkNameBeforeTable("mainnet");
  writeTableHeader();

  for (const modifier of modifiers) {
    insertIntoModifierTable(
      modifier.contract,
      modifier.modifier,
      modifier.networks[0].addresses
    );
  }
}

main();

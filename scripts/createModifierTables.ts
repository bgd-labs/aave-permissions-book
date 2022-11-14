import { writeFileSync } from "fs";
import { join } from "path";
import * as modifiersV3 from "../jsonBases/modifiersV3.json";
import * as modifiersV2 from "../jsonBases/modifiersV2.json";
import * as modifiersAMM from "../jsonBases/modifiersAMM.json";

let currentWorkingVersion: string;

const V2 = "V2";
const V3 = "V3";
const AMM = "AMM";

const MODIFIERS_FILE_V3 = "../out/MODIFIERS_V3.md";
const MODIFIERS_FILE_V2 = "../out/MODIFIERS_V2.md";
const PERMISSION_FILE_V3 = "../out/PERMISSIONS_V3.md";
const PERMISSION_FILE_V2 = "../out/PERMISSIONS_V2.md";

const networksV2 = ["ethereum", "matic", "avalanche"];
const networksV3 = [
  "optimism",
  "matic",
  "arbitrum",
  "avalanche",
  "fantom",
  "harmony",
];

function initializeModifiersFile(writeFromBegining: boolean) {
  const [, filename] = findFilesFromVersion();
  const writeFlag = writeFromBegining ? "w" : "a+";

  let data = "# MODIFIERS " + currentWorkingVersion + "\n";
  data = writeFromBegining ? data : "</br></br>\n" + data;

  writeFileSync(join(__dirname, filename), data, {
    flag: writeFlag,
  });
}

function findFilesFromVersion() {
  switch (currentWorkingVersion) {
    case V2:
      return [PERMISSION_FILE_V2, MODIFIERS_FILE_V2];
    case AMM:
      return [PERMISSION_FILE_V2, MODIFIERS_FILE_V2];
    case V3:
      return [PERMISSION_FILE_V3, MODIFIERS_FILE_V3];
  }
}

function writeNetworkNameBeforeTable(network: string) {
  const [, filename] = findFilesFromVersion();

  const data =
    "\n## " + network.charAt(0).toUpperCase() + network.slice(1) + "\n";

  writeFileSync(join(__dirname, filename), data, {
    flag: "a+",
  });
}

function writeTableHeader() {
  const [, filename] = findFilesFromVersion();

  let data = "| Modifier | Addreess |\n";
  data += "|----------|----------|\n";

  writeFileSync(join(__dirname, filename), data, {
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
  const [linkFile, outputFile] = findFilesFromVersion();

  let data = "| ";
  data += createLink(contract, modifier, linkFile);
  data += " | ";
  data += addresses;
  data += " |\n";

  writeFileSync(join(__dirname, outputFile), data, {
    flag: "a+",
  });
}

async function main() {
  currentWorkingVersion = V3;
  initializeModifiersFile(true);

  for (const network of networksV3) {
    writeNetworkNameBeforeTable(network);
    writeTableHeader();

    for (const modifier of modifiersV3) {
      const index = networksV3.indexOf(network);
      insertIntoModifierTable(
        modifier.contract,
        modifier.modifier,
        modifier.networks[index].address
      );
    }
  }

  currentWorkingVersion = V2;
  initializeModifiersFile(true);
  for (const network of networksV2) {
    writeNetworkNameBeforeTable(network);
    writeTableHeader();

    for (const modifier of modifiersV2) {
      const index = networksV2.indexOf(network);
      insertIntoModifierTable(
        modifier.contract,
        modifier.modifier,
        modifier.networks[index].addresses
      );
    }
  }

  currentWorkingVersion = AMM;
  initializeModifiersFile(false);
  const network = networksV2[0];
  writeNetworkNameBeforeTable(network);
  writeTableHeader();

  for (const modifier of modifiersAMM) {
    insertIntoModifierTable(
      modifier.contract,
      modifier.modifier,
      modifier.networks[0].addresses
    );
  }
}

main();

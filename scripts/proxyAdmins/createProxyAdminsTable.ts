import { writeFileSync } from "fs";
import { join } from "path";
import * as proxyAdminsV3 from "../..//jsonBases/proxyAdminsV3.json";
import * as proxyAdminsV2 from "../..//jsonBases/proxyAdminsV2.json";
import * as immutableProxyAdminsV3 from "../..//jsonBases/immutableProxyAdminsV3.json";
import * as immutableProxyAdminsV2 from "../../jsonBases/immutableProxyAdminsV2.json";
import * as immutableProxyAdminsAMM from "../../jsonBases/immutableProxyAdminsAMM.json";
import * as proxyAdminsAMM from "../..//jsonBases/proxyAdminsAMM.json";
import * as immutableProxyAdminsARC from "../../jsonBases/immutableProxyAdminsARC.json";
import * as proxyAdminsARC from "../../jsonBases/proxyAdminsARC.json";

const networks = [
  "optimism",
  "matic",
  "arbitrum",
  "avalanche",
  "fantom",
  "harmony",
];
const V3 = "V3";
const V2 = "V2";
const AMM = "AMM";
const ARC = "ARC";
const networksV2 = ["mainnet", "matic", "avalanche"];

function findFilesFromVersion(version: string) {
  switch (version) {
    case "V2":
      return "../../out/MODIFIERS_V2.md";
    case "V3":
      return "../../out/MODIFIERS_V3.md";
    case "AMM":
      return "../../out/MODIFIERS_V2.md";
    case "ARC":
      return "../../out/MODIFIERS_ARC.md";
  }
}

function writeNetworkNameBeforeTable(network: string, version: string) {
  const filename = findFilesFromVersion(version);

  const data =
    "\n## " + network.charAt(0).toUpperCase() + network.slice(1) + "\n";

  writeFileSync(join(__dirname, filename), data, {
    flag: "a+",
  });
}

function writeTableHeader(version: string) {
  const filename = findFilesFromVersion(version);

  let data = "| Modifier | Addreess |\n";
  data += "|----------|----------|\n";

  writeFileSync(join(__dirname, filename), data, {
    flag: "a+",
  });
}

function writeProxyHeader(version: string) {
  const filename = findFilesFromVersion(version);

  let data = "# Proxy";
  data = version == AMM ? data + ".AMM" : data;

  writeFileSync(join(__dirname, filename), data, {
    flag: "a+",
  });
}

function insertIntoModifierTable(
  contract: string,
  addresses: string | string[],
  version: string
) {
  const outputFile = findFilesFromVersion(version);

  let data = "| ";
  data += contract + ".ProxyAdmin";
  data += " | ";
  data += addresses;
  data += " |\n";

  writeFileSync(join(__dirname, outputFile), data, {
    flag: "a+",
  });
}

async function main() {
  writeProxyHeader(V3);
  for (const network of networks) {
    writeNetworkNameBeforeTable(network, V3);
    writeTableHeader(V3);

    for (const proxyAdmin of immutableProxyAdminsV3) {
      const index = networks.indexOf(network);
      insertIntoModifierTable(
        proxyAdmin.contract,
        proxyAdmin.networks[index].address,
        V3
      );
    }

    for (const proxyAdmin of proxyAdminsV3) {
      const index = networks.indexOf(network);
      insertIntoModifierTable(
        proxyAdmin.contract,
        proxyAdmin.networks[index].address,
        V3
      );
    }
  }

  writeProxyHeader(V2);
  for (const network of networksV2) {
    writeNetworkNameBeforeTable(network, V2);
    writeTableHeader(V2);
    for (const proxyAdmin of immutableProxyAdminsV2) {
      const index = networksV2.indexOf(network);
      insertIntoModifierTable(
        proxyAdmin.contract,
        proxyAdmin.networks[index].address,
        V2
      );
    }

    for (const proxyAdmin of proxyAdminsV2) {
      const index = networksV2.indexOf(network);
      insertIntoModifierTable(
        proxyAdmin.contract,
        proxyAdmin.networks[index].address,
        V2
      );
    }
  }

  writeProxyHeader(AMM);
  let network = networksV2[0];
  writeNetworkNameBeforeTable(network, AMM);
  writeTableHeader(AMM);
  for (const proxyAdmin of immutableProxyAdminsAMM) {
    insertIntoModifierTable(
      proxyAdmin.contract,
      proxyAdmin.networks[0].address,
      AMM
    );
  }

  for (const proxyAdmin of proxyAdminsAMM) {
    insertIntoModifierTable(
      proxyAdmin.contract,
      proxyAdmin.networks[0].address,
      AMM
    );
  }

  writeProxyHeader(ARC);
  network = networksV2[0];
  writeNetworkNameBeforeTable(network, ARC);
  writeTableHeader(ARC);
  for (const proxyAdmin of immutableProxyAdminsARC) {
    insertIntoModifierTable(
      proxyAdmin.contract,
      proxyAdmin.networks[0].address,
      ARC
    );
  }

  for (const proxyAdmin of proxyAdminsARC) {
    insertIntoModifierTable(
      proxyAdmin.contract,
      proxyAdmin.networks[0].address,
      ARC
    );
  }
}

main();

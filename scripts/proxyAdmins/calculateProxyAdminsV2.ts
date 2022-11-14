import { ethers } from "ethers";
import * as fs from "fs";
import { TWO, basicNetworkSettingsV2 } from "../../helpers/constants";

import { AaveV2Ethereum } from "@bgd-labs/aave-address-book";
import { AaveV2Polygon } from "@bgd-labs/aave-address-book";
import { AaveV2Avalanche } from "@bgd-labs/aave-address-book";
import { AaveV2EthereumAMM } from "@bgd-labs/aave-address-book";

const addressBooks = [AaveV2Ethereum, AaveV2Polygon, AaveV2Avalanche];

const proxyAdminSlot =
  "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";

type NetworkData = {
  networkName: string;
  address: string;
};

type ProxyAdminData = {
  contract: string;
  networks: Array<NetworkData>;
};

async function registerProxyAdminsInDb(
  filename: string,
  value: Array<ProxyAdminData>
) {
  fs.writeFile(filename, JSON.stringify(value, null, TWO), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

function initializeProxyAdminsArray() {
  let proxyAdmins: Array<ProxyAdminData> = new Array<ProxyAdminData>();

  return proxyAdmins;
}

function addProxyAdmin(proxyAdmins, admin, contractName, network) {
  if (basicNetworkSettingsV2.indexOf(network) == 0) {
    proxyAdmins.push({
      contract: contractName,
      networks: [
        {
          networkName: network.name,
          address: admin.slice(0, 2) + admin.slice(26, admin.length),
        },
      ],
    });
  } else {
    proxyAdmins[0].networks.push({
      networkName: network.name,
      address: admin.slice(0, 2) + admin.slice(26, admin.length),
    });
  }
}

async function main() {
  let proxyAdmins: Array<ProxyAdminData> = initializeProxyAdminsArray();

  for (const network of basicNetworkSettingsV2) {
    const provider = new ethers.providers.JsonRpcProvider(network.url);

    addProxyAdmin(
      proxyAdmins,
      await provider.getStorageAt(
        addressBooks[basicNetworkSettingsV2.indexOf(network)].COLLECTOR,
        proxyAdminSlot
      ),
      "Collector",
      network
    );
  }

  registerProxyAdminsInDb("./jsonBases/proxyAdminsV2.json", proxyAdmins);

  proxyAdmins = initializeProxyAdminsArray();
  let network = basicNetworkSettingsV2[0];
  let provider = new ethers.providers.JsonRpcProvider(network.url);

  addProxyAdmin(
    proxyAdmins,
    await provider.getStorageAt(AaveV2EthereumAMM.COLLECTOR, proxyAdminSlot),
    "Collector",
    network
  );

  registerProxyAdminsInDb("./jsonBases/proxyAdminsAMM.json", proxyAdmins);
  registerProxyAdminsInDb("./jsonBases/proxyAdminsARC.json", proxyAdmins);
}

main();

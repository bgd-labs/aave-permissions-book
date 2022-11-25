import { ethers } from "ethers";
import * as fs from "fs";
import {
  TWO,
  proxyContracts,
  basicNetworkSettings,
} from "../../helpers/constants";

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

function addProxyAdmin(proxyAdmins, network, contractInfo, admin) {
  if (basicNetworkSettings.indexOf(network) == 0) {
    proxyAdmins.push({
      contract: contractInfo.contractName,
      networks: [
        {
          networkName: network.name,
          address: admin.slice(0, 2) + admin.slice(26, admin.length),
        },
      ],
    });
  } else {
    proxyAdmins[
      proxyContracts.get(network.name).indexOf(contractInfo)
    ].networks.push({
      networkName: network.name,
      address: admin.slice(0, 2) + admin.slice(26, admin.length),
    });
  }
}

async function main() {
  let proxyAdmins: Array<ProxyAdminData> = initializeProxyAdminsArray();

  for (const network of basicNetworkSettings) {
    const provider = new ethers.providers.JsonRpcProvider(network.url);

    for (const contractInfo of proxyContracts.get(network.name)) {
      let admin = await provider.getStorageAt(
        contractInfo.address,
        proxyAdminSlot
      );

      addProxyAdmin(proxyAdmins, network, contractInfo, admin);
    }
  }

  registerProxyAdminsInDb("./jsonBases/proxyAdminsV3.json", proxyAdmins);
}

main();

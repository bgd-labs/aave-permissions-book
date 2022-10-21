import { ethers } from "ethers";
import * as fs from "fs";
import {
  ZERO,
  networks,
  ownershipTransferedEventABI,
  newFundsAdminEventABI,
  collectorControllerAddresses,
  collectorAddresses,
  ONE,
  TWO,
} from "../helpers/constants";

type NetworkData = {
  networkName: string;
  addresses: Array<string>;
};

type ModifierData = {
  contract: string;
  modifier: string;
  networks: Array<NetworkData>;
};

async function registerModifiersInDb(
  filename: string,
  value: Array<ModifierData>
) {
  fs.writeFile(filename, JSON.stringify(value, null, TWO), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

function initializeModifiersArrayV3() {
  let modifiers: Array<ModifierData> = new Array<ModifierData>();
  modifiers.push({
    contract: "CollectorController",
    modifier: "onlyOwner",
    networks: new Array<NetworkData>(),
  });

  modifiers.push({
    contract: "Collector",
    modifier: "onlyFundsAdmin",
    networks: new Array<NetworkData>(),
  });

  return modifiers;
}

async function main() {
  let modifiersV3: Array<ModifierData> = initializeModifiersArrayV3();

  for (const network of networks) {
    const provider = new ethers.providers.AlchemyProvider(network);

    let filter = {
      address: collectorControllerAddresses.get(network),
      fromBlock: ZERO,
    };

    let callPromise = await provider.getLogs(filter);
    let iface = new ethers.utils.Interface(ownershipTransferedEventABI);

    let event: ethers.utils.LogDescription;
    event = iface.parseLog(callPromise.pop()!);

    modifiersV3[ZERO].networks.push({
      networkName: network,
      addresses: [event.args[ONE]],
    });

    filter = {
      address: collectorAddresses.get(network),
      fromBlock: ZERO,
    };

    callPromise = await provider.getLogs(filter);
    iface = new ethers.utils.Interface(newFundsAdminEventABI);

    let exitLoop = false;
    while (!exitLoop) {
      try {
        event = iface.parseLog(callPromise.pop()!);
      } catch {
        continue;
      }
      exitLoop = true;
    }

    modifiersV3[ONE].networks.push({
      networkName: network,
      addresses: [event.args[ZERO]],
    });
  }

  registerModifiersInDb("./modifiersV3.json", modifiersV3);
}

main();
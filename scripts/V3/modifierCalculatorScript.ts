import { ethers } from "ethers";
import * as fs from "fs";
import { on } from "stream";
import * as onlyOwnerAbi from "../../abis/onlyOwnerAbi.json";
import * as collectorAbi from "../../abis/collectorAbi.json";
import * as rewardsControllerAbi from "../../abis/rewardsControllerAbi.json";
import {
  basicNetworkSettings,
  poolAddressProviderRegistryAddress,
  rewardsControllerAddress,
} from "../../helpers/constants";

import { AaveV3Optimism } from "@bgd-labs/aave-address-book";
import { AaveV3Arbitrum } from "@bgd-labs/aave-address-book";
import { AaveV3Polygon } from "@bgd-labs/aave-address-book";
import { AaveV3Fantom } from "@bgd-labs/aave-address-book";
import { AaveV3Avalanche } from "@bgd-labs/aave-address-book";
import { AaveV3Harmony } from "@bgd-labs/aave-address-book";

const addressBooks = [
  AaveV3Optimism,
  AaveV3Arbitrum,
  AaveV3Polygon,
  AaveV3Fantom,
  AaveV3Avalanche,
  AaveV3Harmony,
];

type NetworkData = {
  networkName: string;
  address: string;
};

type ModifierData = {
  contract: string;
  modifier: string;
  networks: Array<NetworkData>;
};

let modifiersV3: Array<ModifierData> = new Array<ModifierData>();

async function registerModifiersInDb(
  filename: string,
  value: Array<ModifierData>
) {
  fs.writeFile(filename, JSON.stringify(value, null, 2), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

async function addModifier(
  network: { name: string; url: string },
  addressValue: string,
  index: number,
  contractName: string,
  modifierName: string
) {
  if (basicNetworkSettings.indexOf(network) == 0) {
    modifiersV3.push({
      contract: contractName,
      modifier: modifierName,
      networks: [
        {
          networkName: network.name,
          address: addressValue,
        },
      ],
    });
  } else {
    let getMod = modifiersV3[index];
    getMod.networks.push({
      networkName: network.name,
      address: addressValue,
    });

    modifiersV3[index] = getMod;
  }
}

async function main() {
  for (const network of basicNetworkSettings) {
    const provider = new ethers.providers.JsonRpcProvider(network.url);

    let index = 0;
    const collectorController = new ethers.Contract(
      addressBooks[basicNetworkSettings.indexOf(network)].COLLECTOR_CONTROLLER,
      onlyOwnerAbi,
      provider
    );

    const collectorControllerOwner = await collectorController.owner();

    addModifier(
      network,
      collectorControllerOwner,
      index,
      "CollectorController",
      "onlyOwner"
    );

    index++;
    const addressProvider = new ethers.Contract(
      addressBooks[
        basicNetworkSettings.indexOf(network)
      ].POOL_ADDRESSES_PROVIDER,
      onlyOwnerAbi,
      provider
    );
    const addressProviderOwner = await addressProvider.owner();
    addModifier(
      network,
      addressProviderOwner,
      index,
      "PoolAddressesProvider",
      "onlyOwner"
    );

    index++;
    const addressProviderRegistry = new ethers.Contract(
      poolAddressProviderRegistryAddress,
      onlyOwnerAbi,
      provider
    );
    const addressProviderRegistryOwner = await addressProviderRegistry.owner();
    addModifier(
      network,
      addressProviderRegistryOwner,
      index,
      "PoolAddressesProviderRegistry",
      "onlyOwner"
    );

    index++;
    const collector = new ethers.Contract(
      addressBooks[basicNetworkSettings.indexOf(network)].COLLECTOR,
      collectorAbi,
      provider
    );

    const fundAdmin = await collector.getFundsAdmin();
    addModifier(network, fundAdmin, index, "Collector", "onlyFundsAdmin");

    index++;
    const rewardsController = new ethers.Contract(
      rewardsControllerAddress,
      rewardsControllerAbi,
      provider
    );
    const emissionManager = await rewardsController.getEmissionManager();
    addModifier(
      network,
      emissionManager,
      index,
      "RewardsController",
      "onlyEmissionManager"
    );
  }

  registerModifiersInDb("./jsonBases/modifiersV3.json", modifiersV3);
}

main();

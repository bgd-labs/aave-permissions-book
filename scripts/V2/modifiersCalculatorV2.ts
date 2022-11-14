import { ethers } from "ethers";
import * as fs from "fs";
import * as lendingPoolAddressProviderAbi from "../../abis/lendingPoolAddressProviderAbi.json";
import * as onlyOwnerAbi from "../../abis/onlyOwnerAbi.json";
import { AaveV2EthereumAMM } from "@bgd-labs/aave-address-book";
import { AaveV2Ethereum } from "@bgd-labs/aave-address-book";
import { AaveV2Avalanche } from "@bgd-labs/aave-address-book";
import { AaveV2Polygon } from "@bgd-labs/aave-address-book";
import { basicNetworkSettingsV2 } from "../../helpers/constants";

const AMM = 1;
const DEFAULT = 0;

const LENDING_RATE_ORACLES = [
  "0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D",
  "0x17F73aEaD876CC4059089ff815EDA37052960dFB",
  "0xc34254642B504484465F38Cb1CC396d45a9c7c80",
];
const V2AddressBooks = [AaveV2Ethereum, AaveV2Polygon, AaveV2Avalanche];

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
  fs.writeFile(filename, JSON.stringify(value, null, 2), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

async function addModifierInArray(
  contractName: string,
  modifier: string,
  address: string,
  network,
  index: number,
  modifiers: Array<ModifierData>
) {
  if (network.name == "mainnet") {
    modifiers.push({
      contract: contractName,
      modifier: modifier,
      networks: [
        {
          networkName: "mainnet",
          addresses: [address],
        },
      ],
    });
  } else {
    let getMod = modifiers[index];
    getMod.networks.push({
      networkName: network.name,
      addresses: [address],
    });

    modifiers[index] = getMod;
  }
}

async function resolveModifiers(
  market: number,
  network: { name: string; url: string },
  provider: ethers.providers.Provider,
  modifiers: Array<ModifierData>
) {
  let index = 0;
  const LENDING_RATE_ORACLE =
    LENDING_RATE_ORACLES[basicNetworkSettingsV2.indexOf(network)];

  let addressBook = market
    ? AaveV2EthereumAMM
    : V2AddressBooks[basicNetworkSettingsV2.indexOf(network)];

  const lendingPoolAddressProvider = new ethers.Contract(
    addressBook.POOL_ADDRESSES_PROVIDER,
    lendingPoolAddressProviderAbi,
    provider
  );

  addModifierInArray(
    "LendingPoolAddressProvider",
    "onlyOwner",
    await lendingPoolAddressProvider.owner(),
    network,
    index++,
    modifiers
  );

  addModifierInArray(
    "LendingPool",
    "onlyLendingPoolConfigurator",
    await lendingPoolAddressProvider.getLendingPoolConfigurator(),
    network,
    index++,
    modifiers
  );

  addModifierInArray(
    "LendingPoolConfigurator",
    "onlyPoolAdmin",
    await lendingPoolAddressProvider.getPoolAdmin(),
    network,
    index++,
    modifiers
  );

  addModifierInArray(
    "LendingPoolConfigurator",
    "onlyEmergencyAdmin",
    await lendingPoolAddressProvider.getEmergencyAdmin(),
    network,
    index++,
    modifiers
  );

  const aaveOracle = new ethers.Contract(
    addressBook.ORACLE,
    onlyOwnerAbi,
    provider
  );

  addModifierInArray(
    "AaveOracle",
    "onlyOwner",
    await aaveOracle.owner(),
    network,
    index++,
    modifiers
  );

  const lendingRateOracle = new ethers.Contract(
    LENDING_RATE_ORACLE,
    onlyOwnerAbi,
    provider
  );

  addModifierInArray(
    "LendingRateOracle",
    "onlyOwner",
    await lendingRateOracle.owner(),
    network,
    index++,
    modifiers
  );

  return modifiers;
}

async function main() {
  let modifiers: Array<ModifierData> = new Array<ModifierData>();
  const provider = new ethers.providers.AlchemyProvider(
    "mainnet",
    "wEwU86fAH7uxufRHByoH7C5E6GWnX_yJ"
  );

  await resolveModifiers(AMM, basicNetworkSettingsV2[0], provider, modifiers);
  registerModifiersInDb("./jsonBases/modifiersAMM.json", modifiers);

  modifiers = new Array<ModifierData>();

  for (const network of basicNetworkSettingsV2) {
    const provider = new ethers.providers.JsonRpcProvider(network.url);
    await resolveModifiers(DEFAULT, network, provider, modifiers);
  }

  registerModifiersInDb("./jsonBases/modifiersV2.json", modifiers);
}

main();

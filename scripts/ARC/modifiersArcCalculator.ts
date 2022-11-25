import { ethers } from "ethers";
import * as fs from "fs";
import * as arcTimelockAbi from "../../abis/arcTimelockAbi.json";
import * as lendingPoolConfiguratorAbi from "../../abis/lendingPoolConfigurator.json";
import * as onlyOwnerAbi from "../../abis/onlyOwnerAbi.json";
import * as executorWithTimelockAbi from "../../abis/executorWithTimelockAbi.json";

import { AaveV2EthereumArc } from "@bgd-labs/aave-address-book";

const EXECUTOR = "0xEE56e2B3D491590B5b31738cC34d5232F378a8D5";
const PERMISSION_MANAGER = "0xF4a1F5fEA79C3609514A417425971FadC10eCfBE";

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
  modifiers: Array<ModifierData>
) {
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
}

async function main() {
  let modifiers: Array<ModifierData> = new Array<ModifierData>();

  const provider = new ethers.providers.AlchemyProvider(
    "mainnet",
    "wEwU86fAH7uxufRHByoH7C5E6GWnX_yJ"
  );

  const lendingPoolAddressProvider = new ethers.Contract(
    AaveV2EthereumArc.POOL_ADDRESSES_PROVIDER,
    lendingPoolConfiguratorAbi,
    provider
  );

  addModifierInArray(
    "LendingPoolAddressProvider",
    "onlyOwner",
    await lendingPoolAddressProvider.owner(),
    modifiers
  );

  addModifierInArray(
    "LendingPoolConfigurator",
    "onlyPoolAdmin",
    await lendingPoolAddressProvider.getPoolAdmin(),
    modifiers
  );

  addModifierInArray(
    "LendingPoolConfigurator",
    "onlyEmergencyAdmin",
    await lendingPoolAddressProvider.getEmergencyAdmin(),
    modifiers
  );

  const arcTimelock = new ethers.Contract(
    await lendingPoolAddressProvider.getPoolAdmin(),
    arcTimelockAbi,
    provider
  );

  addModifierInArray(
    "ArcTimelock",
    "onlyEthereumGovernanceExecutor",
    await arcTimelock.getEthereumGovernanceExecutor(),
    modifiers
  );

  addModifierInArray(
    "ArcTimelock",
    "onlyGuardian",
    await arcTimelock.getGuardian(),
    modifiers
  );

  const aaveOracle = new ethers.Contract(
    AaveV2EthereumArc.ORACLE,
    onlyOwnerAbi,
    provider
  );

  addModifierInArray(
    "AaveOracle",
    "onlyOwner",
    await aaveOracle.owner(),
    modifiers
  );

  const executorWithTimelock = new ethers.Contract(
    EXECUTOR,
    executorWithTimelockAbi,
    provider
  );

  addModifierInArray(
    "ExecutorWithTimelock",
    "onlyTimelock",
    executorWithTimelock.address,
    modifiers
  );

  addModifierInArray(
    "ExecutorWithTimelock",
    "onlyPendingAdmin",
    await executorWithTimelock.getPendingAdmin(),
    modifiers
  );

  addModifierInArray(
    "ExecutorWithTimelock",
    "onlyAdmin",
    await executorWithTimelock.getAdmin(),
    modifiers
  );

  const permissionManager = new ethers.Contract(
    PERMISSION_MANAGER,
    onlyOwnerAbi,
    provider
  );

  addModifierInArray(
    "PermissionManager",
    "onlyOwner",
    await permissionManager.owner(),
    modifiers
  );

  registerModifiersInDb("./jsonBases/modifiersArc.json", modifiers);
}

main();

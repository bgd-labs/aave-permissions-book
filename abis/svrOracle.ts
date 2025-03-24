export const SVR_ORACLE_STEWARD_ABI = [{ "inputs": [{ "internalType": "contract IPoolAddressesProvider", "name": "addressesProvider", "type": "address" }, { "internalType": "address", "name": "initialOwner", "type": "address" }, { "internalType": "address", "name": "initialGuardian", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "InvalidOracleDecimals", "type": "error" }, { "inputs": [], "name": "NoCachedOracle", "type": "error" }, { "inputs": [], "name": "NoSvrOracleConfigured", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OnlyGuardianInvalidCaller", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OnlyGuardianOrOwnerInvalidCaller", "type": "error" }, { "inputs": [{ "internalType": "int256", "name": "oldPrice", "type": "int256" }, { "internalType": "int256", "name": "newPrice", "type": "int256" }], "name": "OracleDeviation", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "inputs": [], "name": "UnknownOracle", "type": "error" }, { "inputs": [], "name": "ZeroAddress", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldGuardian", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newGuardian", "type": "address" }], "name": "GuardianUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "address", "name": "currentOracle", "type": "address" }, { "indexed": false, "internalType": "address", "name": "svrOracle", "type": "address" }], "name": "SvrOracleConfigChanged", "type": "event" }, { "inputs": [], "name": "POOL_ADDRESSES_PROVIDER", "outputs": [{ "internalType": "contract IPoolAddressesProvider", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "disableSvrOracle", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "svrOracle", "type": "address" }], "internalType": "struct ISvrOracleSteward.AssetOracle[]", "name": "oracleConfig", "type": "tuple[]" }], "name": "enableSvrOracles", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "getOracleConfig", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "guardian", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "removeOracle", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newGuardian", "type": "address" }], "name": "updateGuardian", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
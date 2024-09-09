export const ghoStewardV2 = [
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      {
        "internalType": "address",
        "name": "addressesProvider",
        "type": "address"
      },
      { "internalType": "address", "name": "ghoToken", "type": "address" },
      {
        "internalType": "address",
        "name": "fixedRateStrategyFactory",
        "type": "address"
      },
      { "internalType": "address", "name": "riskCouncil", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "FIXED_RATE_STRATEGY_FACTORY",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GHO_BORROW_RATE_CHANGE_MAX",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GHO_BORROW_RATE_MAX",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GHO_TOKEN",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GSM_FEE_RATE_CHANGE_MAX",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINIMUM_DELAY",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "POOL_ADDRESSES_PROVIDER",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "RISK_COUNCIL",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getControlledFacilitators",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "facilitator", "type": "address" }
    ],
    "name": "getFacilitatorBucketCapacityTimelock",
    "outputs": [{ "internalType": "uint40", "name": "", "type": "uint40" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGhoTimelocks",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint40",
            "name": "ghoBorrowCapLastUpdate",
            "type": "uint40"
          },
          {
            "internalType": "uint40",
            "name": "ghoBorrowRateLastUpdate",
            "type": "uint40"
          }
        ],
        "internalType": "struct IGhoStewardV2.GhoDebounce",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGsmFeeStrategies",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "gsm", "type": "address" }],
    "name": "getGsmTimelocks",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint40",
            "name": "gsmExposureCapLastUpdated",
            "type": "uint40"
          },
          {
            "internalType": "uint40",
            "name": "gsmFeeStrategyLastUpdated",
            "type": "uint40"
          }
        ],
        "internalType": "struct IGhoStewardV2.GsmDebounce",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "facilitatorList",
        "type": "address[]"
      },
      { "internalType": "bool", "name": "approve", "type": "bool" }
    ],
    "name": "setControlledFacilitator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "facilitator", "type": "address" },
      {
        "internalType": "uint128",
        "name": "newBucketCapacity",
        "type": "uint128"
      }
    ],
    "name": "updateFacilitatorBucketCapacity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "newBorrowCap", "type": "uint256" }
    ],
    "name": "updateGhoBorrowCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "newBorrowRate", "type": "uint256" }
    ],
    "name": "updateGhoBorrowRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "gsm", "type": "address" },
      { "internalType": "uint256", "name": "buyFee", "type": "uint256" },
      { "internalType": "uint256", "name": "sellFee", "type": "uint256" }
    ],
    "name": "updateGsmBuySellFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "gsm", "type": "address" },
      { "internalType": "uint128", "name": "newExposureCap", "type": "uint128" }
    ],
    "name": "updateGsmExposureCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

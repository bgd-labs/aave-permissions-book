export const baseAdapter = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "crossChainController",
        "type": "address"
      },
      { "internalType": "address", "name": "ccipRouter", "type": "address" },
      {
        "internalType": "uint256",
        "name": "providerGasLimit",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "originForwarder",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "originChainId",
            "type": "uint256"
          }
        ],
        "internalType": "struct IBaseAdapter.TrustedRemotesConfig[]",
        "name": "trustedRemotes",
        "type": "tuple[]"
      },
      { "internalType": "address", "name": "linkToken", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "token", "type": "address" }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "originChainId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originForwarder",
        "type": "address"
      }
    ],
    "name": "SetTrustedRemote",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BASE_GAS_LIMIT",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CCIP_ROUTER",
    "outputs": [
      {
        "internalType": "contract IRouterClient",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CROSS_CHAIN_CONTROLLER",
    "outputs": [
      {
        "internalType": "contract IBaseCrossChainController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LINK_TOKEN",
    "outputs": [
      { "internalType": "contract IERC20", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adapterName",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "bytes32", "name": "messageId", "type": "bytes32" },
          {
            "internalType": "uint64",
            "name": "sourceChainSelector",
            "type": "uint64"
          },
          { "internalType": "bytes", "name": "sender", "type": "bytes" },
          { "internalType": "bytes", "name": "data", "type": "bytes" },
          {
            "components": [
              { "internalType": "address", "name": "token", "type": "address" },
              { "internalType": "uint256", "name": "amount", "type": "uint256" }
            ],
            "internalType": "struct Client.EVMTokenAmount[]",
            "name": "tokenAmounts",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Client.Any2EVMMessage",
        "name": "message",
        "type": "tuple"
      }
    ],
    "name": "ccipReceive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "receiver", "type": "address" },
      {
        "internalType": "uint256",
        "name": "executionGasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "destinationChainId",
        "type": "uint256"
      },
      { "internalType": "bytes", "name": "message", "type": "bytes" }
    ],
    "name": "forwardMessage",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "chainId", "type": "uint256" }
    ],
    "name": "getTrustedRemoteByChainId",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "infraChainId", "type": "uint256" }
    ],
    "name": "infraToNativeChainId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "nativeChainId", "type": "uint256" }
    ],
    "name": "nativeToInfraChainId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setupPayments",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }
    ],
    "name": "supportsInterface",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "pure",
    "type": "function"
  }
]

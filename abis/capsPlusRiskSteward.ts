export const capsPlusRiskStewardABI = [
  {
    inputs: [
      {
        internalType: 'contract IPoolDataProvider',
        name: 'poolDataProvider',
        type: 'address',
      },
      {
        internalType: 'contract IAaveV3ConfigEngine',
        name: 'engine',
        type: 'address',
      },
      { internalType: 'address', name: 'riskCouncil', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CONFIG_ENGINE',
    outputs: [
      {
        internalType: 'contract IAaveV3ConfigEngine',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MINIMUM_DELAY',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'POOL_DATA_PROVIDER',
    outputs: [
      {
        internalType: 'contract IPoolDataProvider',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'RISK_COUNCIL',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'asset', type: 'address' }],
    name: 'getTimelock',
    outputs: [
      {
        components: [
          {
            internalType: 'uint40',
            name: 'supplyCapLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'borrowCapLastUpdated',
            type: 'uint40',
          },
        ],
        internalType: 'struct ICapsPlusRiskSteward.Debounce',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'supplyCap', type: 'uint256' },
          { internalType: 'uint256', name: 'borrowCap', type: 'uint256' },
        ],
        internalType: 'struct IAaveV3ConfigEngine.CapsUpdate[]',
        name: 'capUpdates',
        type: 'tuple[]',
      },
    ],
    name: 'updateCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

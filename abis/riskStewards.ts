export const RISK_STEWARDS_ABI = [
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
      {
        components: [
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'ltv',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationThreshold',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationBonus',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'supplyCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'borrowCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'debtCeiling',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'baseVariableBorrowRate',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'optimalUsageRatio',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapLst',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapStable',
            type: 'tuple',
          },
        ],
        internalType: 'struct IRiskSteward.Config',
        name: 'riskConfig',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'AssetIsRestricted', type: 'error' },
  { inputs: [], name: 'DebounceNotRespected', type: 'error' },
  { inputs: [], name: 'InvalidCaller', type: 'error' },
  { inputs: [], name: 'InvalidPriceCapUpdate', type: 'error' },
  { inputs: [], name: 'InvalidUpdateToZero', type: 'error' },
  { inputs: [], name: 'NoZeroUpdates', type: 'error' },
  { inputs: [], name: 'OracleIsRestricted', type: 'error' },
  { inputs: [], name: 'ParamChangeNotAllowed', type: 'error' },
  { inputs: [], name: 'UpdateNotAllowed', type: 'error' },
  { inputs: [], name: 'UpdateNotInRange', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'isRestricted',
        type: 'bool',
      },
    ],
    name: 'AddressRestricted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'ltv',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationThreshold',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationBonus',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'supplyCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'borrowCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'debtCeiling',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'baseVariableBorrowRate',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'optimalUsageRatio',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapLst',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapStable',
            type: 'tuple',
          },
        ],
        indexed: true,
        internalType: 'struct IRiskSteward.Config',
        name: 'riskConfig',
        type: 'tuple',
      },
    ],
    name: 'RiskConfigSet',
    type: 'event',
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
    name: 'POOL_DATA_PROVIDER',
    outputs: [
      { internalType: 'contract IPoolDataProvider', name: '', type: 'address' },
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
    inputs: [],
    name: 'getRiskConfig',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'ltv',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationThreshold',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationBonus',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'supplyCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'borrowCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'debtCeiling',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'baseVariableBorrowRate',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'optimalUsageRatio',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapLst',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapStable',
            type: 'tuple',
          },
        ],
        internalType: 'struct IRiskSteward.Config',
        name: '',
        type: 'tuple',
      },
    ],
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
          { internalType: 'uint40', name: 'ltvLastUpdated', type: 'uint40' },
          {
            internalType: 'uint40',
            name: 'liquidationBonusLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'liquidationThresholdLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'debtCeilingLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'baseVariableRateLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'variableRateSlope1LastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'variableRateSlope2LastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'optimalUsageRatioLastUpdated',
            type: 'uint40',
          },
          {
            internalType: 'uint40',
            name: 'priceCapLastUpdated',
            type: 'uint40',
          },
        ],
        internalType: 'struct IRiskSteward.Debounce',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'contractAddress', type: 'address' },
    ],
    name: 'isAddressRestricted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'contractAddress', type: 'address' },
      { internalType: 'bool', name: 'isRestricted', type: 'bool' },
    ],
    name: 'setAddressRestricted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'ltv',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationThreshold',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'liquidationBonus',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'supplyCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'borrowCap',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'debtCeiling',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'baseVariableBorrowRate',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'variableRateSlope2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'optimalUsageRatio',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapLst',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint40', name: 'minDelay', type: 'uint40' },
              {
                internalType: 'uint256',
                name: 'maxPercentChange',
                type: 'uint256',
              },
            ],
            internalType: 'struct IRiskSteward.RiskParamConfig',
            name: 'priceCapStable',
            type: 'tuple',
          },
        ],
        internalType: 'struct IRiskSteward.Config',
        name: 'riskConfig',
        type: 'tuple',
      },
    ],
    name: 'setRiskConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: 'capsUpdate',
        type: 'tuple[]',
      },
    ],
    name: 'updateCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          { internalType: 'uint256', name: 'ltv', type: 'uint256' },
          { internalType: 'uint256', name: 'liqThreshold', type: 'uint256' },
          { internalType: 'uint256', name: 'liqBonus', type: 'uint256' },
          { internalType: 'uint256', name: 'debtCeiling', type: 'uint256' },
          { internalType: 'uint256', name: 'liqProtocolFee', type: 'uint256' },
        ],
        internalType: 'struct IAaveV3ConfigEngine.CollateralUpdate[]',
        name: 'collateralUpdates',
        type: 'tuple[]',
      },
    ],
    name: 'updateCollateralSide',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'oracle', type: 'address' },
          {
            components: [
              {
                internalType: 'uint104',
                name: 'snapshotRatio',
                type: 'uint104',
              },
              {
                internalType: 'uint48',
                name: 'snapshotTimestamp',
                type: 'uint48',
              },
              {
                internalType: 'uint16',
                name: 'maxYearlyRatioGrowthPercent',
                type: 'uint16',
              },
            ],
            internalType: 'struct IPriceCapAdapter.PriceCapUpdateParams',
            name: 'priceCapUpdateParams',
            type: 'tuple',
          },
        ],
        internalType: 'struct IRiskSteward.PriceCapLstUpdate[]',
        name: 'priceCapUpdates',
        type: 'tuple[]',
      },
    ],
    name: 'updateLstPriceCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'asset', type: 'address' },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'optimalUsageRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'baseVariableBorrowRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'variableRateSlope1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'variableRateSlope2',
                type: 'uint256',
              },
            ],
            internalType: 'struct IAaveV3ConfigEngine.InterestRateInputData',
            name: 'params',
            type: 'tuple',
          },
        ],
        internalType: 'struct IAaveV3ConfigEngine.RateStrategyUpdate[]',
        name: 'ratesUpdate',
        type: 'tuple[]',
      },
    ],
    name: 'updateRates',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'oracle', type: 'address' },
          { internalType: 'uint256', name: 'priceCap', type: 'uint256' },
        ],
        internalType: 'struct IRiskSteward.PriceCapStableUpdate[]',
        name: 'priceCapUpdates',
        type: 'tuple[]',
      },
    ],
    name: 'updateStablePriceCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

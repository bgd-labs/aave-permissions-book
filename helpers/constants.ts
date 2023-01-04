require('dotenv').config();

import {
  AaveV3Optimism,
  AaveV3Arbitrum,
  AaveV3Polygon,
  AaveV3Fantom,
  AaveV3Avalanche,
  AaveV3Harmony,
} from '@bgd-labs/aave-address-book';

export const ZERO = 0;
export const ONE = 1;
export const TWO = 2;

export const networkSettings = [
  {
    name: 'optimism',
    apiKey: process.env.OPTIMISM_API_KEY as string,
  },
  {
    name: 'matic',
    apiKey: process.env.MATIC_API_KEY as string,
  },
  {
    name: 'arbitrum',
    apiKey: process.env.ARBITRUM_API_KEY as string,
  },
];

export const basicNetworkSettings = [
  {
    name: 'optimism',
    url: 'https://mainnet.optimism.io',
  },
  {
    name: 'arbitrum',
    url: 'https://arb1.arbitrum.io/rpc',
  },
  {
    name: 'matic',
    url: 'https://polygon-rpc.com',
  },
  {
    name: 'fantom',
    url: 'https://rpc.ftm.tools',
  },
  {
    name: 'avalanche',
    url: 'https://api.avax.network/ext/bc/C/rpc',
  },
  {
    name: 'harmony',
    url: 'https://api.harmony.one',
  },
];

export const basicNetworkSettingsV2 = [
  {
    name: 'mainnet',
    url: 'https://eth-mainnet.public.blastapi.io',
  },
  {
    name: 'matic',
    url: 'https://polygon-rpc.com',
  },
  {
    name: 'avalanche',
    url: 'https://api.avax.network/ext/bc/C/rpc',
  },
];

export const roleNames = [
  'ASSET_LISTING_ADMIN',
  'BRIDGE',
  'DEFAULT_ADMIN',
  'EMERGENCY_ADMIN',
  'FLASH_BORROWER',
  'POOL_ADMIN',
  'RISK_ADMIN',
];

export const modifierNames = [
  'onlyOwner',
  'onlyFundsAdmin',
  'onlyEmissionManager',
];
export const modifierNamesV2 = [
  'onlyLendingPoolConfigurator',
  'onlyPoolAdmin',
  'onlyEmergencyAdmin',
  'onlyOwner',
  'onlyEmissionManager',
];

export const modifierNamesArc = [
  'onlyEthereumGovernanceExecutor',
  'onlyGuardian',
  'onlyPoolAdmin',
  'onlyEmergencyAdmin',
  'onlyOwner',
  'onlyAdmin',
  'onlyTimelock',
  'onlyPendingAdmin',
];

export const ACL_MANAGER_ADDRESS = '0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B';

export const poolAddressProviderRegistryAddress =
  '0x770ef9f4fe897e59daCc474EF11238303F9552b6';

export const rewardsControllerAddress =
  '0x929EC64c34a17401F460460D4B9390518E5B473e';

export const roleGrantedEventABI = [
  'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
];
export const roleRevokedEventABI = [
  'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
];
export const ownershipTransferedEventABI = [
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
];
export const newFundsAdminEventABI = [
  'event NewFundsAdmin(address indexed fundsAdmin)',
];

export const adminChangedEventABI = [
  'event AdminChanged(address previousAdmin, address newAdmin)',
];

export const configuratorAdminUpdatedEventABI = [
  'event ConfigurationAdminUpdated(address indexed newAddress)',
];

export const emergencyAdminUpdatedEventABI = [
  'event EmergencyAdminUpdated(address indexed newAddress)',
];

export const proxyContracts = new Map([
  [
    'optimism',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Optimism.COLLECTOR,
      },
    ],
  ],
  [
    'arbitrum',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Arbitrum.COLLECTOR,
      },
    ],
  ],
  [
    'matic',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Polygon.COLLECTOR,
      },
    ],
  ],
  [
    'fantom',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Fantom.COLLECTOR,
      },
    ],
  ],
  [
    'avalanche',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Avalanche.COLLECTOR,
      },
    ],
  ],
  [
    'harmony',
    [
      {
        contractName: 'RewardsController',
        address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
      },
      {
        contractName: 'Collector',
        address: AaveV3Harmony.COLLECTOR,
      },
    ],
  ],
]);

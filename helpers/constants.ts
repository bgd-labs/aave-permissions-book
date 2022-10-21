export const ZERO = 0;
export const ONE = 1;
export const TWO = 2;

export const networks = ["optimism", "matic", "arbitrum"];

export const roleNames = [
  "ASSET_LISTING_ADMIN_ROLE",
  "BRIDGE_ROLE",
  "DEFAULT_ADMIN_ROLE",
  "EMERGENCY_ADMIN_ROLE",
  "FLASH_BORROWER_ROLE",
  "POOL_ADMIN_ROLE",
  "RISK_ADMIN_ROLE",
];

export const modifierNames = ["onlyOwner", "onlyFundsAdmin"];
export const modifierNamesV2 = [
  "onlyPoolAdmin",
  "onlyEmergencyAdmin",
  "onlyOwner",
];

// same address for all networks
export const ACL_MANAGER_ADDRESS = "0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B";

export const collectorControllerAddresses = new Map<string, string>([
  ["optimism", "0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21"],
  ["matic", "0x73D435AFc15e35A9aC63B2a81B5AA54f974eadFe"],
  ["arbitrum", "0xC3301b30f4EcBfd59dE0d74e89690C1a70C6f21B"],
]);

export const collectorAddresses = new Map<string, string>([
  ["optimism", "0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf"],
  ["matic", "0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383"],
  ["arbitrum", "0x053D55f9B5AF8694c503EB288a1B7E552f590710"],
]);

export const roleGrantedEventABI = [
  "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
];
export const roleRevokedEventABI = [
  "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
];
export const ownershipTransferedEventABI = [
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
];
export const newFundsAdminEventABI = [
  "event NewFundsAdmin(address indexed fundsAdmin)",
];

export const configuratorAdminUpdatedEventABI = [
  "event ConfigurationAdminUpdated(address indexed newAddress)",
];

export const emergencyAdminUpdatedEventABI = [
  "event EmergencyAdminUpdated(address indexed newAddress)",
];

export const roleCodeMap = new Map<string, string>([
  [
    "0x19c860a63258efbd0ecb7d55c626237bf5c2044c26c073390b74f0c13c857433",
    "ASSET_LISTING_ADMIN_ROLE",
  ],
  [
    "0x08fb31c3e81624356c3314088aa971b73bcc82d22bc3e3b184b4593077ae3278",
    "BRIDGE_ROLE",
  ],
  [
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    "DEFAULT_ADMIN_ROLE",
  ],
  [
    "0x5c91514091af31f62f596a314af7d5be40146b2f2355969392f055e12e0982fb",
    "EMERGENCY_ADMIN_ROLE",
  ],
  [
    "0x939b8dfb57ecef2aea54a93a15e86768b9d4089f1ba61c245e6ec980695f4ca4",
    "FLASH_BORROWER_ROLE",
  ],
  [
    "0x12ad05bde78c5ab75238ce885307f96ecd482bb402ef831f99e7018a0f169b7b",
    "POOL_ADMIN_ROLE",
  ],
  [
    "0x8aa855a911518ecfbe5bc3088c8f3dda7badf130faaf8ace33fdc33828e18167",
    "RISK_ADMIN_ROLE",
  ],
]);

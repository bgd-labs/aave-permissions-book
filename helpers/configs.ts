import { ChainId } from '@aave/contract-helpers';
import dotenv from 'dotenv';
import {
  AaveGovernanceV2,
  AaveV2Avalanche,
  AaveV2Ethereum,
  AaveV2EthereumAMM,
  AaveV2EthereumArc,
  AaveV2Polygon,
  AaveV3Arbitrum,
  AaveV3Avalanche,
  AaveV3Ethereum,
  AaveV3Fantom,
  AaveV3Harmony,
  AaveV3Optimism,
  AaveV3Polygon,
} from '@bgd-labs/aave-address-book';
dotenv.config();

export type Modifier = {
  modifier: string;
  addresses: AddressInfo[];
  functions: string[];
};

export type ContractInfo = {
  address: string;
  modifiers: Modifier[];
  proxyAdmin?: string;
};

export type Contracts = Record<string, ContractInfo>;
export type AddressInfo = {
  address: string;
  owners: string[];
};
export type Roles = {
  latestBlockNumber: number;
  role: Record<string, string[]>;
};

export type PoolInfo = {
  roles?: Roles;
  contracts: Contracts;
};

export type Pool = Record<string, PoolInfo>;

export type FullPermissions = Record<string, Pool>;

export type PoolConfigs = {
  permissionsJson: string;
  addressBook: any;
  aclBlock?: number;
};
export type Network = {
  rpcUrl: string | undefined;
  explorer: string;
  pools: Record<string, PoolConfigs>;
};

export type NetworkConfigs = Record<string, Network>;

export type Function = {
  name: string;
  roles: string[];
};

export type PermissionsJson = {
  contract: string;
  proxyAdmin?: boolean;
  functions: Function[];
}[];

export enum Pools {
  V2 = 'V2',
  V3 = 'V3',
  AMM = 'AMM',
  ARC = 'ARC',
  GOV_V2 = 'GOV_V2',
}

export const networkConfigs: NetworkConfigs = {
  [ChainId.mainnet]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://etherscan.io',
    pools: {
      [Pools.V3]: {
        permissionsJson: './statics/functionsPermissionsV3.json',
        aclBlock: 16291117,
        addressBook: AaveV3Ethereum,
      },
      [Pools.GOV_V2]: {
        permissionsJson: './statics/functionsPermissionsGov.json',
        addressBook: AaveGovernanceV2,
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Ethereum,
      },
      [Pools.ARC]: {
        permissionsJson: './statics/functionsPermissionsARC.json',
        addressBook: AaveV2EthereumArc,
      },
      [Pools.AMM]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2EthereumAMM,
      },
    },
  },
  [ChainId.polygon]: {
    rpcUrl: process.env.RPC_POLYGON,
    explorer: 'https://polygonscan.com',
    pools: {
      [Pools.V3]: {
        aclBlock: 25824416,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Polygon,
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Polygon,
      },
    },
  },
  [ChainId.avalanche]: {
    rpcUrl: process.env.RPC_AVALANCHE,
    explorer: 'https://snowtrace.io',
    pools: {
      [Pools.V3]: {
        aclBlock: 11970456,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Avalanche,
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Avalanche,
      },
    },
  },
  [ChainId.optimism]: {
    rpcUrl: process.env.RPC_OPTIMISM,
    explorer: 'https://optimistic.etherscan.io',
    pools: {
      [Pools.V3]: {
        aclBlock: 4365546,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Optimism,
      },
    },
  },
  [ChainId.arbitrum_one]: {
    rpcUrl: process.env.RPC_ARBITRUM,
    explorer: 'https://arbiscan.io',
    pools: {
      [Pools.V3]: {
        aclBlock: 7740502,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Arbitrum,
      },
    },
  },
  [ChainId.fantom]: {
    rpcUrl: process.env.RPC_FANTOM,
    explorer: 'https://ftmscan.com',
    pools: {
      [Pools.V3]: {
        aclBlock: 33141475,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Fantom,
      },
    },
  },
  // [ChainId.harmony]: {
  //   rpcUrl: process.env.RPC_HARMONY,
  //   explorer: 'https://explorer.harmony.one',
  //   pools: {
  //     [Pools.V3]: {
  //       aclBlock: 23930307,
  //       permissionsJson: './statics/functionsPermissionsV3.json',
  //       addressBook: AaveV3Harmony,
  //     },
  //   },
  // },
};

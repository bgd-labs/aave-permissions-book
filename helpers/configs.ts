import { ChainId } from '@aave/contract-helpers';
import dotenv from 'dotenv';
dotenv.config();

export type Modifier = {
  modifier: string;
  address: string;
  functions: string[];
};

export type ContractInfo = {
  address: string;
  modifiers: Modifier[];
  proxyAdmin?: string;
};

export type ModifierTable = {
  address: string;
  contract: string;
  functions: string[];
};

export type Contracts = Record<string, ContractInfo>;

export type RoleInfo = {
  roleHash: string;
  adminAddress: string;
  blockNumber: number;
  tx: string;
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

export type Network = {
  rpcUrl: string | undefined;
  explorer: string;
  V3?: {
    aclBlock: number;
  };
};

export type NetworkConfigs = Record<string, Network>;

export enum Pools {
  V2 = 'V2',
  V3 = 'V3',
  AMM = 'AMM',
  ARC = 'ARC',
}
export const networkConfigs: NetworkConfigs = {
  [ChainId.mainnet]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://etherscan.io',
  },
  [ChainId.polygon]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://polygonscan.com',
    V3: {
      aclBlock: 25824416,
    },
  },
  [ChainId.avalanche]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://snowtrace.io',
    V3: {
      aclBlock: 11970456,
    },
  },
  [ChainId.optimism]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://optimistic.etherscan.io',
    V3: {
      aclBlock: 4365546,
    },
  },
  [ChainId.arbitrum_one]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://arbiscan.io',
    V3: {
      aclBlock: 7740502,
    },
  },
  [ChainId.fantom]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://ftmscan.com',
    V3: {
      aclBlock: 33141475,
    },
  },
  [ChainId.harmony]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://explorer.harmony.one',
    V3: {
      aclBlock: 23930307,
    },
  },
};

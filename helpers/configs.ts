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
};

export type Contracts = Record<string, ContractInfo>;

export type Pool = Record<string, Contracts>;

export type FullPermissions = Record<string, Pool>;

export type Network = {
  rpcUrl: string | undefined;
  explorer: string;
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
  },
  [ChainId.avalanche]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://snowtrace.io',
  },
  [ChainId.optimism]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://optimistic.etherscan.io',
  },
  [ChainId.arbitrum_one]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://arbiscan.io',
  },
  [ChainId.fantom]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://ftmscan.com',
  },
  [ChainId.harmony]: {
    rpcUrl: process.env.RPC_ETHEREUM,
    explorer: 'https://explorer.harmony.one',
  },
};

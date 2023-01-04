import { ChainId } from '@aave/contract-helpers';

export type Network = {
  rpcUrl: string | undefined;
  explorer: string;
};

export type NetworkConfigs = Record<string, Network>;

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

import { ChainId, getAlchemyRPC, getQuicknodeRpc, SupportedChainIds } from "@bgd-labs/toolbox";
import { env } from "process";
import { Chain, Client, createClient, http } from "viem";
import {
  arbitrum,
  avalanche,
  avalancheFuji,
  base,
  baseSepolia,
  bsc,
  celo,
  gnosis,
  linea,
  mainnet,
  mantle,
  metis,
  optimism,
  polygon,
  scroll,
  soneium,
  sonic,
  zksync,
} from 'viem/chains';

const rpcClients: Record<number, Client> = {};


const CHAIN_ID_CLIENT_MAP = {
  [ChainId.mainnet]: mainnet,
  [ChainId.arbitrum]: arbitrum,
  [ChainId.polygon]: polygon,
  [ChainId.optimism]: optimism,
  [ChainId.metis]: metis,
  [ChainId.base]: base,
  [ChainId.bnb]: bsc,
  [ChainId.avalanche]: avalanche,
  [ChainId.gnosis]: gnosis,
  [ChainId.scroll]: scroll,
  [ChainId.zksync]: zksync,
  [ChainId.base_sepolia]: baseSepolia,
  [ChainId.avalanche_fuji]: avalancheFuji,
  [ChainId.linea]: linea,
  [ChainId.sonic]: sonic,
  [ChainId.mantle]: mantle,
  [ChainId.celo]: celo,
  [ChainId.soneium]: soneium,
} as const satisfies Record<number, Chain>;

const getAlchemyRPCUrl = (chainId: SupportedChainIds) => {
  if (!env.ALCHEMY_API_KEY) {
    throw new Error('ALCHEMY_API_KEY is not set');
  }
  return getAlchemyRPC(chainId, env.ALCHEMY_API_KEY);
};

const getRpcUrls = (chainId: number): string[] => {
  const rpcs: string[] = [];

  let alchemyRpc: string | null = null;
  try {
    alchemyRpc = getAlchemyRPCUrl(chainId as SupportedChainIds);
  } catch (err) {
    // console.error('Error getting Alchemy RPC URL:', err);
  }
  let quickNodeRpc: string | null = null;
  try {
    quickNodeRpc = getQuickNodeRPCUrl(chainId as SupportedChainIds);
  } catch (err) {
    // console.error('Error getting QuickNode RPC URL:', err);
  }

  if (alchemyRpc) {
    rpcs.push(alchemyRpc);
  }

  if (quickNodeRpc) {
    rpcs.push(quickNodeRpc);
  }

  if (rpcs.length === 0) {
    throw new Error(`No RPC URL found for chainId ${chainId}`);
  }

  return rpcs;
};

const getBatchConfig = () => {
  return {
    multicall: {
      batchSize: 100,
    },
  } as const;
};

const getHttpConfig = () => {
  return {
    timeout: 30_000,
    batch: {
      batchSize: 50,
      wait: 100,
    },
  } as const;
};

const getQuickNodeRPCUrl = (chainId: SupportedChainIds) => {
  if (chainId === ChainId.avalanche || chainId === ChainId.metis) {
    return null;
  }
  if (!env.QUICKNODE_ENDPOINT_NAME || !env.QUICKNODE_TOKEN) {
    throw new Error('QUICKNODE_ENDPOINT_NAME or QUICKNODE_TOKEN is not set');
  }
  try {
    const url = getQuicknodeRpc(chainId, {
      quicknodeEndpointName: env.QUICKNODE_ENDPOINT_NAME,
      quicknodeToken: env.QUICKNODE_TOKEN,
    });
    return url;
  } catch (err) {
    // console.error('Error getting QuickNode RPC URL:', err);
    return null;
  }
};

export const getRPCClient = (chainId: number): Client => {
  if (!rpcClients[chainId]) {
    const rpcs = getRpcUrls(chainId);
    const chain =
      CHAIN_ID_CLIENT_MAP[chainId as keyof typeof CHAIN_ID_CLIENT_MAP];

    if (!chain) {
      throw new Error(`Unsupported chainId: ${chainId}`);
    }

    rpcClients[chainId] = createClient({
      batch: getBatchConfig(),
      chain,
      transport: http(rpcs[0], {
        timeout: getHttpConfig().timeout,
        batch: {
          batchSize: getHttpConfig().batch.batchSize,
          wait: getHttpConfig().batch.wait,
        },
      }),
    });
  }
  return rpcClients[chainId];
};

export const getRpcClientFromUrl = (url: string): Client => {
  return createClient({
    transport: http(url, {
      timeout: getHttpConfig().timeout,
    }),
  });
};
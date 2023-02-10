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
import { NetworkConfigs } from './types';
dotenv.config();

export enum Pools {
  V2 = 'V2',
  V3 = 'V3',
  AMM = 'AMM',
  ARC = 'ARC',
  GOV_V2 = 'GOV_V2',
  TENDERLY = 'TENDERLY',
}

export const networkConfigs: NetworkConfigs = {
  [ChainId.mainnet]: {
    rpcUrl: process.env.RPC_MAINNET,
    explorer: 'https://etherscan.io',
    pools: {
      [Pools.V3]: {
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
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
        permissionsJson: './statics/functionsPermissionsArc.json',
        addressBook: AaveV2EthereumArc,
      },
      [Pools.AMM]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2EthereumAMM,
      },
      // [Pools.TENDERLY]: {
      //   permissionsJson: './statics/functionsPermissionsV3.0.1.json',
      //   aclBlock: 16291117,
      //   addressBook: AaveV3Ethereum,
      //   tenderlyBlock: 16426887,
      //   tenderlyRpcUrl:
      //     'https://rpc.tenderly.co/fork/82b65f8e-69eb-4b07-b365-190fc84f63bb',
      // },
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
        permissionsJson: './statics/functionsPermissionsV2PoR.json',
        addressBook: AaveV2Avalanche,
      },
      [Pools.TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Avalanche,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/c527bb37-55a3-419f-a674-35ef3fcc03b8',
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

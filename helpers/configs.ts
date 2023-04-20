import { ChainId } from '@aave/contract-helpers';
import dotenv from 'dotenv';

import {
  AaveGovernanceV2,
  AaveSafetyModule,
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
  // AaveV3Metis,
} from '@bgd-labs/aave-address-book';
import { NetworkConfigs } from './types';
dotenv.config();

export enum Pools {
  V2 = 'V2',
  V3 = 'V3',
  V2_AMM = 'V2_AMM',
  V2_ARC = 'V2_ARC',
  V2_MISC = 'V2_MISC',
  GOV_V2 = 'GOV_V2',
  SAFETY_MODULE = 'SAFETY_MODULE',
  TENDERLY = 'TENDERLY',
}

export const networkConfigs: NetworkConfigs = {
  [ChainId.mainnet]: {
    rpcUrl: process.env.RPC_MAINNET,
    explorer: 'https://etherscan.io',
    addressesNames: {
      '0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633': 'Aave Guardian Ethereum',
      '0x23c155C1c1ecB18a86921Da29802292f1d282c68': 'Aave Arc DAO',
      '0x33B09130b035d6D7e57d76fEa0873d9545FA7557': 'Aave Arc Guardian',
      '0xB9062896ec3A615a4e4444DF183F0531a77218AE': 'Legacy Emergency Admin',
      '0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A': 'ParaSwap',
    },
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
      [Pools.V2_ARC]: {
        permissionsJson: './statics/functionsPermissionsArc.json',
        addressBook: AaveV2EthereumArc,
      },
      [Pools.V2_AMM]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2EthereumAMM,
      },
      [Pools.SAFETY_MODULE]: {
        permissionsJson: './statics/functionsPermissionsSafety.json',
        addressBook: AaveSafetyModule,
      },
      [Pools.V2_MISC]: {
        permissionsJson: './statics/functionsPermissionsV2Misc.json',
        addressBook: {},
        addresses: {
          LEND_TO_AAVE_MIGRATOR: '0x317625234562B1526Ea2FaC4030Ea499C5291de4',
          AAVE_MERKLE_DISTRIBUTOR: '0xa88c6D90eAe942291325f9ae3c66f3563B93FE10',
        },
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
    addressesNames: {
      '0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58': 'Aave Guardian Polygon',
      '0x46DF4eb6f7A3B0AdF526f6955b15d3fE02c618b7': 'ParaSwap',
      '0x2bB25175d9B0F8965780209EB558Cc3b56cA6d32':
        'Polygon v2 incentives admin',
    },
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
    addressesNames: {
      '0xa35b76E4935449E33C56aB24b23fcd3246f13470': 'Aave Guardian Avalanche',
      '0x01244E7842254e3FD229CD263472076B1439D1Cd':
        'Aave Guardian Avalanche (legacy)',
      '0x5CfCd7E6D055Ba4f7B998914336254aDE3F69f26':
        'Avalanche v2 incentives admin',
    },
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
      // [Pools.TENDERLY]: {
      //   permissionsJson: './statics/functionsPermissionsV2.json',
      //   addressBook: AaveV2Avalanche,
      //   tenderlyRpcUrl:
      //     'https://rpc.tenderly.co/fork/c527bb37-55a3-419f-a674-35ef3fcc03b8',
      // },
    },
  },
  [ChainId.optimism]: {
    rpcUrl: process.env.RPC_OPTIMISM,
    explorer: 'https://optimistic.etherscan.io',
    addressesNames: {
      '0xE50c8C619d05ff98b22Adf991F17602C774F785c': 'Aave Guardian Optimism',
    },
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
    addressesNames: {
      '0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb': 'Aave Guardian Arbitrum',
    },
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
    addressesNames: {
      '0x39CB97b105173b56b5a2b4b33AD25d6a50E6c949': 'Aave Guardian Fantom',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 33141475,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: AaveV3Fantom,
      },
    },
  },
  ['1088']: {
    // Metis
    rpcUrl: process.env.RPC_METIS,
    explorer: 'https://andromeda-explorer.metis.io',
    addressesNames: {
      '0xF6Db48C5968A9eBCB935786435530f28e32Cc501': 'Aave Guardian Metis',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 5405908,
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: {
          POOL_ADDRESSES_PROVIDER: '0x632bf4054334F263F49a7039Cce25f0294f3f667',
          POOL: '0xb4bcdE07701494925455967814BFFA7eD5B4d568',
          POOL_CONFIGURATOR: '0x311ACE634E6AbfFf83480B9Ba328a89503932258',
          ORACLE: '0x5859B57b919035D82ED2Dd3F1f708dB13302614e',
          AAVE_PROTOCOL_DATA_PROVIDER:
            '0xd530b9cffAaAFA5B3cD835e990942c9FDa10BD18',
          ACL_MANAGER: '0x153f7b80b68EB3f296fb420F8Be847b1933854c4',
          ACL_ADMIN: '0x8EC77963068474a45016938Deb95E603Ca82a029',
          COLLECTOR: '0x90dA620955B942613A6Fae754aE66F0C37a364e0',
          DEFAULT_INCENTIVES_CONTROLLER:
            '0xf33A80b8810bC56D574316ff17B91e1C06D6289D',
          DEFAULT_A_TOKEN_IMPL_REV_1:
            '0x2954c4494B3De43C69a38EfaE076507F31a385C5',
          DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1:
            '0xAF3CcbaA1E30B61235ead8E056E0F2B4B5A73851',
          DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1:
            '0x0B0c10cBD39D449F0FC6522E8eb1Cf734BD8daB7',
          EMISSION_MANAGER: '0x06010e7D435C5283467382dA9BdEf26fB6D4fA82',
          POOL_ADDRESSES_PROVIDER_REGISTRY:
            '0xb7a29601F1eEe75438D6Aa04969B124f6ED635Be',
          // WETH_GATEWAY: "0x76D3030728e52DEB8848d5613aBaDE88441cbc59", no gateway on metis
          // SWAP_COLLATERAL_ADAPTER: "0xBC2Ff189e0349Ca73D9b78c172FC2B40025abE2a", does not exist
          // RATES_FACTORY: "0x59ED955e3a34479F4a35dCBD794BA70D6319CFcC", not verified
          // LISTING_ENGINE: "0xb0A73671C97BAC9Ba899CD1a23604Fd2278cD02A", not verified
          WALLET_BALANCE_PROVIDER: '0x91b6C4ee40e6819Ea075712DB5A11459ded1b5fC',
          UI_POOL_DATA_PROVIDER: '0xFF3a3E8112Da865CA669E61257E6C21AF6D9F586',
          UI_INCENTIVE_DATA_PROVIDER:
            '0xB71eA83ee96246B3221bf7E8eaED737f126fc2AF',
        },
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

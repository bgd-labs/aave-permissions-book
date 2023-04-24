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
        aclBlock: 5405900,
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: {
          POOL_ADDRESSES_PROVIDER: '0xB9FABd7500B2C6781c35Dd48d54f81fc2299D7AF',
          POOL: '0x90df02551bB792286e8D4f13E0e357b4Bf1D6a57',
          POOL_CONFIGURATOR: '0x69FEE8F261E004453BE0800BC9039717528645A6',
          ORACLE: '0x38D36e85E47eA6ff0d18B0adF12E5fC8984A6f8e',
          AAVE_PROTOCOL_DATA_PROVIDER:
            '0x99411FC17Ad1B56f49719E3850B2CDcc0f9bBFd8',
          ACL_MANAGER: '0xcDCb65fc657B701a5100a12eFB663978E7e8fFB8',
          ACL_ADMIN: '0x982486bD81ECc9AD0CE830f72B19dfD22Fab07d5',
          COLLECTOR: '0xB5b64c7E00374e766272f8B442Cd261412D4b118',
          DEFAULT_INCENTIVES_CONTROLLER:
            '0x30C1b8F0490fa0908863d6Cbd2E36400b4310A6B',
          DEFAULT_A_TOKEN_IMPL_REV_1:
            '0x246405C70461f93513C74606815615c24c5C8C79',
          DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1:
            '0xE7fA271BD76FC9c6F2F968976E9f4f553256E02f',
          DEFAULT_STABLE_DEBT_TOKEN_IMPL_REV_1:
            '0x52aC2476Fc6F788B4c5A9B12Cfcb7fDB163955f4',
          EMISSION_MANAGER: '0xfDb2580A1ac4CDc67E4236738b28af59e2022Dd2',
          POOL_ADDRESSES_PROVIDER_REGISTRY:
            '0x9E7B73ffD9D2026F3ff4212c29E209E09C8A91F5',
          WALLET_BALANCE_PROVIDER: '0x1df710eb1E2FD9C21494aF2BFb1F210a4185885b',
          UI_POOL_DATA_PROVIDER: '0x7dd60bd8507fDC3d300d53427b7AE566701a7320',
          UI_INCENTIVE_DATA_PROVIDER:
            '0x3e7BC5EcE0f22DbB16c3e3EeA288a10A57d68927',
          L2_ENCODER: '0x9f3A1B399A9074eBA63Dc4fc274bE2A2b2d80cB9',
          RATES_FACTORY: '0x87Aaba7cf8e1F319d0E3402d68017171201dEcd5',
          LISTING_ENGINE: '0x857720ad258db0ACb180e76A5526c72CFCe6F8A7',
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

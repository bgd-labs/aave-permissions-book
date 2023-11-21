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
  AaveV3Metis,
  AaveV3Base,
  AaveV3Gnosis,
  GovernanceV3Ethereum,
  GovernanceV3Polygon,
  GovernanceV3Avalanche,
  GovernanceV3Optimism,
  GovernanceV3Arbitrum,
  GovernanceV3BNB,
  GovernanceV3Base,
  GovernanceV3Metis,
  GovernanceV3Gnosis,
  MiscEthereum,
  MiscGnosis,
  MiscArbitrum,
  MiscBase,
  MiscOptimism,
  MiscPolygon,
  MiscFantom,
  MiscMetis,
  MiscAvalanche,
} from '@bgd-labs/aave-address-book';
import { NetworkConfigs } from './types.js';
dotenv.config();

export enum Pools {
  V2 = 'V2',
  V3 = 'V3',
  V2_AMM = 'V2_AMM',
  V2_ARC = 'V2_ARC',
  V2_MISC = 'V2_MISC',
  V2_AMM_TENDERLY = 'V2_AMM_TENDERLY',
  V2_ARC_TENDERLY = 'V2_ARC_TENDERLY',
  V2_MISC_TENDERLY = 'V2_MISC_TENDERLY',
  GOV_V2 = 'GOV_V2',
  SAFETY_MODULE = 'SAFETY_MODULE',
  SAFETY_MODULE_TENDERLY = 'SAFETY_MODULE_TENDERLY',
  TENDERLY = 'TENDERLY',
  V2_TENDERLY = 'V2_TENDERLY',
  GHO = 'GHO',
  GHO_TENDERLY = 'GHO_TENDERLY',
  GOV_V2_TENDERLY = 'GOV_V2_TENDERLY',
}

export const ghoRoleNames = [
  'DEFAULT_ADMIN',
  'FACILITATOR_MANAGER_ROLE',
  'BUCKET_MANAGER_ROLE',
];

export const protocolRoleNames = [
  'ASSET_LISTING_ADMIN',
  'BRIDGE',
  'DEFAULT_ADMIN',
  'EMERGENCY_ADMIN',
  'FLASH_BORROWER',
  'POOL_ADMIN',
  'RISK_ADMIN',
];

export const getNetowkName: Record<string | number, string> = {
  1: 'Eth',
  100: 'Gno',
  137: 'Pol',
  43114: 'Avax',
  42161: 'Arb',
  250: 'FTM',
  10: 'Opt',
  1088: 'Met',
  56: 'BNB',
  8453: 'Bas',
};

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
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x00907f9921424583e7ffBfEdf84F92B7B2Be4977': 'GHO aToken',
      '0xb812d0944f8F581DfAA3a93Dda0d22EcEf51A9CF': 'BGD',
      '0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        governanceAddressBook: GovernanceV3Ethereum,
        aclBlock: 16291117,
        crossChainControllerBlock: 18090380,
        addressBook: { ...AaveV3Ethereum, ...MiscEthereum },
        addresses: {
          '0xDB8953194810b1942544fA528791278D458719D5': 'CCIPAdapter',
          '0x2a323be63e08E08536Fc3b5d8C6f24825e68895e': 'LayerZeroAdapter',
          '0x6Abb61beb5848B476d026C4934E8a6415e2E75a8': 'HyperLaneAdapter',
          '0xb13712De579E1f9943502FFCf72eab6ec348cF79':
            'PolygonAdapterEthereum',
        },
      },
      [Pools.GHO]: {
        permissionsJson: './statics/functionsPermissionsGHO.json',
        ghoBlock: 17698470,
        addressBook: AaveV3Ethereum,
      },
      [Pools.GHO_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsGHO.json',
        ghoBlock: 17698470,
        tenderlyBlock: 18621050,
        addressBook: AaveV3Ethereum,
        tenderlyBasePool: Pools.GHO,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.GOV_V2]: {
        permissionsJson: './statics/functionsPermissionsGov.json',
        addressBook: AaveGovernanceV2,
      },
      [Pools.GOV_V2_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsGov.json',
        addressBook: AaveGovernanceV2,
        tenderlyBasePool: Pools.GOV_V2,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Ethereum,
      },
      [Pools.V2_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Ethereum,
        tenderlyBasePool: Pools.V2,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.V2_ARC]: {
        permissionsJson: './statics/functionsPermissionsArc.json',
        addressBook: AaveV2EthereumArc,
      },
      [Pools.V2_ARC_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsArc.json',
        addressBook: AaveV2EthereumArc,
        tenderlyBasePool: Pools.V2_ARC,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.V2_AMM]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2EthereumAMM,
      },
      [Pools.V2_AMM_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2EthereumAMM,
        tenderlyBasePool: Pools.V2_AMM,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.SAFETY_MODULE]: {
        permissionsJson: './statics/functionsPermissionsSafety.json',
        addressBook: AaveSafetyModule,
      },
      [Pools.SAFETY_MODULE_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsSafety.json',
        addressBook: AaveSafetyModule,
        tenderlyBasePool: Pools.SAFETY_MODULE,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.V2_MISC]: {
        permissionsJson: './statics/functionsPermissionsV2Misc.json',
        addressBook: MiscEthereum,
        addresses: {
          LEND_TO_AAVE_MIGRATOR: '0x317625234562B1526Ea2FaC4030Ea499C5291de4',
          AAVE_MERKLE_DISTRIBUTOR: '0xa88c6D90eAe942291325f9ae3c66f3563B93FE10',
        },
      },
      [Pools.V2_MISC_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2Misc.json',
        addressBook: {},
        addresses: {
          LEND_TO_AAVE_MIGRATOR: '0x317625234562B1526Ea2FaC4030Ea499C5291de4',
          AAVE_MERKLE_DISTRIBUTOR: '0xa88c6D90eAe942291325f9ae3c66f3563B93FE10',
        },
        tenderlyBasePool: Pools.V2_MISC_TENDERLY,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
      [Pools.TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        governanceAddressBook: GovernanceV3Ethereum,
        aclBlock: 16291117,
        crossChainControllerBlock: 17684650,
        addressBook: { ...AaveV3Ethereum, ...MiscEthereum },
        tenderlyBasePool: Pools.V3,
        tenderlyBlock: 18621050,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/7a4e0387-8e8d-414a-b9b0-8832df3e2bb9',
      },
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
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0xbCEB4f363f2666E2E8E430806F37e97C405c130b': 'BGD',
      '0x2C40FB1ACe63084fc0bB95F83C31B5854C6C4cB5': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 25824416,
        crossChainControllerBlock: 45029910,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Polygon, ...MiscPolygon },
        governanceAddressBook: GovernanceV3Polygon,
        addresses: {
          '0x95Fa2c817169E26956AB8795c84a225b55d7db5B': 'CCIPAdapter',
          '0xDA4B6024aA06f7565BBcAaD9B8bE24C3c229AAb5': 'LayerZeroAdapter',
          '0x3c25b96fF62D21E90556869272a277eE2E229747': 'HyperLaneAdapter',
          '0xb13712De579E1f9943502FFCf72eab6ec348cF79': 'PolygonAdapterPolygon',
        },
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Polygon,
      },
      [Pools.V2_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2.json',
        addressBook: AaveV2Polygon,
        tenderlyBasePool: Pools.V2,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/5449aa29-b708-4891-8a7b-1dee042ae261',
      },
      [Pools.TENDERLY]: {
        aclBlock: 25824416,
        crossChainControllerBlock: 45029910,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { AaveV3Polygon, ...MiscPolygon },
        governanceAddressBook: GovernanceV3Polygon,
        tenderlyBasePool: Pools.V3,
        tenderlyBlock: 50217190,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/5449aa29-b708-4891-8a7b-1dee042ae261',
      },
    },
  },
  ['56']: {
    rpcUrl: process.env.RPC_BINANCE,
    explorer: 'https://bscscan.com',
    addressesNames: {
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 31558150, // update with updated acl when deployed
        crossChainControllerBlock: 31558150,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: {},
        governanceAddressBook: GovernanceV3BNB,
        addresses: {
          '0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf': 'CCIPAdapter',
          '0xFF1137243698CaA18EE364Cc966CF0e02A4e6327': 'LayerZeroAdapter',
          '0x118DFD5418890c0332042ab05173Db4A2C1d283c': 'HyperLaneAdapter',
        },
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
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x3DBA1c4094BC0eE4772A05180B7E0c2F1cFD9c36': 'BGD',
      '0xCa66149425E7DC8f81276F6D80C4b486B9503D1a': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 11970456,
        crossChainControllerBlock: 32549880,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Avalanche, ...MiscAvalanche },
        governanceAddressBook: GovernanceV3Avalanche,
        addresses: {
          '0x3F006299eC88985c18E6e885EeA29A49eC579882': 'CCIPAdapter',
          '0xf41193E25408F652AF878c47E4401A01B5E4B682': 'LayerZeroAdapter',
          '0xa198Fac58E02A5C5F8F7e877895d50cFa9ad1E04': 'HyperLaneAdapter',
        },
      },
      [Pools.V2]: {
        permissionsJson: './statics/functionsPermissionsV2PoR.json',
        addressBook: AaveV2Avalanche,
      },
      [Pools.V2_TENDERLY]: {
        permissionsJson: './statics/functionsPermissionsV2PoR.json',
        addressBook: AaveV2Avalanche,
        tenderlyBasePool: Pools.V2,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/e323cdc4-0414-4572-8e8c-1311615881ba',
      },
      [Pools.TENDERLY]: {
        aclBlock: 11970456,
        crossChainControllerBlock: 32549880,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Avalanche, ...MiscAvalanche },
        governanceAddressBook: GovernanceV3Avalanche,
        tenderlyBasePool: Pools.V3,
        tenderlyBlock: 37792432,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/e323cdc4-0414-4572-8e8c-1311615881ba',
      },
    },
  },
  [ChainId.optimism]: {
    rpcUrl: process.env.RPC_OPTIMISM,
    explorer: 'https://optimistic.etherscan.io',
    addressesNames: {
      '0xE50c8C619d05ff98b22Adf991F17602C774F785c': 'Aave Guardian Optimism',
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x3A800fbDeAC82a4d9c68A9FA0a315e095129CDBF': 'BGD',
      '0xCb86256A994f0c505c5e15c75BF85fdFEa0F2a56': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 4365546,
        crossChainControllerBlock: 106996150,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Optimism, ...MiscOptimism },
        governanceAddressBook: GovernanceV3Optimism,
        addresses: {
          '0x81d32B36380e6266e1BDd490eAC56cdB300afBe0': 'OpAdapter',
        },
      },
      // [Pools.TENDERLY]: {
      //   aclBlock: 4365546,
      //   crossChainControllerBlock: 106996150,
      //   crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
      //   permissionsJson: './statics/functionsPermissionsV3.json',
      //   addressBook: { ...AaveV3Optimism, ...MiscOptimism },
      //   governanceAddressBook: GovernanceV3Optimism,
      //   tenderlyBasePool: Pools.V3,
      //   tenderlyBlock: 111367654,
      //   tenderlyRpcUrl:
      //     'https://rpc.tenderly.co/fork/91065bd8-4d24-4539-a87b-589f9ce45154',
      // },
    },
  },
  [ChainId.arbitrum_one]: {
    rpcUrl: process.env.RPC_ARBITRUM,
    explorer: 'https://arbiscan.io',
    addressesNames: {
      '0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb': 'Aave Guardian Arbitrum',
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959': 'BGD',
      '0x3Be327F22eB4BD8042e6944073b8826dCf357Aa2': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 7740502,
        crossChainControllerBlock: 112113800,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Arbitrum, ...MiscArbitrum },
        governanceAddressBook: GovernanceV3Arbitrum,
        addresses: {
          '0x3829943c53F2d00e20B58475aF19716724bF90Ba': 'ArbAdapter',
        },
      },
      // [Pools.TENDERLY]: {
      //   aclBlock: 7740502,
      //   crossChainControllerBlock: 112113800,
      //   crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
      //   permissionsJson: './statics/functionsPermissionsV3.json',
      //   addressBook: { ...AaveV3Arbitrum, ...MiscArbitrum },
      //   governanceAddressBook: GovernanceV3Arbitrum,
      //   tenderlyBasePool: Pools.V3,
      //   tenderlyBlock: 144223807,
      //   tenderlyRpcUrl:
      //     'https://rpc.tenderly.co/fork/df2da112-679c-41b5-933d-d34b9e864d34',
      // },
    },
  },
  [ChainId.fantom]: {
    rpcUrl: process.env.RPC_FANTOM,
    explorer: 'https://ftmscan.com',
    addressesNames: {
      '0x39CB97b105173b56b5a2b4b33AD25d6a50E6c949': 'Aave Guardian Fantom',
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 33141475,
        permissionsJson: './statics/functionsPermissionsV3.json',
        addressBook: { ...AaveV3Fantom, ...MiscFantom },
      },
    },
  },
  [ChainId.metis_andromeda]: {
    rpcUrl: process.env.RPC_METIS,
    explorer: 'https://andromeda-explorer.metis.io',
    addressesNames: {
      '0xF6Db48C5968A9eBCB935786435530f28e32Cc501': 'Aave Guardian Metis',
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x9853589F951D724D9f7c6724E0fD63F9d888C429': 'BGD',
      '0x0f547846920C34E70FBE4F3d87E46452a3FeAFfa': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 5405900,
        crossChainControllerBlock: 8526247,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: { ...AaveV3Metis, ...MiscMetis },
        governanceAddressBook: GovernanceV3Metis,
        addresses: {
          '0x746c675dAB49Bcd5BB9Dc85161f2d7Eb435009bf': 'MetisAdapter',
        },
      },
    },
  },
  ['8453']: {
    rpcUrl: process.env.RPC_BASE,
    explorer: 'https://basescan.org',
    addressesNames: {
      '0x9e10C0A1Eb8FF6a0AaA53a62C7a338f35D7D9a2A': 'Aave Guardian Base',
      '0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6': 'Deployer',
      '0x7FDA7C3528ad8f05e62148a700D456898b55f8d2': 'BGD',
      '0xfbeB4AcB31340bA4de9C87B11dfBf7e2bc8C0bF1': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 2357130,
        crossChainControllerBlock: 3686170,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: { ...AaveV3Base, ...MiscBase },
        governanceAddressBook: GovernanceV3Base,
        addresses: {
          '0x7b62461a3570c6AC8a9f8330421576e417B71EE7': 'CBaseAdapter',
        },
      },
      [Pools.TENDERLY]: {
        aclBlock: 2357130,
        crossChainControllerBlock: 3686170,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: { ...AaveV3Base, ...MiscBase },
        governanceAddressBook: GovernanceV3Base,
        tenderlyBasePool: Pools.V3,
        tenderlyBlock: 6895698,
        tenderlyRpcUrl:
          'https://rpc.tenderly.co/fork/a4a0e4e9-3d3f-481c-97b5-e49ff006279c',
      },
    },
  },
  ['100']: {
    rpcUrl: process.env.RPC_GNOSIS,
    explorer: 'https://gnosisscan.io/',
    addressesNames: {
      '0xF163b8698821cefbD33Cf449764d69Ea445cE23D': 'Aave Guardian Gnosis',
      '0xcb8a3E864D12190eD2b03cbA0833b15f2c314Ed8': 'BGD',
      '0xF221B08dD10e0C68D74F035764931Baa3b030481': 'Risk Council',
    },
    pools: {
      [Pools.V3]: {
        aclBlock: 30293056,
        crossChainControllerBlock: 30373982,
        crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
        permissionsJson: './statics/functionsPermissionsV3.0.1.json',
        addressBook: { ...AaveV3Gnosis, ...MiscGnosis },
        governanceAddressBook: GovernanceV3Gnosis,
        addresses: {
          '0x7b62461a3570c6AC8a9f8330421576e417B71EE7': 'LayerZeroAdapter',
          '0x4A4c73d563395ad827511F70097d4Ef82E653805': 'HyperLaneAdapter',
          '0x889c0cc3283DB588A34E89Ad1E8F25B0fc827b4b': 'GnosisChainAdapter',
        },
      },
      // [Pools.TENDERLY]: {
      //   aclBlock: 30293056,
      //   crossChainControllerBlock: 30373982,
      //   crossChainPermissionsJson: './statics/functionsPermissionsGovV3.json',
      //   permissionsJson: './statics/functionsPermissionsV3.0.1.json',
      //   addressBook: { ...AaveV3Gnosis, ...MiscGnosis },
      //   governanceAddressBook: GovernanceV3Gnosis,
      //   tenderlyBlock: 30706655,
      //   tenderlyRpcUrl:
      //     'https://rpc.tenderly.co/fork/7848428f-9ece-44f6-8958-0eae971c822b',
      // },
    },
  },
};

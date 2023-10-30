import { Pools } from './configs.js';

export type ContractsByAddress = Record<string, string>;
export type PoolGuardians = Record<string, string[]>;

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
export type GovV3 = {
  latestCCCBlockNumber: number;
  contracts: Record<string, ContractInfo>;
  senders: string[];
  // bridgeAdapters: string[];
};
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
  govV3?: GovV3;
};

export type Pool = Record<string, PoolInfo>;

export type FullPermissions = Record<string, Pool>;

export type PoolConfigs = {
  permissionsJson: string;
  crossChainPermissionsJson?: string;
  addressBook: any;
  aclBlock?: number;
  crossChainControllerBlock?: number;
  governanceAddressBook?: any;

  tenderlyBlock?: number;
  tenderlyRpcUrl?: string;
  tenderlyBasePool?: string;

  ghoBlock?: number;

  addresses?: Record<string, string>;
};
export type Network = {
  rpcUrl: string | undefined;
  explorer: string;
  pools: Record<string, PoolConfigs>;
  addressesNames?: Record<string, string>;
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

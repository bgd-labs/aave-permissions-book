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

  tenderlyBlock?: number;
  tenderlyRpcUrl?: string;

  addresses?: Record<string, string>;
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

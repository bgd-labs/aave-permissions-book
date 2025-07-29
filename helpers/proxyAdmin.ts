import { Address, Client, getAddress, getContract } from 'viem';
import { transparentProxyFactoryABI } from '../abis/transparentProxyFactory.js';
import { getStorageAt } from 'viem/actions';

const PROXY_ADMIN_SLOT =
  '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103';

export const getProxyAdmin = async (
  contract: string,
  provider: Client,
): Promise<string> => {
  const longAdmin = await getStorageAt(provider, { address: getAddress(contract), slot: PROXY_ADMIN_SLOT }) as Address;
  return longAdmin.slice(0, 2) + longAdmin.slice(26, longAdmin.length);
};

export const getProxyAdminFromFactory = async (
  proxyFactory: string,
  contractWithAdmin: Address,
  provider: Client,
): Promise<string> => {
  const proxyFactoryContract = getContract({ address: getAddress(proxyFactory), abi: transparentProxyFactoryABI, client: provider });

  const proxyAdmin = await proxyFactoryContract.read.getProxyAdmin([contractWithAdmin]) as Address;
  return proxyAdmin;
};
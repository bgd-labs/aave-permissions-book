import { ethers, providers } from 'ethers';
import { transparentProxyFactoryABI } from '../abis/transparentProxyFactory.js';

const PROXY_ADMIN_SLOT =
  '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103';

export const getProxyAdmin = async (
  contract: string,
  provider: providers.Provider,
): Promise<string> => {
  const longAdmin = await provider.getStorageAt(contract, PROXY_ADMIN_SLOT);
  return longAdmin.slice(0, 2) + longAdmin.slice(26, longAdmin.length);
};

export const getProxyAdminFromFactory = async (
  proxyFactory: string,
  contractWithAdmin: string,
  provider: providers.Provider,
): Promise<string> => {
  const proxyFactoryContract = new ethers.Contract(
    proxyFactory,
    transparentProxyFactoryABI,
    provider,
  );

  const proxyAdmin = await proxyFactoryContract.getProxyAdmin(contractWithAdmin);
  return proxyAdmin;
};
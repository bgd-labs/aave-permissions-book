import { providers } from 'ethers';

const PROXY_ADMIN_SLOT =
  '0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103';

export const getProxyAdmin = async (
  contract: string,
  provider: providers.Provider,
): Promise<string> => {
  const longAdmin = await provider.getStorageAt(contract, PROXY_ADMIN_SLOT);
  return longAdmin.slice(0, 2) + longAdmin.slice(26, longAdmin.length);
};

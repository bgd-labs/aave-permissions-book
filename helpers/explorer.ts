import { ethers } from 'ethers';
import { networkConfigs } from './configs.js';

export const explorerAddressUrlComposer = (
  address: string,
  chainId: string, //ChainId,
): string | null => {
  if (ethers.utils.isAddress(address)) {
    return `${networkConfigs[chainId].explorer}/address/${address}`;
  }

  return null;
};

export const explorerTxUrlComposer = (
  transaction: string,
  chainId: typeof ChainId,
): string => {
  return `${networkConfigs[chainId].explorer}/tx/${transaction}`;
};

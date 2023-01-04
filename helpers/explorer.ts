import { ethers } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { networkConfigs } from './configs';

export const explorerAddressUrlComposer = (
  address: string,
  chainId: ChainId,
): string | null => {
  if (ethers.utils.isAddress(address)) {
    return `${networkConfigs[chainId].explorer}/address/${address}`;
  }

  return null;
};

export const explorerTxUrlComposer = (
  transaction: string,
  chainId: ChainId,
): string => {
  return `${networkConfigs[chainId].explorer}/tx/${transaction}`;
};

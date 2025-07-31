import { isAddress } from 'viem';
import { networkConfigs } from './configs.js';
import { ChainId } from '@bgd-labs/toolbox';

export const explorerAddressUrlComposer = (
  address: string,
  chainId: typeof ChainId,
): string | null => {
  if (isAddress(address)) {
    return `${networkConfigs[Number(chainId)].explorer}/address/${address}`;
  }

  return null;
};

export const explorerTxUrlComposer = (
  transaction: string,
  chainId: typeof ChainId,
): string => {
  return `${networkConfigs[Number(chainId)].explorer}/tx/${transaction}`;
};

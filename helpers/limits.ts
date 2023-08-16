import { ChainId } from '@aave/contract-helpers';

export const getLimit = (chainId: ChainId | string) => {
  let limit = undefined;

  if (chainId === ChainId.avalanche) {
    limit = 3000;
  } else if (chainId === ChainId.harmony) {
    limit = 1000;
  } else if (chainId === ChainId.fantom) {
    limit = 99999;
  } else if (chainId === ChainId.metis_andromeda) {
    limit = 3000;
  } else if (Number(chainId) === 8453) {
    limit = 3000;
  }

  return limit;
};

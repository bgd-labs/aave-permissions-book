import { ChainId } from "@bgd-labs/toolbox";


export const getLimit = (chainId: ChainId | string) => {
  let limit = undefined;

  // if (chainId === ChainId.avalanche) {
  //   limit = 3000;
  // }
  if (chainId === ChainId.sonic) {
    limit = 9999;
  } else if (chainId === ChainId.celo) {
    limit = 9999;
  } else if (chainId === ChainId.linea) {
    limit = 9999;
  } else if (chainId === ChainId.scroll) {
    limit = 9999;
  } else if (chainId === ChainId.gnosis) {
    limit = 9999;
  } else if (chainId === ChainId.metis) {
    limit = 9999;
  } else if (chainId === ChainId.avalanche) {
    limit = 9999;
  } else if (chainId === ChainId.bnb) {
    limit = 9999;
  }


  return limit;
};

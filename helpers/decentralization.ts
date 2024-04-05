import { ContractInfo, PoolInfo } from './types.js';

export type Decentralization = {
  decentralizationPoints: number;
  upgradeable: boolean;
};
export const getLevelOfDecentralization = (
  contract: ContractInfo,
  poolInfo: PoolInfo,
): Decentralization => {
  let decentralizationPoints = 5;
  let upgradeable = false;
  // check if it has proxy admin (means upgradeable)
  if (contract.proxyAdmin) {
    decentralizationPoints -= 1;
    upgradeable = true;
    //  - check if proxy admin is controlled by multisig

    //      - remove 1 point if yes
    //      - if not check if contract is owned by gov
    //          - remove 1 point if multisig
  } else {
    //   - check if its ownable
    //       - remove 1 point if owner is multisig
  }

  return { decentralizationPoints, upgradeable };
};

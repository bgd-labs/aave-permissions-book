import { ContractInfo, Contracts, GovV3, PoolInfo } from './types.js';

export type Decentralization = {
  decentralizationPoints: number;
  upgradeable: boolean;
  controlledBy: Controller;
};

export enum Controller {
  NONE,
  GOV_V3,
  MULTI_SIG,
  EOA,
}
export const getLevelOfDecentralization = (
  contract: ContractInfo,
  poolInfo: Contracts,
  govInfo: Contracts,
): Decentralization => {
  let decentralizationPoints = 5;
  let upgradeable = false;
  let controlledBy = Controller.NONE;

  // check if it has proxy admin (means upgradeable)
  if (contract.proxyAdmin) {
    decentralizationPoints -= 1;
    upgradeable = true;
    //  - check if proxy admin is controlled by multisig
    let proxyOwnership = isOwnedAndByWho(
      contract.proxyAdmin,
      poolInfo,
      govInfo,
    );
    if (proxyOwnership.owned) {
      if (proxyOwnership.ownedBy === Controller.MULTI_SIG) {
        decentralizationPoints -= 1;
      } else if (proxyOwnership.ownedBy === Controller.EOA) {
        decentralizationPoints -= 2;
      }
    }
  } else {
    let ownership = isOwnedAndByWho(contract.address, poolInfo, govInfo);
    if (ownership.owned) {
      controlledBy = ownership.ownedBy;
      if (ownership.ownedBy === Controller.MULTI_SIG) {
        decentralizationPoints -= 1;
      } else if (ownership.ownedBy === Controller.EOA) {
        decentralizationPoints -= 2;
      }
    }
  }

  return { decentralizationPoints, upgradeable, controlledBy };
};

const isOwnedByGov = (
  address: string,
  govInfo: Contracts,
  initialAddress: string,
): boolean => {
  for (let contractName of Object.keys(govInfo)) {
    const contract = govInfo[contractName];
    if (contract.address === address) {
      contract.modifiers.forEach((modifierInfo) => {
        if (modifierInfo.modifier === 'onlyOwner') {
          if (modifierInfo.addresses[0].owners.length > 0) {
            return false;
          } else {
            if (modifierInfo.addresses[0].address === initialAddress) {
              console.log('----');
              return true;
            } else {
              console.log('++++');
              return isOwnedByGov(
                modifierInfo.addresses[0].address,
                govInfo,
                initialAddress,
              );
            }
          }
        }
      });
    } else {
      console.log('=====');
    }
  }

  return false;
};

const isOwnedAndByWho = (
  address: string,
  poolInfo: Contracts,
  govInfo: Contracts,
): { owned: boolean; ownedBy: Controller } => {
  for (let contractName of Object.keys(poolInfo)) {
    const contract = poolInfo[contractName];
    if (contract.address === address) {
      contract.modifiers.forEach((modifierInfo) => {
        if (modifierInfo.modifier === 'onlyOwner') {
          if (modifierInfo.addresses[0].owners.length > 0) {
            return { owned: true, ownedBy: Controller.MULTI_SIG };
          } else {
            const ownedByGov = isOwnedByGov(
              modifierInfo.addresses[0].address,
              govInfo,
              modifierInfo.addresses[0].address,
            );
            console.log('controlled: ', ownedByGov);
            if (ownedByGov) {
              return { owned: true, ownedBy: Controller.GOV_V3 };
            } else {
              return { owned: true, ownedBy: Controller.EOA };
            }
          }
        }
      });
    }
  }

  return { owned: false, ownedBy: Controller.EOA };
};

import { ContractInfo, Contracts, GovV3, PoolInfo } from './types.js';

export type Decentralization = {
  decentralizationPoints: number;
  upgradeable: boolean;
  controlledBy: Controller;
};

export enum Controller {
  NONE = 'Not owned',
  GOV_V3 = 'Gov V3',
  MULTI_SIG = 'Multisg',
  EOA = 'EOA',
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
    let proxyOwnership = isOwnedAndByWho(
      contract.proxyAdmin,
      poolInfo,
      govInfo,
    );

    if (proxyOwnership.owned) {
      controlledBy = proxyOwnership.ownedBy;
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
  let ownerFound = false;
  for (let contractName of Object.keys(govInfo)) {
    const contract = govInfo[contractName];
    if (contract.address.toLowerCase() === address.toLowerCase()) {
      contract.modifiers.forEach((modifierInfo) => {
        if (modifierInfo.modifier === 'onlyOwner') {
          if (modifierInfo.addresses[0].owners.length > 0) {
            ownerFound = false;
          } else {
            if (
              modifierInfo.addresses[0].address.toLowerCase() ===
              initialAddress.toLowerCase()
            ) {
              ownerFound = true;
            } else {
              let owned = isOwnedByGov(
                modifierInfo.addresses[0].address,
                govInfo,
                initialAddress,
              );
              ownerFound = owned;
            }
          }
        }
      });
    }
  }

  return ownerFound;
};

const isOwnedAndByWho = (
  address: string,
  poolInfo: Contracts,
  govInfo: Contracts,
): { owned: boolean; ownedBy: Controller } => {
  let ownerInfo = { owned: false, ownedBy: Controller.EOA };
  for (let contractName of Object.keys(poolInfo)) {
    const contract = poolInfo[contractName];
    if (contract.address?.toLowerCase() === address.toLowerCase()) {
      contract.modifiers.forEach((modifierInfo) => {
        if (modifierInfo.modifier === 'onlyOwner') {
          if (modifierInfo.addresses[0].owners.length > 0) {
            ownerInfo = { owned: true, ownedBy: Controller.MULTI_SIG };
          } else {
            const ownedByGov = isOwnedByGov(
              modifierInfo.addresses[0].address,
              govInfo,
              modifierInfo.addresses[0].address,
            );
            if (ownedByGov) {
              ownerInfo = { owned: true, ownedBy: Controller.GOV_V3 };
            } else {
              ownerInfo = { owned: true, ownedBy: Controller.EOA };
            }
          }
        }
      });
    }
  }

  return ownerInfo;
};

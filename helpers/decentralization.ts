import { ContractInfo, Contracts, GovV3, PoolInfo } from './types.js';
import actionsConfig from '../statics/actionsConfig.json' assert { type: 'json' };

export type Decentralization = {
  upgradeable: boolean;
  ownedBy: Controller;
};

export enum Controller {
  NONE = 'Not owned',
  GOV_V3 = 'Governance',
  MULTI_SIG = 'Multi-sig',
  EOA = 'External Contract',
}

export const getActionExecutors = (poolInfo: Contracts, govInfo: Contracts) => {
  const actionsObject: Record<string, Set<string>> = {};
  Object.keys(actionsConfig).forEach((action) => {
    actionsObject[action] = new Set<string>();
    if (
      action === 'updateReserveBorrowSettings' ||
      action === 'configureCollateral' ||
      action === 'updateReserveSettings' ||
      action === 'reserveUpgradeability'
    ) {
      actionsObject[action].add(Controller.GOV_V3);
    } else {
      for (let contractName of Object.keys(poolInfo)) {
        const contract = poolInfo[contractName];
        // search all modifiers
        contract.modifiers.forEach((modifier) => {
          if (modifier.functions === undefined) {
            console.log(contractName);
            console.log('modifier: ', modifier);
          }
          const hasFunction = modifier.functions.some((functionName: string) =>
            // @ts-ignore
            actionsConfig[action].includes(functionName),
          );
          if (hasFunction) {
            modifier.addresses.map((addressInfo) => {
              if (addressInfo.owners.length > 0) {
                actionsObject[action].add(Controller.MULTI_SIG);
              } else {
                const ownedInfo = isAdministeredAndByWho(
                  addressInfo.address,
                  poolInfo,
                  govInfo,
                );
                if (ownedInfo.owned) {
                  actionsObject[action].add(ownedInfo.ownedBy);
                } else {
                  actionsObject[action].add(Controller.EOA);
                }
              }
            });
          }
        });
      }
    }
  });

  return actionsObject;
};

export const getLevelOfDecentralization = (
  contract: ContractInfo,
  poolInfo: Contracts,
  govInfo: Contracts,
): Decentralization => {
  let upgradeable = false;
  let ownedBy = Controller.NONE;

  // check if it has proxy admin (means upgradeable)
  if (contract.proxyAdmin) {
    upgradeable = true;
    let proxyOwnership = isOwnedAndByWho(
      contract.proxyAdmin,
      poolInfo,
      govInfo,
    );

    if (proxyOwnership.owned) {
      ownedBy = proxyOwnership.ownedBy;
    }
  } else {
    let ownership = isOwnedAndByWho(contract.address, poolInfo, govInfo);
    if (ownership.owned) {
      ownedBy = ownership.ownedBy;
    }
  }

  return { upgradeable, ownedBy };
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
        if (
          modifierInfo.modifier === 'onlyOwner' ||
          modifierInfo.modifier === 'onlyEthereumGovernanceExecutor'
        ) {
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
                address,
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
      if (contract.proxyAdmin) {
        ownerInfo = isOwnedAndByWho(contract.proxyAdmin, poolInfo, govInfo);
      } else {
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
  }

  return ownerInfo;
};

const isAdministeredAndByWho = (
  address: string,
  poolInfo: Contracts,
  govInfo: Contracts,
): { owned: boolean; ownedBy: Controller } => {
  let ownerInfo = { owned: false, ownedBy: Controller.EOA };
  for (let contractName of Object.keys(poolInfo)) {
    const contract = poolInfo[contractName];
    if (contract.address?.toLowerCase() === address.toLowerCase()) {
      if (contract.proxyAdmin) {
        ownerInfo = isOwnedAndByWho(contract.proxyAdmin, poolInfo, govInfo);
      } else {
        contract.modifiers.forEach((modifierInfo) => {
          if (
            modifierInfo.modifier === 'onlyOwner' ||
            modifierInfo.modifier === 'onlyEthereumGovernanceExecutor' ||
            (modifierInfo.modifier === 'onlyRiskCouncil' &&
              contractName !== 'GhoStewardV2') ||
            modifierInfo.modifier === 'onlyEmergencyAdmin' ||
            modifierInfo.modifier === 'onlyDefaultAdmin'
          ) {
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
  }

  return ownerInfo;
};

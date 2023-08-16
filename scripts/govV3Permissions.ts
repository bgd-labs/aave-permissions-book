import { Contracts, PermissionsJson } from '../helpers/types.js';
import { ethers, providers, constants } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners } from '../helpers/guardian.js';
import AaveGovernanceV3ABI from '../abis/AaveGovernanceV3.json';
import PayloadsController from '../abis/PayloadsController.json';
import VotingMachine from '../abis/VotingMachine.json';
import VotingPortal from '../abis/VotingPortal.json';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import CrossChainController from '../abis/CrossChainController.json';

export const resolveGovV3Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  chainId: ChainId | number,
  senders: string[],
) => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  if (addressBook.GOVERNANCE !== constants.AddressZero) {
    const govContract = new ethers.Contract(
      addressBook.GOVERNANCE,
      AaveGovernanceV3ABI,
      provider,
    );

    const govGuardian = await govContract.guardian();
    const govOwner = await govContract.owner();

    obj['AaveGovernanceV3'] = {
      address: addressBook.GOVERNANCE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: govOwner,
              owners: await getSafeOwners(provider, govOwner),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwner'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: govGuardian,
              owners: await getSafeOwners(provider, govGuardian),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyGuardian'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: govGuardian,
              owners: await getSafeOwners(provider, govGuardian),
            },
            {
              address: govOwner,
              owners: await getSafeOwners(provider, govOwner),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwnerOrGuardian'],
        },
      ],
    };
  }

  if (addressBook.PAYLOADS_CONTROLLER !== constants.AddressZero) {
    const pcContract = new ethers.Contract(
      addressBook.PAYLOADS_CONTROLLER,
      PayloadsController,
      provider,
    );

    const pcGuardian = await pcContract.guardian();
    const pcOwner = await pcContract.owner();
    const rescuer = await pcContract.whoCanRescue();
    obj['PayloadsController'] = {
      address: addressBook.PAYLOADS_CONTROLLER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: pcOwner,
              owners: await getSafeOwners(provider, pcOwner),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwner'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyGuardian'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
            },
            {
              address: pcOwner,
              owners: await getSafeOwners(provider, pcOwner),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwnerOrGuardian'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            {
              address: rescuer,
              owners: await getSafeOwners(provider, rescuer),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyRescueGuardian'],
        },
      ],
    };
  }
  if (addressBook.VOTING_MACHINE !== constants.AddressZero) {
    const vmContract = new ethers.Contract(
      addressBook.VOTING_MACHINE,
      VotingMachine,
      provider,
    );

    const owner = await vmContract.owner();
    obj['VotingMachine'] = {
      address: addressBook.VOTING_MACHINE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['VotingMachine']['onlyOwner'],
        },
      ],
    };
  }
  if (addressBook.VOTING_PORTAL_ETH_ETH !== constants.AddressZero) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_ETH,
      VotingPortal,
      provider,
    );

    const owner = await vpContract.owner();
    obj['VotingPortal_Eth_Eth'] = {
      address: addressBook.VOTING_PORTAL_ETH_ETH,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['VotingPortal']['onlyOwner'],
        },
      ],
    };
  }
  if (addressBook.VOTING_PORTAL_ETH_AVAX !== constants.AddressZero) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_AVAX,
      VotingPortal,
      provider,
    );

    const owner = await vpContract.owner();
    obj['VotingPortal_Eth_Avax'] = {
      address: addressBook.VOTING_PORTAL_ETH_AVAX,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['VotingPortal']['onlyOwner'],
        },
      ],
    };
  }
  if (addressBook.VOTING_PORTAL_ETH_POL !== constants.AddressZero) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_POL,
      VotingPortal,
      provider,
    );

    const owner = await vpContract.owner();
    obj['VotingPortal_Eth_Pol'] = {
      address: addressBook.VOTING_PORTAL_ETH_POL,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['VotingPortal']['onlyOwner'],
        },
      ],
    };
  }

  if (addressBook.EXECUTOR_LVL_1 !== constants.AddressZero) {
    const executorContract = new ethers.Contract(
      addressBook.EXECUTOR_LVL_1,
      onlyOwnerAbi,
      provider,
    );
    const owner = await executorContract.owner();
    obj['Executor_lvl1'] = {
      address: addressBook.EXECUTOR_LVL_1,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['Executor']['onlyOwner'],
        },
      ],
    };
  }

  if (addressBook.EXECUTOR_LVL_2 !== constants.AddressZero) {
    const executorContract = new ethers.Contract(
      addressBook.EXECUTOR_LVL_2,
      onlyOwnerAbi,
      provider,
    );
    const owner = await executorContract.owner();
    obj['Executor_lvl2'] = {
      address: addressBook.EXECUTOR_LVL_2,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['Executor']['onlyOwner'],
        },
      ],
    };
  }

  if (addressBook.CROSS_CHAIN_CONTROLLER !== constants.AddressZero) {
    const cccContract = new ethers.Contract(
      addressBook.CROSS_CHAIN_CONTROLLER,
      CrossChainController,
      provider,
    );
    const owner = await cccContract.owner();
    const guardian = await cccContract.guardian();
    const rescuer = await cccContract.whoCanRescue();
    const approvedBridges = await cccContract.getReceiverBridgeAdaptersByChain(
      chainId,
    );

    obj['CrossChainController'] = {
      address: addressBook.CROSS_CHAIN_CONTROLLER,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['CrossChainController']['onlyOwner'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
          ],
          functions: roles['CrossChainController']['onlyGuardian'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
            },
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['CrossChainController']['onlyOwnerOrGuardian'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            {
              address: rescuer,
              owners: await getSafeOwners(provider, rescuer),
            },
          ],
          functions: roles['CrossChainController']['onlyRescueGuardian'],
        },
        {
          modifier: 'onlyApprovedSenders',
          addresses: [
            ...senders.map((sender) => {
              return {
                address: sender,
                owners: [],
              };
            }),
          ],
          functions: roles['CrossChainController']['onlyApprovedSenders'],
        },
        {
          modifier: 'onlyApprovedBridges',
          addresses: [
            ...approvedBridges.map((approvedBridge: string) => {
              return {
                address: approvedBridge,
                owners: [],
              };
            }),
          ],
          functions: roles['CrossChainController']['onlyApprovedBridges'],
        },
      ],
    };
  }

  // add proxy admins
  const proxyAdminContracts: string[] = permissionsObject
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    if (obj[proxyAdminContracts[i]]) {
      obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
        obj[proxyAdminContracts[i]].address,
        provider,
      );
    }
  }

  return obj;
};

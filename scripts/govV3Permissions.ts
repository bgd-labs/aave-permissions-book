import { Contracts, PermissionsJson } from '../helpers/types.js';
import { ethers, providers, constants } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners } from '../helpers/guardian.js';
import {
  ICrossChainController_ABI,
  IGovernanceCore_ABI,
  IVotingPortal_ABI,
  IVotingMachineWithProofs_ABI,
  IPayloadsControllerCore_ABI,
  IWithGuardian_ABI,
  IOwnable_ABI,
  IRescuable_ABI,
} from '@bgd-labs/aave-address-book';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json' assert { type: 'json' };
import baseAdapter from '../abis/BaseAdapter.json' assert { type: 'json' };
import { AaveGovernanceV2 } from '@bgd-labs/aave-address-book';

export const resolveGovV3Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  chainId: ChainId | number,
  senders: string[],
  tenderly: boolean,
) => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  // only valid while 2.5 is active
  if (
    addressBook.GOVERNANCE &&
    addressBook.GOVERNANCE !== constants.AddressZero
  ) {
    const shortExecutor = AaveGovernanceV2.SHORT_EXECUTOR;

    obj['AaveGovernanceV3'] = {
      address: addressBook.GOVERNANCE,
      modifiers: [
        {
          modifier: 'onlyShortExecutor',
          addresses: [
            {
              address: AaveGovernanceV2.SHORT_EXECUTOR,
              owners: await getSafeOwners(
                provider,
                AaveGovernanceV2.SHORT_EXECUTOR,
              ),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwner'],
        },
      ],
    };
    // const govContractGuardian = new ethers.Contract(
    //   addressBook.GOVERNANCE,
    //   IWithGuardian_ABI,
    //   provider,
    // );
    // const govContractOwner = new ethers.Contract(
    //   addressBook.GOVERNANCE,
    //   IOwnable_ABI,
    //   provider,
    // );
    // const govGuardian = await govContractGuardian.guardian();
    // const govOwner = await govContractOwner.owner();
    //
    // obj['AaveGovernanceV3'] = {
    //   address: addressBook.GOVERNANCE,
    //   modifiers: [
    //     {
    //       modifier: 'onlyOwner',
    //       addresses: [
    //         {
    //           address: govOwner,
    //           owners: await getSafeOwners(provider, govOwner),
    //         },
    //       ],
    //       functions: roles['AaveGovernanceV3']['onlyOwner'],
    //     },
    //     {
    //       modifier: 'onlyGuardian',
    //       addresses: [
    //         {
    //           address: govGuardian,
    //           owners: await getSafeOwners(provider, govGuardian),
    //         },
    //       ],
    //       functions: roles['AaveGovernanceV3']['onlyGuardian'],
    //     },
    //     {
    //       modifier: 'onlyOwnerOrGuardian',
    //       addresses: [
    //         {
    //           address: govGuardian,
    //           owners: await getSafeOwners(provider, govGuardian),
    //         },
    //         {
    //           address: govOwner,
    //           owners: await getSafeOwners(provider, govOwner),
    //         },
    //       ],
    //       functions: roles['AaveGovernanceV3']['onlyOwnerOrGuardian'],
    //     },
    //   ],
    // };
  }

  if (
    addressBook.PAYLOADS_CONTROLLER &&
    addressBook.PAYLOADS_CONTROLLER !== constants.AddressZero
  ) {
    const pcContractGuardian = new ethers.Contract(
      addressBook.PAYLOADS_CONTROLLER,
      IWithGuardian_ABI,
      provider,
    );
    const pcContractOwner = new ethers.Contract(
      addressBook.PAYLOADS_CONTROLLER,
      IOwnable_ABI,
      provider,
    );
    const pcContractRescue = new ethers.Contract(
      addressBook.PAYLOADS_CONTROLLER,
      IRescuable_ABI,
      provider,
    );

    const pcGuardian = await pcContractGuardian.guardian();
    const pcOwner = await pcContractOwner.owner();
    const rescuer = await pcContractRescue.whoCanRescue();
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
  if (
    addressBook.VOTING_MACHINE &&
    addressBook.VOTING_MACHINE !== constants.AddressZero
  ) {
    const vmContract = new ethers.Contract(
      addressBook.VOTING_MACHINE,
      IOwnable_ABI,
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
  if (
    addressBook.VOTING_PORTAL_ETH_ETH &&
    addressBook.VOTING_PORTAL_ETH_ETH !== constants.AddressZero
  ) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_ETH,
      IOwnable_ABI,
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
  if (
    addressBook.VOTING_PORTAL_ETH_AVAX &&
    addressBook.VOTING_PORTAL_ETH_AVAX !== constants.AddressZero
  ) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_AVAX,
      IOwnable_ABI,
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
  if (
    addressBook.VOTING_PORTAL_ETH_POL &&
    addressBook.VOTING_PORTAL_ETH_POL !== constants.AddressZero
  ) {
    const vpContract = new ethers.Contract(
      addressBook.VOTING_PORTAL_ETH_POL,
      IOwnable_ABI,
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

  if (
    addressBook.EXECUTOR_LVL_1 &&
    addressBook.EXECUTOR_LVL_1 !== constants.AddressZero
  ) {
    const executorContract = new ethers.Contract(
      addressBook.EXECUTOR_LVL_1,
      IOwnable_ABI,
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

  if (
    addressBook.EXECUTOR_LVL_2 &&
    addressBook.EXECUTOR_LVL_2 !== constants.AddressZero
  ) {
    const executorContract = new ethers.Contract(
      addressBook.EXECUTOR_LVL_2,
      IOwnable_ABI,
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

  if (
    addressBook.EMERGENCY_REGISTRY &&
    addressBook.EMERGENCY_REGISTRY !== constants.AddressZero
  ) {
    const emergencyRegistryContract = new ethers.Contract(
      addressBook.EMERGENCY_REGISTRY,
      IOwnable_ABI,
      provider,
    );
    const owner = await emergencyRegistryContract.owner();
    obj['EmergencyRegistry'] = {
      address: addressBook.EMERGENCY_REGISTRY,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
            },
          ],
          functions: roles['EmergencyRegistry']['onlyOwner'],
        },
      ],
    };
  }

  if (
    addressBook.CROSS_CHAIN_CONTROLLER &&
    addressBook.CROSS_CHAIN_CONTROLLER !== constants.AddressZero
  ) {
    const cccContract = new ethers.Contract(
      addressBook.CROSS_CHAIN_CONTROLLER,
      ICrossChainController_ABI,
      provider,
    );
    const cccContractOwner = new ethers.Contract(
      addressBook.CROSS_CHAIN_CONTROLLER,
      IOwnable_ABI,
      provider,
    );
    const cccContractGuardian = new ethers.Contract(
      addressBook.CROSS_CHAIN_CONTROLLER,
      IWithGuardian_ABI,
      provider,
    );
    const cccContractRescue = new ethers.Contract(
      addressBook.CROSS_CHAIN_CONTROLLER,
      IRescuable_ABI,
      provider,
    );
    const owner = await cccContractOwner.owner();
    const guardian = await cccContractGuardian.guardian();
    const rescuer = await cccContractRescue.whoCanRescue();

    const supportedChains = await cccContract.getSupportedChains();

    const receiverBridges: Set<string> = new Set();
    for (let i = 0; i < supportedChains.length; i++) {
      const bridges: string[] =
        await cccContract.getReceiverBridgeAdaptersByChain(supportedChains[i]);
      // get bridge name
      bridges.map((bridge) => receiverBridges.add(bridge));
    }

    const receiverBridgesArray = Array.from(receiverBridges);
    for (let i = 0; i < receiverBridgesArray.length; i++) {
      // get trusted remotes
      const trustedRemotes: { address: string; chain: string }[] = [];
      for (let i = 0; i < supportedChains.length; i++) {
        const bridgeAdapterContract = new ethers.Contract(
          receiverBridgesArray[i],
          baseAdapter,
          provider,
        );
        const trustedRemote: string =
          await bridgeAdapterContract.getTrustedRemoteByChainId(
            supportedChains[i],
          );

        trustedRemotes.push({
          address: trustedRemote,
          chain: supportedChains[i],
        });
      }

      obj[`BridgeAdapter${i}`] = {
        address: receiverBridgesArray[i],
        modifiers: [
          {
            modifier: 'trustedRemote',
            addresses: [
              ...Array.from(trustedRemotes).map((trustedRemote) => {
                return {
                  address: trustedRemote.address,
                  owners: [],
                  chain: trustedRemote.chain.toString(),
                };
              }),
            ],
            functions: ['receiveMessage'],
          },
        ],
      };
    }

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
            ...Array.from(receiverBridges).map((approvedBridge: string) => {
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

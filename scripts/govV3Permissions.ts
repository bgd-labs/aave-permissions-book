import {
  Contracts,
  Guardian,
  PermissionsJson,
  Roles,
} from '../helpers/types.js';
import { ethers, providers, constants } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { generateRoles } from '../helpers/jsonParsers.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import {
  IWithGuardian_ABI,
  IOwnable_ABI,
} from '@bgd-labs/aave-address-book/abis';
import { baseAdapter } from '../abis/BaseAdapter.js';
import { onlyOwnerAbi } from '../abis/onlyOwnerAbi.js';
import { PayloadsController_ABI } from '../abis/payloadsController.js';
import { ICrossChainController_ABI } from '../abis/crossChainController.js';
import { PERMISSIONED_PAYLOADS_CONTROLLER_ABI } from '../abis/permissionedPayloadsController.js';

export const resolveGovV3Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
  chainId: ChainId | number,
  senders: string[],
  tenderly: boolean,
  ggAdminRoles: Record<string, string[]>,
  addressNames?: Record<string, string>,
) => {
  let obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  const owners: Record<string, Record<string, Guardian>> = {};
  // owners
  for (const roleName of Object.keys(ggAdminRoles)) {
    for (const roleAddress of ggAdminRoles[roleName]) {
      if (!owners[roleName]) {
        owners[roleName] = {
          [roleAddress]: {
            owners: await getSafeOwners(provider, roleAddress),
            threshold: await getSafeThreshold(provider, roleAddress),
          },
        };
      } else if (owners[roleName] && !owners[roleName][roleAddress]) {
        owners[roleName][roleAddress] = {
          owners: await getSafeOwners(provider, roleAddress),
          threshold: await getSafeThreshold(provider, roleAddress),
        };
      }
    }
  }

  if (
    addressBook.GRANULAR_GUARDIAN &&
    addressBook.GRANULAR_GUARDIAN !== constants.AddressZero
  ) {
    obj['GranularGuardian'] = {
      address: addressBook.GRANULAR_GUARDIAN,
      modifiers: [
        {
          modifier: 'onlyRetryGuardian',
          addresses: [
            ...ggAdminRoles['RETRY_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['RETRY_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  owners['RETRY_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ],
          functions: roles['GranularGuardian']['onlyRetryGuardian'],
        },
        {
          modifier: 'onlyEmergencyGuardian',
          addresses: [
            ...ggAdminRoles['SOLVE_EMERGENCY_ROLE'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners:
                  owners['SOLVE_EMERGENCY_ROLE'][roleAddress].owners || [],
                signersThreshold:
                  owners['SOLVE_EMERGENCY_ROLE'][roleAddress].threshold || 0,
              };
            }),
          ],
          functions: roles['GranularGuardian']['onlyEmergencyGuardian'],
        },
        {
          modifier: 'onlyDefaultAdmin',
          addresses: [
            ...ggAdminRoles['DEFAULT_ADMIN'].map((roleAddress) => {
              return {
                address: roleAddress,
                owners: owners['DEFAULT_ADMIN'][roleAddress].owners || [],
                signersThreshold:
                  owners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
              };
            }),
          ],
          functions: roles['GranularGuardian']['onlyDefaultAdmin'],
        },
      ],
    };
  }

  // only valid while 2.5 is active
  if (
    addressBook.GOVERNANCE &&
    addressBook.GOVERNANCE !== constants.AddressZero
  ) {
    const govContractGuardian = new ethers.Contract(
      addressBook.GOVERNANCE,
      IWithGuardian_ABI,
      provider,
    );
    const govContractOwner = new ethers.Contract(
      addressBook.GOVERNANCE,
      IOwnable_ABI,
      provider,
    );
    const govGuardian = await govContractGuardian.guardian();
    const govOwner = await govContractOwner.owner();

    obj['AaveGovernanceV3'] = {
      address: addressBook.GOVERNANCE,
      modifiers: [
        {
          modifier: 'onlyOwner',
          addresses: [
            {
              address: govOwner,
              owners: await getSafeOwners(provider, govOwner),
              signersThreshold: await getSafeThreshold(provider, govOwner),
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
              signersThreshold: await getSafeThreshold(provider, govGuardian),
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
              signersThreshold: await getSafeThreshold(provider, govGuardian),
            },
            {
              address: govOwner,
              owners: await getSafeOwners(provider, govOwner),
              signersThreshold: await getSafeThreshold(provider, govOwner),
            },
          ],
          functions: roles['AaveGovernanceV3']['onlyOwnerOrGuardian'],
        },
      ],
    };
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
      PayloadsController_ABI,
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
              signersThreshold: await getSafeThreshold(provider, pcOwner),
            },
          ],
          functions: roles['PayloadsController']['onlyOwner'],
        },
        {
          modifier: 'onlyGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
              signersThreshold: await getSafeThreshold(provider, pcGuardian),
            },
          ],
          functions: roles['PayloadsController']['onlyGuardian'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: pcGuardian,
              owners: await getSafeOwners(provider, pcGuardian),
              signersThreshold: await getSafeThreshold(provider, pcGuardian),
            },
            {
              address: pcOwner,
              owners: await getSafeOwners(provider, pcOwner),
              signersThreshold: await getSafeThreshold(provider, pcOwner),
            },
          ],
          functions: roles['PayloadsController']['onlyOwnerOrGuardian'],
        },
        {
          modifier: 'onlyRescueGuardian',
          addresses: [
            {
              address: rescuer,
              owners: await getSafeOwners(provider, rescuer),
              signersThreshold: await getSafeThreshold(provider, rescuer),
            },
          ],
          functions: roles['PayloadsController']['onlyRescueGuardian'],
        },
      ],
    };

    if (!addressBook.PROXY_ADMIN && addressBook.TRANSPARENT_PROXY_FACTORY) {
      const pcProxyAdmin = await getProxyAdmin(
        addressBook.PAYLOADS_CONTROLLER,
        provider,
      );
      const proxyAdminContract = new ethers.Contract(
        pcProxyAdmin,
        onlyOwnerAbi,
        provider,
      );
      const proxyAdminOwner = await proxyAdminContract.owner();
      obj['PayloadsControllerProxyAdmin'] = {
        address: pcProxyAdmin,
        modifiers: [
          {
            modifier: 'onlyOwner',
            addresses: [
              {
                address: proxyAdminOwner,
                owners: await getSafeOwners(provider, proxyAdminOwner),
                signersThreshold: await getSafeThreshold(provider, proxyAdminOwner),
              },
            ],
            functions: roles['ProxyAdmin']['onlyOwner'],
          },
        ],
      };
    }
  }

  // if (
  //   addressBook.PERMISSIONED_PAYLOADS_CONTROLLER &&
  //   addressBook.PERMISSIONED_PAYLOADS_CONTROLLER !== constants.AddressZero
  // ) {
  //   const ppcProxyAdmin = await getProxyAdmin(
  //     addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
  //     provider,
  //   );
  //   const proxyAdminContract = new ethers.Contract(
  //     ppcProxyAdmin,
  //     onlyOwnerAbi,
  //     provider,
  //   );
  //   if (ppcProxyAdmin !== constants.AddressZero) {
  //     const proxyAdminOwner = await proxyAdminContract.owner();

  //     obj['PermissionedPayloadsControllerProxyAdmin'] = {
  //       address: ppcProxyAdmin,
  //       modifiers: [
  //         {
  //           modifier: 'onlyOwner',
  //           addresses: [
  //             {
  //               address: proxyAdminOwner,
  //               owners: await getSafeOwners(provider, proxyAdminOwner),
  //               signersThreshold: await getSafeThreshold(provider, proxyAdminOwner),
  //             },
  //           ],
  //           functions: roles['ProxyAdmin']['onlyOwner'],
  //         },
  //       ],
  //     };
  //   }


  //   const ppcContract = new ethers.Contract(
  //     addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
  //     PERMISSIONED_PAYLOADS_CONTROLLER_ABI,
  //     provider,
  //   );

  //   const pcGuardian = await ppcContract.guardian();
  //   const pcOwner = await ppcContract.owner();
  //   const rescuer = await ppcContract.whoCanRescue();
  //   const payloadsManager = await ppcContract.payloadsManager();

  //   obj['PermissionedPayloadsController'] = {
  //     address: addressBook.PERMISSIONED_PAYLOADS_CONTROLLER,
  //     proxyAdmin: ppcProxyAdmin,
  //     modifiers: [
  //       {
  //         modifier: 'onlyGuardian',
  //         addresses: [
  //           {
  //             address: pcGuardian,
  //             owners: await getSafeOwners(provider, pcGuardian),
  //             signersThreshold: await getSafeThreshold(provider, pcGuardian),
  //           },
  //         ],
  //         functions: roles['PermissionedPayloadsController']['onlyGuardian'],
  //       },
  //       {
  //         modifier: 'onlyOwnerOrGuardian',
  //         addresses: [
  //           {
  //             address: pcGuardian,
  //             owners: await getSafeOwners(provider, pcGuardian),
  //             signersThreshold: await getSafeThreshold(provider, pcGuardian),
  //           },
  //           {
  //             address: pcOwner,
  //             owners: await getSafeOwners(provider, pcOwner),
  //             signersThreshold: await getSafeThreshold(provider, pcOwner),
  //           },
  //         ],
  //         functions: roles['PermissionedPayloadsController']['onlyOwnerOrGuardian'],
  //       },
  //       {
  //         modifier: 'onlyRescueGuardian',
  //         addresses: [
  //           {
  //             address: rescuer,
  //             owners: await getSafeOwners(provider, rescuer),
  //             signersThreshold: await getSafeThreshold(provider, rescuer),
  //           },
  //         ],
  //         functions: roles['PermissionedPayloadsController']['onlyRescueGuardian'],
  //       },
  //       {
  //         modifier: 'onlyPayloadsManagerOrGuardian',
  //         addresses: [
  //           {
  //             address: pcGuardian,
  //             owners: await getSafeOwners(provider, pcGuardian),
  //             signersThreshold: await getSafeThreshold(provider, pcGuardian),
  //           },
  //           {
  //             address: payloadsManager,
  //             owners: await getSafeOwners(provider, payloadsManager),
  //             signersThreshold: await getSafeThreshold(provider, payloadsManager),
  //           },
  //         ],
  //         functions: roles['PermissionedPayloadsController']['onlyPayloadsManagerOrGuardian'],
  //       },
  //       {
  //         modifier: 'onlyPayloadsManager',
  //         addresses: [
  //           {
  //             address: payloadsManager,
  //             owners: await getSafeOwners(provider, payloadsManager),
  //             signersThreshold: await getSafeThreshold(provider, payloadsManager),
  //           },
  //         ],
  //         functions: roles['PermissionedPayloadsController']['onlyPayloadsManager'],
  //       },
  //     ],
  //   };
  // }

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
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, owner),
            },
          ],
          functions: roles['Executor']['onlyOwner'],
        },
      ],
    };
  }

  // if (
  //   addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR &&
  //   addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR !== constants.AddressZero
  // ) {
  //   const executorContract = new ethers.Contract(
  //     addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR,
  //     IOwnable_ABI,
  //     provider,
  //   );
  //   const owner = await executorContract.owner();
  //   obj['PermissionedExecutor'] = {
  //     address: addressBook.PERMISSIONED_PAYLOADS_CONTROLLER_EXECUTOR,
  //     modifiers: [
  //       {
  //         modifier: 'onlyOwner',
  //         addresses: [
  //           {
  //             address: owner,
  //             owners: await getSafeOwners(provider, owner),
  //             signersThreshold: await getSafeThreshold(provider, owner),
  //           },
  //         ],
  //         functions: roles['Executor']['onlyOwner'],
  //       },
  //     ],
  //   };
  // }

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
              signersThreshold: await getSafeThreshold(provider, owner),
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
      ICrossChainController_ABI,
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
      bridges.map((bridge) => receiverBridges.add(bridge));
    }

    const receiverBridgesArray = Array.from(receiverBridges);
    for (let i = 0; i < receiverBridgesArray.length; i++) {
      // get trusted remotes
      const trustedRemotes: { address: string; chain: string }[] = [];
      for (let j = 0; j < supportedChains.length; j++) {
        const bridgeAdapterContract = new ethers.Contract(
          receiverBridgesArray[i],
          baseAdapter,
          provider,
        );
        const trustedRemote: string =
          await bridgeAdapterContract.getTrustedRemoteByChainId(
            supportedChains[j],
          );

        if (trustedRemote === constants.AddressZero) {
          break;
        }
        trustedRemotes.push({
          address: trustedRemote,
          chain: supportedChains[j],
        });
      }

      let bridgeAdapterName = `BridgeAdapter${i}`;

      try {
        const bridgeAdapterContract = new ethers.Contract(
          receiverBridgesArray[i],
          baseAdapter,
          provider,
        );
        bridgeAdapterName = await bridgeAdapterContract.adapterName();
      } catch (error) {
        if (addressNames && addressNames[receiverBridgesArray[i]] !== '') {
          bridgeAdapterName = addressNames[receiverBridgesArray[i]];
        }
      }

      obj[bridgeAdapterName] = {
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
              signersThreshold: await getSafeThreshold(provider, owner),
            },
          ],
          functions: roles['CrossChainController']['onlyOwner'],
        },
        {
          modifier: 'onlyOwnerOrGuardian',
          addresses: [
            {
              address: guardian,
              owners: await getSafeOwners(provider, guardian),
              signersThreshold: await getSafeThreshold(provider, guardian),
            },
            {
              address: owner,
              owners: await getSafeOwners(provider, owner),
              signersThreshold: await getSafeThreshold(provider, owner),
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
              signersThreshold: await getSafeThreshold(provider, rescuer),
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
    if (
      chainId === ChainId.polygon ||
      chainId === ChainId.avalanche ||
      chainId === 56 ||
      chainId === 100 ||
      chainId === 146 ||
      chainId === 42220
    ) {
      obj['CrossChainController'].modifiers.push({
        modifier: 'onlyGuardian',
        addresses: [
          {
            address: guardian,
            owners: await getSafeOwners(provider, guardian),
            signersThreshold: await getSafeThreshold(provider, guardian),
          },
        ],
        functions: roles['CrossChainController']['onlyGuardian'],
      });
    }

    if (!addressBook.PROXY_ADMIN && addressBook.TRANSPARENT_PROXY_FACTORY) {
      const cccProxyAdmin = await getProxyAdmin(
        addressBook.CROSS_CHAIN_CONTROLLER,
        provider,
      );
      const proxyAdminContract = new ethers.Contract(
        cccProxyAdmin,
        onlyOwnerAbi,
        provider,
      );
      const proxyAdminOwner = await proxyAdminContract.owner();
      obj['CrossChainControllerProxyAdmin'] = {
        address: cccProxyAdmin,
        modifiers: [
          {
            modifier: 'onlyOwner',
            addresses: [
              {
                address: proxyAdminOwner,
                owners: await getSafeOwners(provider, proxyAdminOwner),
                signersThreshold: await getSafeThreshold(provider, proxyAdminOwner),
              },
            ],
            functions: roles['ProxyAdmin']['onlyOwner'],
          },
        ],
      };
    }
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

import {
  Contracts,
  Guardian,
  PermissionsJson,
  Roles,
} from '../helpers/types.js';
import { ChainId } from '@bgd-labs/toolbox';
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
import { Address, Client, getAddress, getContract, zeroAddress } from 'viem';

export const resolveGovV3Modifiers = async (
  addressBook: any,
  provider: Client,
  permissionsObject: PermissionsJson,
  chainId: typeof ChainId | number,
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
    addressBook.GRANULAR_GUARDIAN !== zeroAddress
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
    addressBook.GOVERNANCE !== zeroAddress
  ) {
    const govContractGuardian = getContract({ address: getAddress(addressBook.GOVERNANCE), abi: IWithGuardian_ABI, client: provider });
    const govContractOwner = getContract({ address: getAddress(addressBook.GOVERNANCE), abi: IOwnable_ABI, client: provider });
    const govGuardian = await govContractGuardian.read.guardian() as Address;
    const govOwner = await govContractOwner.read.owner() as Address;

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
    addressBook.PAYLOADS_CONTROLLER !== zeroAddress
  ) {
    const pcContractGuardian = getContract({ address: getAddress(addressBook.PAYLOADS_CONTROLLER), abi: IWithGuardian_ABI, client: provider });
    const pcContractOwner = getContract({ address: getAddress(addressBook.PAYLOADS_CONTROLLER), abi: IOwnable_ABI, client: provider });
    const pcContractRescue = getContract({ address: getAddress(addressBook.PAYLOADS_CONTROLLER), abi: PayloadsController_ABI, client: provider });

    const pcGuardian = await pcContractGuardian.read.guardian() as Address;
    const pcOwner = await pcContractOwner.read.owner() as Address;
    const rescuer = await pcContractRescue.read.whoCanRescue() as Address;

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
      const proxyAdminContract = getContract({ address: getAddress(pcProxyAdmin), abi: onlyOwnerAbi, client: provider });
      const proxyAdminOwner = await proxyAdminContract.read.owner() as Address;
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
    addressBook.VOTING_MACHINE !== zeroAddress
  ) {
    const vmContract = getContract({ address: getAddress(addressBook.VOTING_MACHINE), abi: IOwnable_ABI, client: provider });

    const owner = await vmContract.read.owner() as Address;
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
    addressBook.VOTING_PORTAL_ETH_ETH !== zeroAddress
  ) {
    const vpContract = getContract({ address: getAddress(addressBook.VOTING_PORTAL_ETH_ETH), abi: IOwnable_ABI, client: provider });

    const owner = await vpContract.read.owner() as Address;
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
    addressBook.VOTING_PORTAL_ETH_AVAX !== zeroAddress
  ) {
    const vpContract = getContract({ address: getAddress(addressBook.VOTING_PORTAL_ETH_AVAX), abi: IOwnable_ABI, client: provider });

    const owner = await vpContract.read.owner() as Address;
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
    addressBook.VOTING_PORTAL_ETH_POL !== zeroAddress
  ) {
    const vpContract = getContract({ address: getAddress(addressBook.VOTING_PORTAL_ETH_POL), abi: IOwnable_ABI, client: provider });

    const owner = await vpContract.read.owner() as Address;
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
    addressBook.EXECUTOR_LVL_1 !== zeroAddress
  ) {
    const executorContract = getContract({ address: getAddress(addressBook.EXECUTOR_LVL_1), abi: IOwnable_ABI, client: provider });
    const owner = await executorContract.read.owner() as Address;
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
    addressBook.EXECUTOR_LVL_2 !== zeroAddress
  ) {
    const executorContract = getContract({ address: getAddress(addressBook.EXECUTOR_LVL_2), abi: IOwnable_ABI, client: provider });
    const owner = await executorContract.read.owner() as Address;
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
    addressBook.EMERGENCY_REGISTRY !== zeroAddress
  ) {
    const emergencyRegistryContract = getContract({ address: getAddress(addressBook.EMERGENCY_REGISTRY), abi: IOwnable_ABI, client: provider });
    const owner = await emergencyRegistryContract.read.owner() as Address;
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
    addressBook.CROSS_CHAIN_CONTROLLER !== zeroAddress
  ) {
    const cccContract = getContract({ address: getAddress(addressBook.CROSS_CHAIN_CONTROLLER), abi: ICrossChainController_ABI, client: provider });
    const cccContractOwner = getContract({ address: getAddress(addressBook.CROSS_CHAIN_CONTROLLER), abi: IOwnable_ABI, client: provider });
    const cccContractGuardian = getContract({ address: getAddress(addressBook.CROSS_CHAIN_CONTROLLER), abi: IWithGuardian_ABI, client: provider });
    const cccContractRescue = getContract({ address: getAddress(addressBook.CROSS_CHAIN_CONTROLLER), abi: ICrossChainController_ABI, client: provider });
    const owner = await cccContractOwner.read.owner() as Address;
    const guardian = await cccContractGuardian.read.guardian() as Address;
    const rescuer = await cccContractRescue.read.whoCanRescue() as Address;

    const supportedChains = await cccContract.read.getSupportedChains() as number[];
    const receiverBridges: Set<string> = new Set();
    for (let i = 0; i < supportedChains.length; i++) {
      const bridges: string[] =
        await cccContract.read.getReceiverBridgeAdaptersByChain([supportedChains[i]]) as string[];
      bridges.map((bridge) => receiverBridges.add(bridge));
    }

    const receiverBridgesArray = Array.from(receiverBridges);
    for (let i = 0; i < receiverBridgesArray.length; i++) {
      // get trusted remotes
      const trustedRemotes: { address: string; chain: string }[] = [];
      for (let j = 0; j < supportedChains.length; j++) {
        const bridgeAdapterContract = getContract({ address: getAddress(receiverBridgesArray[i]), abi: baseAdapter, client: provider });
        const trustedRemote: string =
          await bridgeAdapterContract.read.getTrustedRemoteByChainId(
            [supportedChains[j]],
          ) as Address;

        if (trustedRemote === zeroAddress) {
          break;
        }
        trustedRemotes.push({
          address: trustedRemote,
          chain: supportedChains[j].toString(),
        });
      }

      let bridgeAdapterName = `BridgeAdapter${i}`;

      try {
        const bridgeAdapterContract = getContract({ address: getAddress(receiverBridgesArray[i]), abi: baseAdapter, client: provider });
        bridgeAdapterName = await bridgeAdapterContract.read.adapterName() as string;
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
      const proxyAdminContract = getContract({ address: getAddress(cccProxyAdmin), abi: onlyOwnerAbi, client: provider });
      const proxyAdminOwner = await proxyAdminContract.read.owner() as Address;
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

import { generateRoles } from '../helpers/jsonParsers.js';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners, getSafeThreshold } from '../helpers/guardian.js';
import { stkToken } from '../abis/stkToken.js';
import { abptABI } from '../abis/abptABI.js';
import { bptABI } from '../abis/bptABI.js';
import { Contracts, PermissionsJson } from '../helpers/types.js';
import { Address, Client, getAddress, getContract } from 'viem';

export const resolveSafetyV2Modifiers = async (
  addressBook: any,
  provider: Client,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const SLASH_ADMIN_ROLE = 0;
  const COOLDOWN_ADMIN_ROLE = 1;
  const CLAIM_HELPER_ROLE = 2;

  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  // stk aave token
  const stkAaveContract = getContract({ address: getAddress(addressBook.STK_AAVE), abi: stkToken, client: provider });

  const stkAaveEmissionManager = await stkAaveContract.read.EMISSION_MANAGER() as Address;
  const slashAdmin = await stkAaveContract.read.getAdmin([SLASH_ADMIN_ROLE]) as Address;
  const cooldDownAdmin = await stkAaveContract.read.getAdmin([COOLDOWN_ADMIN_ROLE]) as Address;
  const claimHelperAdmin = await stkAaveContract.read.getAdmin([CLAIM_HELPER_ROLE]) as Address;

  obj['stkAave'] = {
    address: addressBook.STK_AAVE,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: stkAaveEmissionManager,
            owners: await getSafeOwners(provider, stkAaveEmissionManager),
            signersThreshold: await getSafeThreshold(
              provider,
              stkAaveEmissionManager,
            ),
          },
        ],
        functions: roles['stkAave']['onlyEmissionManager'],
      },
      {
        modifier: 'onlySlashingAdmin',
        addresses: [
          {
            address: slashAdmin,
            owners: await getSafeOwners(provider, slashAdmin),
            signersThreshold: await getSafeThreshold(provider, slashAdmin),
          },
        ],
        functions: roles['stkAave']['onlySlashingAdmin'],
      },
      {
        modifier: 'onlyCooldownAdmin',
        addresses: [
          {
            address: cooldDownAdmin,
            owners: await getSafeOwners(provider, cooldDownAdmin),
            signersThreshold: await getSafeThreshold(provider, cooldDownAdmin),
          },
        ],
        functions: roles['stkAave']['onlyCooldownAdmin'],
      },
      {
        modifier: 'onlyClaimHelper',
        addresses: [
          {
            address: claimHelperAdmin,
            owners: await getSafeOwners(provider, claimHelperAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              claimHelperAdmin,
            ),
          },
        ],
        functions: roles['stkAave']['onlyClaimHelper'],
      },
    ],
  };

  // stk ABPT token
  const stkABPTContract = getContract({ address: getAddress(addressBook.STK_ABPT), abi: stkToken, client: provider });

  const stkABPTEmissionManager = await stkABPTContract.read.EMISSION_MANAGER() as Address;
  const abptAddress = await stkABPTContract.read.STAKED_TOKEN() as Address;
  const stkABPTslashAdmin = await stkABPTContract.read.getAdmin([SLASH_ADMIN_ROLE]) as Address;
  const stkABPTcooldDownAdmin = await stkABPTContract.read.getAdmin([COOLDOWN_ADMIN_ROLE]) as Address;
  const stkABPTclaimHelperAdmin = await stkABPTContract.read.getAdmin([CLAIM_HELPER_ROLE]) as Address;

  obj['stkABPT'] = {
    address: addressBook.STK_ABPT,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: stkABPTEmissionManager,
            owners: await getSafeOwners(provider, stkABPTEmissionManager),
            signersThreshold: await getSafeThreshold(
              provider,
              stkABPTEmissionManager,
            ),
          },
        ],
        functions: roles['stkABPT']['onlyEmissionManager'],
      },
      {
        modifier: 'onlySlashingAdmin',
        addresses: [
          {
            address: stkABPTslashAdmin,
            owners: await getSafeOwners(provider, stkABPTslashAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              stkABPTslashAdmin,
            ),
          },
        ],
        functions: roles['stkAave']['onlySlashingAdmin'],
      },
      {
        modifier: 'onlyCooldownAdmin',
        addresses: [
          {
            address: stkABPTcooldDownAdmin,
            owners: await getSafeOwners(provider, stkABPTcooldDownAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              stkABPTcooldDownAdmin,
            ),
          },
        ],
        functions: roles['stkAave']['onlyCooldownAdmin'],
      },
      {
        modifier: 'onlyClaimHelper',
        addresses: [
          {
            address: stkABPTclaimHelperAdmin,
            owners: await getSafeOwners(provider, stkABPTclaimHelperAdmin),
            signersThreshold: await getSafeThreshold(
              provider,
              stkABPTclaimHelperAdmin,
            ),
          },
        ],
        functions: roles['stkAave']['onlyClaimHelper'],
      },
    ],
  };

  const abptContract = getContract({ address: abptAddress, abi: abptABI, client: provider });
  const bPool = await abptContract.read.bPool() as Address;
  const abptController = await abptContract.read.getController() as Address;

  obj['ABPT'] = {
    address: abptAddress,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: abptController,
            owners: await getSafeOwners(provider, abptController),
            signersThreshold: await getSafeThreshold(provider, abptController),
          },
        ],
        functions: roles['ABPT']['onlyOwner'],
      },
    ],
  };

  const bptContract = getContract({ address: bPool, abi: bptABI, client: provider });
  const bptController = await bptContract.read.getController() as Address;
  obj['BPT'] = {
    address: bPool,
    modifiers: [
      {
        modifier: 'onlyController',
        addresses: [
          {
            address: bptController,
            owners: await getSafeOwners(provider, bptController),
            signersThreshold: await getSafeThreshold(provider, bptController),
          },
        ],
        functions: roles['BPT']['onlyController'],
      },
    ],
  };

  // add proxy admins
  const proxyAdminContracts: string[] = permissionsObject
    .filter((contract) => contract.proxyAdmin)
    .map((contract) => contract.contract);
  for (let i = 0; i < proxyAdminContracts.length; i++) {
    obj[proxyAdminContracts[i]]['proxyAdmin'] = await getProxyAdmin(
      obj[proxyAdminContracts[i]].address,
      provider,
    );
  }

  return obj;
};

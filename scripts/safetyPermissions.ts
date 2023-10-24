import { ethers, providers } from 'ethers';

import { generateRoles } from '../helpers/jsonParsers.js';
import { getProxyAdmin } from '../helpers/proxyAdmin.js';
import { getSafeOwners } from '../helpers/guardian.js';
import stkAaveABI from '../abis/stkAaveABI.json' assert { type: 'json' };
import stkToken from '../abis/stkToken.json' assert { type: 'json' };
import abptABI from '../abis/abptABI.json' assert { type: 'json' };
import bptABI from '../abis/bptABI.json' assert { type: 'json' };
import { Contracts, PermissionsJson } from '../helpers/types.js';

export const resolveSafetyV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const SLASH_ADMIN_ROLE = 0;
  const COOLDOWN_ADMIN_ROLE = 1;
  const CLAIM_HELPER_ROLE = 2;

  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  // stk aave token
  const stkAaveContract = new ethers.Contract(
    addressBook.STK_AAVE,
    stkToken,
    provider,
  );

  const stkAaveEmissionManager = await stkAaveContract.EMISSION_MANAGER();
  const slashAdmin = await stkAaveContract.getAdmin(SLASH_ADMIN_ROLE);
  const cooldDownAdmin = await stkAaveContract.getAdmin(COOLDOWN_ADMIN_ROLE);
  const claimHelperAdmin = await stkAaveContract.getAdmin(CLAIM_HELPER_ROLE);

  obj['stkAave'] = {
    address: addressBook.STK_AAVE,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: stkAaveEmissionManager,
            owners: await getSafeOwners(provider, stkAaveEmissionManager),
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
          },
        ],
        functions: roles['stkAave']['onlyClaimHelper'],
      },
    ],
  };

  // stk ABPT token
  const stkABPTContract = new ethers.Contract(
    addressBook.STK_ABPT,
    stkToken,
    provider,
  );

  const stkABPTEmissionManager = await stkABPTContract.EMISSION_MANAGER();
  const abptAddress = await stkABPTContract.STAKED_TOKEN();
  const stkABPTslashAdmin = await stkABPTContract.getAdmin(SLASH_ADMIN_ROLE);
  const stkABPTcooldDownAdmin = await stkABPTContract.getAdmin(
    COOLDOWN_ADMIN_ROLE,
  );
  const stkABPTclaimHelperAdmin = await stkABPTContract.getAdmin(
    CLAIM_HELPER_ROLE,
  );

  obj['stkABPT'] = {
    address: addressBook.STK_ABPT,
    modifiers: [
      {
        modifier: 'onlyEmissionManager',
        addresses: [
          {
            address: stkABPTEmissionManager,
            owners: await getSafeOwners(provider, stkABPTEmissionManager),
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
          },
        ],
        functions: roles['stkAave']['onlyClaimHelper'],
      },
    ],
  };

  const abptContract = new ethers.Contract(abptAddress, abptABI, provider);
  const bPool = await abptContract.bPool();
  const abptController = await abptContract.getController();

  obj['ABPT'] = {
    address: abptAddress,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: abptController,
            owners: await getSafeOwners(provider, abptController),
          },
        ],
        functions: roles['ABPT']['onlyOwner'],
      },
    ],
  };

  const bptContract = new ethers.Contract(bPool, bptABI, provider);
  const bptController = await bptContract.getController();
  obj['BPT'] = {
    address: bPool,
    modifiers: [
      {
        modifier: 'onlyController',
        addresses: [
          {
            address: bptController,
            owners: await getSafeOwners(provider, bptController),
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

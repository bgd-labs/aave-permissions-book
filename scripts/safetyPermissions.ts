import { ethers, providers } from 'ethers';

import { generateRoles } from '../helpers/jsonParsers';
import { getProxyAdmin } from '../helpers/proxyAdmin';
import { getSafeOwners } from '../helpers/guardian';
import stkAaveABI from '../abis/stkAaveABI.json';
import executorWithTimelockAbi from '../abis/executorWithTimelockAbi.json';
import { Contracts, PermissionsJson } from '../helpers/types';

export const resolveSafetyV2Modifiers = async (
  addressBook: any,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  // stk aave token
  const stkAaveContract = new ethers.Contract(
    addressBook.STK_AAVE,
    stkAaveABI,
    provider,
  );

  const stkAaveEmissionManager = await stkAaveContract.EMISSION_MANAGER();

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
    ],
  };

  // stk ABPT token
  const stkABPTContract = new ethers.Contract(
    addressBook.STK_ABPT,
    stkAaveABI,
    provider,
  );

  const stkABPTEmissionManager = await stkABPTContract.EMISSION_MANAGER();

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

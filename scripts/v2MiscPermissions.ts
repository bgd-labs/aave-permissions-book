import { ethers, providers } from 'ethers';

import { generateRoles } from '../helpers/jsonParsers';
import { getProxyAdmin } from '../helpers/proxyAdmin';
import { getSafeOwners } from '../helpers/guardian';
import onlyOwnerAbi from '../abis/onlyOwnerAbi.json';
import { Contracts, PermissionsJson } from '../helpers/types';

export const resolveV2MiscModifiers = async (
  addressBook: any,
  addresses: Record<string, string>,
  provider: providers.Provider,
  permissionsObject: PermissionsJson,
): Promise<Contracts> => {
  const obj: Contracts = {};
  const roles = generateRoles(permissionsObject);

  obj['LendToAaveMigrator'] = {
    address: addresses.LEND_TO_AAVE_MIGRATOR,
    modifiers: [],
  };

  const merkleDistributorContract = new ethers.Contract(
    addresses.AAVE_MERKLE_DISTRIBUTOR,
    onlyOwnerAbi,
    provider,
  );
  const merkleDistributorOwner = await merkleDistributorContract.owner();

  obj['AaveMerkleDistributor'] = {
    address: addresses.LEND_TO_AAVE_MIGRATOR,
    modifiers: [
      {
        modifier: 'onlyOwner',
        addresses: [
          {
            address: merkleDistributorOwner,
            owners: await getSafeOwners(provider, merkleDistributorOwner),
          },
        ],
        functions: roles['AaveMerkleDistributor']['onlyOwner'],
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

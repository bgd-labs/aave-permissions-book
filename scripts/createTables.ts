import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { Modifier, networkConfigs, Pools } from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables';
import { getSafeOwners } from '../helpers/guardian';
import { providers } from 'ethers';

export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readmeDirectory = '# Directory \n';

  for (let network of Object.keys(aavePermissionsList)) {
    const provider = new providers.StaticJsonRpcProvider(
      networkConfigs[network].rpcUrl,
    );
    // Object.keys(aavePermissionsList).forEach((network: string) => {
    const networkName = ChainIdToNetwork[Number(network)].toUpperCase();
    readmeDirectory += `## ${networkName} \n`;
    const networkPermits = aavePermissionsList[network];

    // create network Readme with pool tables
    let readmeByNetwork = `# ${networkName} \n`;

    for (let pool of Object.keys(networkPermits)) {
      const poolGuardians: Record<string, string[]> = {};
      // Object.keys(networkPermits).forEach((pool) => {
      const poolPermitsByContract = networkPermits[pool];
      // create pool table
      readmeByNetwork += `## ${pool} \n`;
      readmeDirectory += `- [${pool}](./${networkName}.md#${pool}) \n`;

      const contractsByAddress = generateContractsByAddress(
        poolPermitsByContract.contracts,
      );

      let contractTable = `### contracts\n`;
      const contractsModifiersHeaderTitles = [
        'contract',
        'proxyAdmin',
        'modifier',
        'permission owner',
        'functions',
      ];
      const header = getTableHeader(contractsModifiersHeaderTitles);
      contractTable += header;

      // const guardians: string[] = [];

      // fill pool table
      let tableBody = '';
      for (let contractName of Object.keys(poolPermitsByContract.contracts)) {
        // Object.keys(poolPermitsByContract.contracts).forEach((contractName) => {
        const contract = poolPermitsByContract.contracts[contractName];

        for (let modifier of contract.modifiers) {
          // contract.modifiers.forEach((modifier: Modifier) => {
          for (let modifierAddress of modifier.address) {
            // modifier.address.forEach((modifierAddress) => {
            if (!poolGuardians[modifierAddress]) {
              const guardianOwners = await getSafeOwners(
                provider,
                modifierAddress,
              );
              if (guardianOwners.length > 0) {
                poolGuardians[modifierAddress] = guardianOwners;
              }
            }
          }

          tableBody += getTableBody([
            `[${contractName}](${explorerAddressUrlComposer(
              contract.address,
              network,
            )})`,
            `${
              contract.proxyAdmin
                ? '[' +
                  (contractsByAddress[contract.proxyAdmin] ??
                    contract.proxyAdmin) +
                  '](' +
                  explorerAddressUrlComposer(contract.proxyAdmin, network) +
                  ')'
                : '-'
            }`,
            `${modifier.modifier}`,
            `${modifier.address
              .map((modifierAddress) => {
                return (
                  '[' +
                  (contractsByAddress[modifierAddress]
                    ? contractsByAddress[modifierAddress]
                    : poolGuardians[modifierAddress]
                    ? modifierAddress + '(Guardian)'
                    : modifierAddress) +
                  '](' +
                  explorerAddressUrlComposer(modifierAddress, network) +
                  ')'
                );
              })
              .join(', ')}`,
            modifier.functions.join(', '),
          ]);
          tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
        }
      }

      contractTable += tableBody;
      readmeByNetwork += contractTable + '\n';

      if (Object.keys(poolGuardians).length > 0) {
        let guardianTable = `### Guardians \n`;
        const guardianHeaderTitles = ['Guardian', 'Owners'];
        const guardianHeader = getTableHeader(guardianHeaderTitles);
        guardianTable += guardianHeader;

        Object.keys(poolGuardians).forEach((guardian) => {
          guardianTable += getTableBody([
            `[${guardian}](${explorerAddressUrlComposer(guardian, network)})`,
            `${poolGuardians[guardian]
              .map((owner) => {
                return (
                  '[' +
                  owner +
                  '](' +
                  explorerAddressUrlComposer(owner, network) +
                  ')'
                );
              })
              .join(', ')}`,
          ]);
          guardianTable += getLineSeparator(guardianHeaderTitles.length);
        });
        readmeByNetwork += guardianTable + '\n';
      }
      let adminTable = `### Admins \n`;
      const adminsHeaderTitles = ['Role', 'Contract'];
      const adminHeader = getTableHeader(adminsHeaderTitles);
      adminTable += adminHeader;

      if (
        pool === Pools.V3 &&
        poolPermitsByContract.roles &&
        poolPermitsByContract.roles.role
      ) {
        Object.keys(poolPermitsByContract.roles.role).forEach((role) => {
          const roleInfo = poolPermitsByContract.roles?.role[role] || [];
          adminTable += getTableBody([
            role,
            `${roleInfo
              .map((info) => {
                return (
                  '[' +
                  (contractsByAddress[info.address]
                    ? contractsByAddress[info.address]
                    : poolGuardians[info.address]
                    ? info.address + '(Guardian)'
                    : info.address) +
                  '](' +
                  explorerAddressUrlComposer(info.address, network) +
                  ')'
                );
              })
              .join(', ')}`,
          ]);
          adminTable += getLineSeparator(adminsHeaderTitles.length);
        });

        readmeByNetwork += adminTable + '\n';
      }
    }

    saveJson(
      `./out/${ChainIdToNetwork[Number(network)].toUpperCase()}.md`,
      readmeByNetwork,
    );
  }

  saveJson('./out/DIRECTORY.md', readmeDirectory);
};

generateTables();

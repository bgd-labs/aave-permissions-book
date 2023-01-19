import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { Modifier, networkConfigs, Pools } from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables';
import { getSafeOwners } from '../helpers/guardian';
import { providers, utils } from 'ethers';

export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readmeDirectory = '# Directory \n';

  for (let network of Object.keys(aavePermissionsList)) {
    const networkName = ChainIdToNetwork[Number(network)].toUpperCase();
    readmeDirectory += `## ${networkName} \n`;
    const networkPermits = aavePermissionsList[network];

    // create network Readme with pool tables
    let readmeByNetwork = `# ${networkName} \n`;

    for (let pool of Object.keys(networkPermits)) {
      const poolGuardians: Record<string, string[]> = {};
      const poolPermitsByContract = networkPermits[pool];
      // create pool table
      readmeByNetwork += `## ${pool} \n`;
      readmeDirectory += `- [${pool}](./${networkName}.md#${pool}) \n`;

      let contractsByAddress = generateContractsByAddress(
        poolPermitsByContract.contracts,
      );

      // add gov contracts to contractsByAddresses
      if (Number(network) === ChainId.mainnet && pool !== Pools.GOV_V2) {
        contractsByAddress = generateContractsByAddress({
          ...poolPermitsByContract.contracts,
          ...networkPermits[Pools.GOV_V2].contracts,
        });
      }

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

      // fill pool table
      let tableBody = '';
      for (let contractName of Object.keys(poolPermitsByContract.contracts)) {
        const contract = poolPermitsByContract.contracts[contractName];

        for (let modifier of contract.modifiers) {
          for (let modifierAddress of modifier.addresses) {
            if (!poolGuardians[modifierAddress.address]) {
              if (modifierAddress.owners.length > 0) {
                poolGuardians[modifierAddress.address] = modifierAddress.owners;
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
                  (contractsByAddress[contract.proxyAdmin]
                    ? contractsByAddress[contract.proxyAdmin]
                    : poolGuardians[utils.getAddress(contract.proxyAdmin)]
                    ? 'Guardian' +
                      (Object.keys(poolGuardians).indexOf(
                        utils.getAddress(contract.proxyAdmin),
                      ) +
                        1)
                    : utils.getAddress(contract.proxyAdmin)) +
                  '](' +
                  explorerAddressUrlComposer(contract.proxyAdmin, network) +
                  ')'
                : '-'
            }`,
            `${modifier.modifier}`,
            `${modifier.addresses
              .map((modifierAddress) => {
                return (
                  '[' +
                  (contractsByAddress[modifierAddress.address]
                    ? contractsByAddress[modifierAddress.address]
                    : poolGuardians[modifierAddress.address]
                    ? 'Guardian' +
                      (Object.keys(poolGuardians).indexOf(
                        modifierAddress.address,
                      ) +
                        1)
                    : modifierAddress.address) +
                  '](' +
                  explorerAddressUrlComposer(modifierAddress.address, network) +
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
          const roleAddresses = poolPermitsByContract.roles?.role[role] || [];
          adminTable += getTableBody([
            role,
            `${roleAddresses
              .map((roleAddress) => {
                return (
                  '[' +
                  (contractsByAddress[roleAddress]
                    ? contractsByAddress[roleAddress]
                    : poolGuardians[roleAddress]
                    ? 'Guardian' +
                      (Object.keys(poolGuardians).indexOf(roleAddress) + 1)
                    : roleAddress) +
                  '](' +
                  explorerAddressUrlComposer(roleAddress, network) +
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

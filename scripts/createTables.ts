import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { ContractInfo, Modifier } from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables';

export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readmeDirectory = '# Network Tables \n';

  Object.keys(aavePermissionsList).forEach((network: string) => {
    const networkPermits = aavePermissionsList[network];
    // create network table
    let readmeByNetwork = `# ${ChainIdToNetwork[
      Number(network)
    ].toUpperCase()} \n`;

    Object.keys(networkPermits).forEach((pool) => {
      const poolPermitsByContract = networkPermits[pool];
      // create network table
      readmeByNetwork += `## ${pool} \n`;

      const contractsByAddress = generateContractsByAddress(
        poolPermitsByContract,
      );
      let contractTable = `## contracts && permits\n`;
      const contractsModifiersHeaderTitles = [
        'contract',
        'proxyAdmin',
        'modifier',
        'caller',
        'functions',
      ];
      const header = getTableHeader(contractsModifiersHeaderTitles);
      contractTable += header;
      let tableBody = '';
      Object.keys(poolPermitsByContract).forEach((contractName) => {
        const contract = poolPermitsByContract[contractName];

        contract.modifiers.forEach((modifier: Modifier) => {
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
                  explorerAddressUrlComposer(modifier.address, network) +
                  ')'
                : '-'
            }`,
            `${modifier.modifier}`,
            `[${
              contractsByAddress[modifier.address] ?? modifier.address
            }](${explorerAddressUrlComposer(modifier.address, network)})`,
            modifier.functions.join(', '),
          ]);
          tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
        });
      });

      contractTable += tableBody;
      readmeByNetwork += contractTable + '\n';
    });

    // TODO: create directory
    saveJson(
      `./out/${ChainIdToNetwork[Number(network)].toUpperCase()}.md`,
      readmeByNetwork,
    );
  });

  // TODO: create directory readme

  saveJson('./out/TABLES.md', readmeDirectory);
};

generateTables();

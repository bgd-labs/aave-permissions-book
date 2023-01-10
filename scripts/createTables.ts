import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { ContractInfo, Modifier } from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainId } from '@aave/contract-helpers';

export const getTableHeader = (headers: string[]): string => {
  let headerNames = '| ';
  let separator = '|';
  headers.forEach((header: string, index: number) => {
    headerNames += `${header} |`;
    separator += '----------|';
    if (index === headers.length - 1) {
      headerNames += '\n';
      separator += '\n';
    }
  });

  headerNames += separator;

  return headerNames;
};

export const getTableBody = (params: string[]): string => {
  let body = '| ';
  params.forEach((param, index) => {
    body += ` ${param} | `;
    if (index === body.length - 1) {
      body += '\n';
    }
  });

  return body;
};

export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readme = '# Network Tables \n';

  Object.keys(aavePermissionsList).forEach((network: string) => {
    const networkPermits = aavePermissionsList[network];
    // create network table
    readme += `## ${network} `;

    Object.keys(networkPermits).forEach((pool) => {
      const poolPermitsByContract = networkPermits[pool];
      // create network table
      readme += `- ${pool} \n`;

      const modifiers: Record<
        string,
        {
          functions: string[];
          modifierCaller: string;
          contractName: string;
          contractAddress: string;
        }[]
      > = {};
      Object.keys(poolPermitsByContract).forEach((contractName) => {
        const contract = poolPermitsByContract[contractName];

        contract.modifiers.forEach((modifierInfo: Modifier) => {
          if (!modifiers[modifierInfo.modifier]) {
            modifiers[modifierInfo.modifier] = [];
          }
          modifiers[modifierInfo.modifier].push({
            modifierCaller: modifierInfo.address,
            functions: modifierInfo.functions,
            contractName: contractName,
            contractAddress: contract.address,
          });
        });
        // fill general network table
        // create contract table
      });

      // create modifier tables
      Object.keys(modifiers).forEach((modifierName) => {
        let modifierTable = `### ${modifierName} \n`;
        const header = getTableHeader(['contract', 'caller', 'functions']);
        modifierTable += header;

        // TODO: same modifier not apearing multiple times
        // TODO: caller should be check if it appears as other contract in same network
        // TODO: provably extract this to specific method ???

        let tableBody = '';
        modifiers[modifierName].forEach((modifier) => {
          tableBody += getTableBody([
            `[${modifier.contractName}](${explorerAddressUrlComposer(
              modifier.contractAddress,
              network,
            )})`,
            `[${modifier.modifierCaller}](${explorerAddressUrlComposer(
              modifier.modifierCaller,
              network,
            )})`,
            modifier.functions.join(', '),
          ]);
        });
        modifierTable += tableBody;
        readme += modifierTable + '\n';
      });
    });
  });

  // TODO: create directory readme

  saveJson('./out/TABLES.md', readme);
};

generateTables();

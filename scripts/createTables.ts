import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { ContractInfo, Modifier } from '../helpers/configs';

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
        { address: string; fundtions: string[] }[]
      > = {};

      // let modifierTable = '### ${}';
      // const header = getTableHeader(['contract', 'modifiers']);
      // modifierTable += header;

      Object.keys(poolPermitsByContract).forEach((contractName) => {
        const contract = poolPermitsByContract[contractName];

        contract.modifiers.forEach((modifierInfo: Modifier) => {
          modifiers[modifierInfo.modifier].push = {
            modifierCaller: modifierInfo.address,
          };
        });
        // fill general network table
        // create contract table
      });
    });
  });

  saveJson('./out/TABLES.md', readme);
};

generateTables();

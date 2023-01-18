import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import {
  ContractInfo,
  FullPermissions,
  Modifier,
  Pools,
} from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables';

// TODO: correctly encode directory
export const generateDirectory = (json: FullPermissions): string => {
  let directory = '# Directory \n';
  Object.keys(json).forEach((network) => {
    const networkName = ChainIdToNetwork[Number(network)].toUpperCase();
    directory += `## Network ${networkName} \n`;

    Object.keys(json[network]).forEach((pool) => {
      directory += `- [${pool}](./${networkName}.md#${pool}) \n`;
    });
  });

  return directory;
};

export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readmeDirectory = '# Directory \n';

  Object.keys(aavePermissionsList).forEach((network: string) => {
    const networkName = ChainIdToNetwork[Number(network)].toUpperCase();
    readmeDirectory += `## ${networkName} \n`;
    const networkPermits = aavePermissionsList[network];

    // create network Readme with pool tables
    let readmeByNetwork = `# ${networkName} \n`;

    Object.keys(networkPermits).forEach((pool) => {
      const poolPermitsByContract = networkPermits[pool];
      // create pool table
      readmeByNetwork += `## ${pool} \n`;
      readmeDirectory += `- [${pool}](./${networkName}.md#${pool}) \n`;

      const contractsByAddress = generateContractsByAddress(
        poolPermitsByContract.contracts,
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

      // fill pool table
      let tableBody = '';
      Object.keys(poolPermitsByContract.contracts).forEach((contractName) => {
        const contract = poolPermitsByContract.contracts[contractName];

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
                  explorerAddressUrlComposer(contract.proxyAdmin, network) +
                  ')'
                : '-'
            }`,
            `${modifier.modifier}`,
            `${modifier.address
              .map((modifierAddress) => {
                return (
                  '[' +
                  (contractsByAddress[modifierAddress] ?? modifierAddress) +
                  '](' +
                  explorerAddressUrlComposer(modifierAddress, network) +
                  ')'
                );
              })
              .join(', ')}`,
            modifier.functions.join(', '),
          ]);
          tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
        });
      });

      contractTable += tableBody;
      readmeByNetwork += contractTable + '\n';

      let adminTable = `## Admins \n`;
      const adminsHeaderTitles = ['Role', 'Contract'];
      const adminHeader = getTableHeader(adminsHeaderTitles);
      adminTable += adminHeader;

      let guardianTable = `## Guardians \n`;
      const guardianHeaderTitles = ['Guardian', 'Owners'];
      const guardianHeader = getTableHeader(guardianHeaderTitles);
      guardianTable += guardianHeader;

      const guardians: string[] = [];

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
                  (contractsByAddress[info.address] ?? info.address) +
                  '](' +
                  explorerAddressUrlComposer(info.address, network) +
                  ')'
                );
              })
              .join(', ')}`,
          ]);
          adminTable += getLineSeparator(adminsHeaderTitles.length);
          roleInfo.forEach((info) => {
            if (
              guardians.indexOf(info.address) === -1 &&
              info.owners.length > 0
            ) {
              guardians.push(info.address);
              guardianTable += getTableBody([
                `[${
                  contractsByAddress[info.address] ?? info.address
                }](${explorerAddressUrlComposer(info.address, network)})`,
                `${info.owners
                  .map((owner) => {
                    return (
                      '[' +
                      (contractsByAddress[owner] ?? owner) +
                      '](' +
                      explorerAddressUrlComposer(owner, network) +
                      ')'
                    );
                  })
                  .join(', ')}`,
              ]);
              guardianTable += getLineSeparator(guardianHeaderTitles.length);
            }
          });
        });

        readmeByNetwork += adminTable + '\n';
        readmeByNetwork += guardianTable + '\n';
      }
    });

    saveJson(
      `./out/${ChainIdToNetwork[Number(network)].toUpperCase()}.md`,
      readmeByNetwork,
    );
  });

  saveJson('./out/DIRECTORY.md', readmeDirectory);
};

generateTables();

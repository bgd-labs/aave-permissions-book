import { getAllPermissionsJson, saveJson } from '../helpers/fileSystem';
import { networkConfigs, Pools } from '../helpers/configs';
import { explorerAddressUrlComposer } from '../helpers/explorer';
import { ChainId, ChainIdToNetwork } from '@aave/contract-helpers';
import { generateContractsByAddress } from '../helpers/jsonParsers';
import {
  getLineSeparator,
  getTableBody,
  getTableHeader,
} from '../helpers/tables';
import { utils } from 'ethers';
import { getPrincipalReadme } from './readme';
import {
  AddressInfo,
  ContractsByAddress,
  PoolGuardians,
} from '../helpers/types';

export const generateTableAddress = (
  address: string | undefined,
  addressesNames: Record<string, string>,
  contractsByAddress: ContractsByAddress,
  poolGuardians: PoolGuardians,
  network: string,
): string => {
  const checkSummedAddress = address ? utils.getAddress(address) : null;

  return checkSummedAddress
    ? '[' +
        (contractsByAddress[checkSummedAddress]
          ? contractsByAddress[checkSummedAddress]
          : poolGuardians[checkSummedAddress]
          ? addressesNames[checkSummedAddress]
            ? addressesNames[checkSummedAddress]
            : `${checkSummedAddress} (Safe)`
          : checkSummedAddress) +
        '](' +
        (contractsByAddress[checkSummedAddress] &&
        (contractsByAddress[checkSummedAddress] === 'ShortExecutor' ||
          contractsByAddress[checkSummedAddress] === 'LongExecutor')
          ? explorerAddressUrlComposer(
              checkSummedAddress,
              ChainId.mainnet.toString(),
            )
          : explorerAddressUrlComposer(checkSummedAddress, network)) +
        ')'
    : '-';
};
export const generateTables = async () => {
  const aavePermissionsList = getAllPermissionsJson();

  // create readme string
  let readmeDirectoryTable = '';
  const readmeDirectoryTableHeaderTitles = ['Network', 'System type', 'Tables'];
  const readmeDirectoryHeader = getTableHeader(
    readmeDirectoryTableHeaderTitles,
  );
  readmeDirectoryTable += readmeDirectoryHeader;

  const mainnetPermissions = aavePermissionsList[ChainId.mainnet.toString()];

  for (let network of Object.keys(aavePermissionsList)) {
    const networkName = ChainIdToNetwork[Number(network)].toUpperCase();
    const networkPermits = aavePermissionsList[network];
    const addressesNames = networkConfigs[network].addressesNames || {};
    for (let pool of Object.keys(networkPermits)) {
      // create network Readme with pool tables
      let readmeByNetwork = `# ${networkName} \n`;

      const poolGuardians: Record<string, string[]> = {};
      const poolPermitsByContract = networkPermits[pool];
      // create pool table
      readmeByNetwork += `## ${pool} \n`;

      let contractsByAddress = generateContractsByAddress(
        poolPermitsByContract.contracts,
      );

      // add gov contracts to contractsByAddresses
      if (pool !== Pools.GOV_V2) {
        contractsByAddress = generateContractsByAddress({
          ...poolPermitsByContract.contracts,
          ...mainnetPermissions[Pools.GOV_V2].contracts,
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

        if (contract.modifiers.length === 0) {
          tableBody += getTableBody([
            `[${contractName}](${explorerAddressUrlComposer(
              contract.address,
              network,
            )})`,
            `${generateTableAddress(
              contract.proxyAdmin,
              addressesNames,
              contractsByAddress,
              poolGuardians,
              network,
            )}`,
            `-`,
            `-`,
            '-',
          ]);
          tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
        }
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
            `${generateTableAddress(
              contract.proxyAdmin,
              addressesNames,
              contractsByAddress,
              poolGuardians,
              network,
            )}`,
            `${modifier.modifier}`,
            `${modifier.addresses
              .map((modifierAddress: AddressInfo) =>
                generateTableAddress(
                  modifierAddress.address,
                  addressesNames,
                  contractsByAddress,
                  poolGuardians,
                  network,
                ),
              )
              .join(', ')}`,
            modifier?.functions ? modifier.functions.join(', ') : '',
          ]);
          tableBody += getLineSeparator(contractsModifiersHeaderTitles.length);
        }
      }

      contractTable += tableBody;

      readmeDirectoryTable += getTableBody([
        networkName,
        pool,
        `[Permissions](./out/${networkName}-${pool}.md#contracts)`,
      ]);
      readmeDirectoryTable += getLineSeparator(
        readmeDirectoryTableHeaderTitles.length,
      );

      readmeByNetwork += contractTable + '\n';

      if (Object.keys(poolGuardians).length > 0) {
        let guardianTable = `### Guardians \n`;
        const guardianHeaderTitles = ['Guardian', 'Address', 'Owners'];
        const guardianHeader = getTableHeader(guardianHeaderTitles);
        guardianTable += guardianHeader;

        Object.keys(poolGuardians).forEach((guardian) => {
          guardianTable += getTableBody([
            `[${
              addressesNames[utils.getAddress(guardian)]
                ? addressesNames[utils.getAddress(guardian)]
                : `${utils.getAddress(guardian)} (Safe)`
            }](${explorerAddressUrlComposer(guardian, network)})`,
            guardian,
            `${poolGuardians[guardian]
              .map(
                (owner) =>
                  `[${owner}](${explorerAddressUrlComposer(owner, network)})`,
              )
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
        networkConfigs[network].pools[pool].aclBlock &&
        poolPermitsByContract.roles &&
        poolPermitsByContract.roles.role
      ) {
        Object.keys(poolPermitsByContract.roles.role).forEach((role) => {
          const roleAddresses = poolPermitsByContract.roles?.role[role] || [];
          adminTable += getTableBody([
            role,
            `${roleAddresses
              .map((roleAddress: string) =>
                generateTableAddress(
                  roleAddress,
                  addressesNames,
                  contractsByAddress,
                  poolGuardians,
                  network,
                ),
              )
              .join(', ')}`,
          ]);
          adminTable += getLineSeparator(adminsHeaderTitles.length);
        });

        readmeByNetwork += adminTable + '\n';
      }

      saveJson(`./out/${networkName}-${pool}.md`, readmeByNetwork);
    }
  }

  saveJson('./README.md', getPrincipalReadme(readmeDirectoryTable));
};

generateTables();

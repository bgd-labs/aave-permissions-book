import { Contracts, PermissionsJson } from './types.js';
import {
  getAllPermissionsJson,
  getPermissionsByNetwork,
  saveJson,
} from './fileSystem.js';

export type MethodsByModifier = Record<string, Record<string, string[]>>;

export const generateRoles = (
  functionPermissions: PermissionsJson,
): MethodsByModifier => {
  const permissionsObj: MethodsByModifier = {};

  functionPermissions.forEach(({ contract, functions }, index) => {
    permissionsObj[contract] = {};
    functionPermissions[index].functions.forEach(({ name, roles }) => {
      roles.forEach((role) => {
        if (!permissionsObj[contract][role]) {
          permissionsObj[contract][role] = [];
        }
        permissionsObj[contract][role].push(name);
      });
    });
  });

  return permissionsObj;
};

export const generateContractsByAddress = (
  contracts: Contracts,
): Record<string, string> => {
  const contractsByAddress: Record<string, string> = {};
  Object.keys(contracts).forEach((contract) => {
    contractsByAddress[contracts[contract].address] = contract;
  });

  return contractsByAddress;
};

export const overwriteBaseTenderlyPool = async (
  destinationPoolKey: string,
  network: string,
  basePoolKey: string,
) => {
  console.log('--------- tenderly::: ', destinationPoolKey);
  const permissions = getPermissionsByNetwork(network);
  // console.log('permits: ', permissions);
  const basePoolPermissions = permissions[basePoolKey];
  // console.log('======;;;;;;;;');
  // copy base pool to destionation pool
  permissions[destinationPoolKey] = basePoolPermissions;
  // console.log('=====', permissions);
  saveJson(
    `./out/permissions/${network}-permissions.json`,
    JSON.stringify(permissions, null, 2),
  );
};

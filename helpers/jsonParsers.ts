import { Contracts, PermissionsJson } from './types.js';

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

import * as fs from 'fs';
import { FullPermissions, PermissionsJson } from './types.js';

export const saveJson = (filePath: string, stringifiedJson: string) => {
  fs.writeFileSync(filePath, stringifiedJson);
};

export const getAllPermissionsJson = (): FullPermissions => {
  try {
    const file = fs.readFileSync('out/aavePermissionList.json');
    // @ts-ignore
    return JSON.parse(file);
  } catch (error) {
    return {};
  }
};

export const getStaticPermissionsJson = (path: string): PermissionsJson => {
  try {
    const file = fs.readFileSync(path);
    // @ts-ignore
    return JSON.parse(file);
  } catch (error) {
    console.error(new Error(`unable to fetch ${path} with error: ${error}`));
    return [];
  }
};

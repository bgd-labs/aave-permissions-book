import * as fs from 'fs';
import { FullPermissions } from './configs';

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

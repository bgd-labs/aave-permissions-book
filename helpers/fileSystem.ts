import * as fs from 'fs';

export const saveJson = (filePath: string, stringifiedJson: string) => {
  fs.writeFileSync(filePath, stringifiedJson);
};

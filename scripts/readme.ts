export const getPrincipalReadme = (directory: string): string => {
  let readme = `
# Aave Permissions Book

Aave protocol permissions tables.

## Table of contents
- [Description](#Description)
- [Usage](#Usage)
- [Permissions Tables](#Permissions Tables)
- [License](#License)

## Description

On the Aave Protocol contracts there can be found different permissions to execute its different methods. This permissions are also hold by different addresses, those being smart contracts, wallets or multi-sigs.
This repository contains and easy directory of tables showing which permissions are needed to execute the functions of the different contracts conforming the Aave Protocol, and the owners of said permissions.
          
    
## Usage

To be able to generate the permissions json, and the subsequent permissions tables:

### Installation

\`\`\`
  npm install
  cp .env.example .env // this will copy the example .env to the actual .env
\`\`\`

### Scripts

To generate the permissions json, execute:
\`\`\`
  npm run modifiers:generate
\`\`\`

To generate the permissions tables, execute:
\`\`\`
  npm run tables:create
\`\`\`


## Permissions Tables

${directory}

## License
This repository is under [MIT License](./LICENSE)
`;
  return readme;
};


# Aave Permissions Book

Aave protocol permissions tables.

## Table of contents
- [Description](#Description)
- [Usage](#Usage)
- [Permissions Tables](#PermissionsTables)
- [License](#License)

## Description

On the Aave Protocol contracts there can be found different permissions to execute its different methods. This permissions are also hold by different addresses, those being smart contracts, wallets or multi-sigs.
This repository contains and easy directory of tables showing which permissions are needed to execute the functions of the different contracts conforming the Aave Protocol, and the owners of said permissions.
          
    
## Usage

To be able to generate the permissions json, and the subsequent permissions tables:

### Installation

```
  npm install
  cp .env.example .env // this will copy the example .env to the actual .env
```

### Scripts

To generate the permissions json, execute:
```
  npm run modifiers:generate
```

To generate the permissions tables, execute:
```
  npm run tables:create
```


## Permissions Tables

- MAINNET 
  - [V3](./MAINNET-V3.md) 
    - [Contracts](./MAINNET-V3.md#contracts) 
    - [Admins](./MAINNET-V3.md#Admins) 
  - [V2](./MAINNET-V2.md) 
    - [Contracts](./MAINNET-V2.md#contracts) 
    - [Guardians](./MAINNET-V2.md#Guardians) 
  - [ARC](./MAINNET-ARC.md) 
    - [Contracts](./MAINNET-ARC.md#contracts) 
    - [Guardians](./MAINNET-ARC.md#Guardians) 
  - [AMM](./MAINNET-AMM.md) 
    - [Contracts](./MAINNET-AMM.md#contracts) 
    - [Guardians](./MAINNET-AMM.md#Guardians) 
  - [GOV_V2](./MAINNET-GOV_V2.md) 
    - [Contracts](./MAINNET-GOV_V2.md#contracts) 
    - [Guardians](./MAINNET-GOV_V2.md#Guardians) 
- OPTIMISM 
  - [V3](./OPTIMISM-V3.md) 
    - [Contracts](./OPTIMISM-V3.md#contracts) 
    - [Guardians](./OPTIMISM-V3.md#Guardians) 
    - [Admins](./OPTIMISM-V3.md#Admins) 
- POLYGON 
  - [V3](./POLYGON-V3.md) 
    - [Contracts](./POLYGON-V3.md#contracts) 
    - [Guardians](./POLYGON-V3.md#Guardians) 
    - [Admins](./POLYGON-V3.md#Admins) 
  - [V2](./POLYGON-V2.md) 
    - [Contracts](./POLYGON-V2.md#contracts) 
    - [Guardians](./POLYGON-V2.md#Guardians) 
- FANTOM_OPERA 
  - [V3](./FANTOM_OPERA-V3.md) 
    - [Contracts](./FANTOM_OPERA-V3.md#contracts) 
    - [Guardians](./FANTOM_OPERA-V3.md#Guardians) 
    - [Admins](./FANTOM_OPERA-V3.md#Admins) 
- ARBITRUM_ONE 
  - [V3](./ARBITRUM_ONE-V3.md) 
    - [Contracts](./ARBITRUM_ONE-V3.md#contracts) 
    - [Guardians](./ARBITRUM_ONE-V3.md#Guardians) 
    - [Admins](./ARBITRUM_ONE-V3.md#Admins) 
- AVALANCHE 
  - [V3](./AVALANCHE-V3.md) 
    - [Contracts](./AVALANCHE-V3.md#contracts) 
    - [Guardians](./AVALANCHE-V3.md#Guardians) 
    - [Admins](./AVALANCHE-V3.md#Admins) 
  - [V2](./AVALANCHE-V2.md) 
    - [Contracts](./AVALANCHE-V2.md#contracts) 
    - [Guardians](./AVALANCHE-V2.md#Guardians) 


## License
This repository is under [MIT License](./LICENSE)


![Aave Permissions Book](./permissions_banner.jpg)
# Aave Permissions Book

Aave protocol permissions tables.

## Table of contents
- [Description](#Description)
- [Permissions](#Permissions)
- [Usage](#Usage)
- [License](#License)

## Description

On the Aave Protocol contracts there can be found different permissions to execute its different methods. This permissions are also hold by different addresses, those being smart contracts, wallets or multi-sigs.
This repository contains and easy directory of tables showing which permissions are needed to execute the functions of the different contracts conforming the Aave Protocol, and the owners of said permissions.


## Permissions

- MAINNET 
  - [V3](./out/MAINNET-V3.md) 
    - [Contracts](./out/MAINNET-V3.md#contracts) 
    - [Guardians](./out/MAINNET-V3.md#Guardians) 
    - [Admins](./out/MAINNET-V3.md#Admins) 
  - [V2](./out/MAINNET-V2.md) 
    - [Contracts](./out/MAINNET-V2.md#contracts) 
    - [Guardians](./out/MAINNET-V2.md#Guardians) 
  - [ARC](./out/MAINNET-ARC.md) 
    - [Contracts](./out/MAINNET-ARC.md#contracts) 
    - [Guardians](./out/MAINNET-ARC.md#Guardians) 
  - [AMM](./out/MAINNET-AMM.md) 
    - [Contracts](./out/MAINNET-AMM.md#contracts) 
    - [Guardians](./out/MAINNET-AMM.md#Guardians) 
  - [GOV_V2](./out/MAINNET-GOV_V2.md) 
    - [Contracts](./out/MAINNET-GOV_V2.md#contracts) 
    - [Guardians](./out/MAINNET-GOV_V2.md#Guardians) 
- OPTIMISM 
  - [V3](./out/OPTIMISM-V3.md) 
    - [Contracts](./out/OPTIMISM-V3.md#contracts) 
    - [Guardians](./out/OPTIMISM-V3.md#Guardians) 
    - [Admins](./out/OPTIMISM-V3.md#Admins) 
- POLYGON 
  - [V3](./out/POLYGON-V3.md) 
    - [Contracts](./out/POLYGON-V3.md#contracts) 
    - [Guardians](./out/POLYGON-V3.md#Guardians) 
    - [Admins](./out/POLYGON-V3.md#Admins) 
  - [V2](./out/POLYGON-V2.md) 
    - [Contracts](./out/POLYGON-V2.md#contracts) 
    - [Guardians](./out/POLYGON-V2.md#Guardians) 
- FANTOM_OPERA 
  - [V3](./out/FANTOM_OPERA-V3.md) 
    - [Contracts](./out/FANTOM_OPERA-V3.md#contracts) 
    - [Guardians](./out/FANTOM_OPERA-V3.md#Guardians) 
    - [Admins](./out/FANTOM_OPERA-V3.md#Admins) 
- ARBITRUM_ONE 
  - [V3](./out/ARBITRUM_ONE-V3.md) 
    - [Contracts](./out/ARBITRUM_ONE-V3.md#contracts) 
    - [Guardians](./out/ARBITRUM_ONE-V3.md#Guardians) 
    - [Admins](./out/ARBITRUM_ONE-V3.md#Admins) 
- AVALANCHE 
  - [V3](./out/AVALANCHE-V3.md) 
    - [Contracts](./out/AVALANCHE-V3.md#contracts) 
    - [Guardians](./out/AVALANCHE-V3.md#Guardians) 
    - [Admins](./out/AVALANCHE-V3.md#Admins) 
  - [V2](./out/AVALANCHE-V2.md) 
    - [Contracts](./out/AVALANCHE-V2.md#contracts) 
    - [Guardians](./out/AVALANCHE-V2.md#Guardians) 
  - [TENDERLY](./out/AVALANCHE-TENDERLY.md) 
    - [Contracts](./out/AVALANCHE-TENDERLY.md#contracts) 
    - [Guardians](./out/AVALANCHE-TENDERLY.md#Guardians) 
       
    
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



## License
This repository is under [MIT License](./LICENSE)

# BOB 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://explorer.gobob.xyz//address/0xb2C672931Bd1Da226e29997Ec8cEB60Fb1DA3959) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  Not owned | |--------|--------|
|  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  not upgradeable | |--------|--------|
|  [Bob native adapter](https://explorer.gobob.xyz//address/0x2171E8AD4045342AF92DdC1227ADC659f2a00535) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  Not owned | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://explorer.gobob.xyz//address/0xb2C672931Bd1Da226e29997Ec8cEB60Fb1DA3959) |  - |  onlyRetryGuardian |  [BGD](https://explorer.gobob.xyz//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://explorer.gobob.xyz//address/0xb2C672931Bd1Da226e29997Ec8cEB60Fb1DA3959) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Bob](https://explorer.gobob.xyz//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://explorer.gobob.xyz//address/0xb2C672931Bd1Da226e29997Ec8cEB60Fb1DA3959) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  [0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc](https://explorer.gobob.xyz//address/0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc) |  onlyOwner |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  [0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc](https://explorer.gobob.xyz//address/0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc) |  onlyGuardian |  [Aave Governance Guardian Bob](https://explorer.gobob.xyz//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  [0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc](https://explorer.gobob.xyz//address/0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Bob](https://explorer.gobob.xyz//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6), [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  [0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc](https://explorer.gobob.xyz//address/0x4a756221AD070BA472bA59Cd6D5e7dd6D2c866cc) |  onlyRescueGuardian |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  - |  onlyOwner |  [PayloadsController](https://explorer.gobob.xyz//address/0x17fa87007bfF1dC7e6b3a36ED936E6355e37237C) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Bob native adapter](https://explorer.gobob.xyz//address/0x2171E8AD4045342AF92DdC1227ADC659f2a00535) |  - |  trustedRemote |  [CrossChainController(Eth)](https://explorer.gobob.xyz//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  [0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18](https://explorer.gobob.xyz//address/0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18) |  onlyOwner |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  [0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18](https://explorer.gobob.xyz//address/0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18) |  onlyOwnerOrGuardian |  [Aave Granular Guardian Bob](https://explorer.gobob.xyz//address/0xb2C672931Bd1Da226e29997Ec8cEB60Fb1DA3959), [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  [0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18](https://explorer.gobob.xyz//address/0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18) |  onlyRescueGuardian |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  [0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18](https://explorer.gobob.xyz//address/0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://explorer.gobob.xyz//address/0xf630C8A7bC033FD20fcc45d8B43bFe92dE73154F) |  [0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18](https://explorer.gobob.xyz//address/0x628ca0cB6e8A163bB1C4a50B75D7D4E7D38e8b18) |  onlyApprovedBridges |  [Bob native adapter](https://explorer.gobob.xyz//address/0x2171E8AD4045342AF92DdC1227ADC659f2a00535) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [BGD](https://explorer.gobob.xyz//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) |  2/3 |  0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://explorer.gobob.xyz//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://explorer.gobob.xyz//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://explorer.gobob.xyz//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Bob](https://explorer.gobob.xyz//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  5/9 |  0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6 |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://explorer.gobob.xyz//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://explorer.gobob.xyz//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://explorer.gobob.xyz//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://explorer.gobob.xyz//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://explorer.gobob.xyz//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://explorer.gobob.xyz//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://explorer.gobob.xyz//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://explorer.gobob.xyz//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://explorer.gobob.xyz//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://explorer.gobob.xyz//address/0x90800d1F54384523723eD3962c7Cd59d7866c83d) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Bob](https://explorer.gobob.xyz//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://explorer.gobob.xyz//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) | |--------|--------|


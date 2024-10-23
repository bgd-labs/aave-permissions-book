# ARBITRUM_ONE 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  not upgradeable | |--------|--------|
|  [Pool](https://arbiscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  Governance | |--------|--------|
|  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  Governance | |--------|--------|
|  [AaveOracle](https://arbiscan.io/address/0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7) |  not upgradeable | |--------|--------|
|  [Collector](https://arbiscan.io/address/0x053D55f9B5AF8694c503EB288a1B7E552f590710) |  Governance | |--------|--------|
|  [RewardsController](https://arbiscan.io/address/0x929EC64c34a17401F460460D4B9390518E5B473e) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://arbiscan.io/address/0x5760E34c4003752329bC77790B1De44C2799F8C3) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://arbiscan.io/address/0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://arbiscan.io/address/0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://arbiscan.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://arbiscan.io/address/0x770ef9f4fe897e59daCc474EF11238303F9552b6) |  not upgradeable | |--------|--------|
|  [RatesFactory](https://arbiscan.io/address/0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896) |  Governance | |--------|--------|
|  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  not upgradeable | |--------|--------|
|  [ACLManager](https://arbiscan.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://arbiscan.io/address/0xADf86b537eF08591c2777E144322E8b0Ca7E82a7) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://arbiscan.io/address/0xe59470B3BE3293534603487E00A44C72f2CD466d) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://arbiscan.io/address/0x4922093c476CfbCF903C7C4082d2D64bAE8A37cE) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  Governance | |--------|--------|
|  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  not upgradeable | |--------|--------|
|  [Arbitrum native adapter](https://arbiscan.io/address/0xc8a2ADC4261c6b669CdFf69E717E77C9cFeB420d) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  Governance | |--------|--------|
|  updateReserveCaps |  Governance,Multi-sig | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance | |--------|--------|
|  upgradeAaveOracles |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Governance,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://arbiscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolConfigurator |  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://arbiscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://arbiscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327), [CapPlusRiskSteward](https://arbiscan.io/address/0xADf86b537eF08591c2777E144322E8b0Ca7E82a7), [FreezeSteward](https://arbiscan.io/address/0xe59470B3BE3293534603487E00A44C72f2CD466d) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327), [Aave Protocol Guardian Arbitrum](https://arbiscan.io/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://arbiscan.io/address/0xb56c2F0B653B2e0b10C9b928C8580Ac5Df02C7C7) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://arbiscan.io/address/0x053D55f9B5AF8694c503EB288a1B7E552f590710) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://arbiscan.io/address/0x053D55f9B5AF8694c503EB288a1B7E552f590710) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://arbiscan.io/address/0x929EC64c34a17401F460460D4B9390518E5B473e) |  [PoolAddressesProvider](https://arbiscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmissionManager |  [EmissionManager](https://arbiscan.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://arbiscan.io/address/0x5760E34c4003752329bC77790B1De44C2799F8C3) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://arbiscan.io/address/0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://arbiscan.io/address/0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://arbiscan.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://arbiscan.io/address/0x770ef9f4fe897e59daCc474EF11238303F9552b6) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://arbiscan.io/address/0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://arbiscan.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B) |  - |  onlyRole |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://arbiscan.io/address/0xADf86b537eF08591c2777E144322E8b0Ca7E82a7) |  - |  onlyRiskCouncil |  [Risk Council](https://arbiscan.io/address/0x3Be327F22eB4BD8042e6944073b8826dCf357Aa2) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://arbiscan.io/address/0xe59470B3BE3293534603487E00A44C72f2CD466d) |  - |  onlyEmergencyAdmin |  [Aave Protocol Guardian Arbitrum](https://arbiscan.io/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setFreeze | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://arbiscan.io/address/0x4922093c476CfbCF903C7C4082d2D64bAE8A37cE) |  - |  onlyRetryGuardian |  [BGD](https://arbiscan.io/address/0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://arbiscan.io/address/0x4922093c476CfbCF903C7C4082d2D64bAE8A37cE) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Arbitrum](https://arbiscan.io/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://arbiscan.io/address/0x4922093c476CfbCF903C7C4082d2D64bAE8A37cE) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyGuardian |  [Aave Governance Guardian Arbitrum](https://arbiscan.io/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Arbitrum](https://arbiscan.io/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b), [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  - |  onlyOwner |  [PayloadsController](https://arbiscan.io/address/0x89644CA1bB8064760312AE4F03ea41b05dA3637C) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Arbitrum native adapter](https://arbiscan.io/address/0xc8a2ADC4261c6b669CdFf69E717E77C9cFeB420d) |  - |  trustedRemote |  [CrossChainController(Eth)](https://arbiscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [BGD](https://arbiscan.io/address/0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959), [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://arbiscan.io/address/0xCbFB78a3Eeaa611b826E37c80E4126c8787D29f0) |  [ProxyAdmin](https://arbiscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedBridges |  [Arbitrum native adapter](https://arbiscan.io/address/0xc8a2ADC4261c6b669CdFf69E717E77C9cFeB420d) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Arbitrum](https://arbiscan.io/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  5/9 |  0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://arbiscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://arbiscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://arbiscan.io/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://arbiscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://arbiscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://arbiscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://arbiscan.io/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://arbiscan.io/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://arbiscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://arbiscan.io/address/0x3Be327F22eB4BD8042e6944073b8826dCf357Aa2) |  1/1 |  0x3Be327F22eB4BD8042e6944073b8826dCf357Aa2 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://arbiscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://arbiscan.io/address/0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959) |  2/3 |  0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://arbiscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://arbiscan.io/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://arbiscan.io/address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Arbitrum](https://arbiscan.io/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  5/9 |  0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://arbiscan.io/address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272](https://arbiscan.io/address/0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://arbiscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27](https://arbiscan.io/address/0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://arbiscan.io/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://arbiscan.io/address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://arbiscan.io/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://arbiscan.io/address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://arbiscan.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Arbitrum](https://arbiscan.io/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  RISK_ADMIN |  [CapPlusRiskSteward](https://arbiscan.io/address/0xADf86b537eF08591c2777E144322E8b0Ca7E82a7), [FreezeSteward](https://arbiscan.io/address/0xe59470B3BE3293534603487E00A44C72f2CD466d) | |--------|--------|
|  FLASH_BORROWER |  [0x219ac6dA971dE6d943cffD1BD62abde71525d382](https://arbiscan.io/address/0x219ac6dA971dE6d943cffD1BD62abde71525d382), [0x1561EAF39c98d45C55C7dC605E627672F4406819](https://arbiscan.io/address/0x1561EAF39c98d45C55C7dC605E627672F4406819), [0x9E8e9D6b0D24216F59043db68BDda1620892f549](https://arbiscan.io/address/0x9E8e9D6b0D24216F59043db68BDda1620892f549), [0x49d9409111a6363d82C4371fFa43fAEA660C917B](https://arbiscan.io/address/0x49d9409111a6363d82C4371fFa43fAEA660C917B) | |--------|--------|
|  BRIDGE |   | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://arbiscan.io/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Arbitrum](https://arbiscan.io/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://arbiscan.io/address/0x1Fcd437D8a9a6ea68da858b78b6cf10E8E0bF959) | |--------|--------|


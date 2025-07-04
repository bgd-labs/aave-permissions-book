# SONEIUM 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  not upgradeable | |--------|--------|
|  [Pool](https://sonicscan.org//address/0xDd3d7A7d03D9fD9ef45f3E587287922eF65CA38B) |  Governance | |--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  Governance | |--------|--------|
|  [AaveOracle](https://sonicscan.org//address/0x20040a64612555042335926d72B4E5F667a67fA1) |  not upgradeable | |--------|--------|
|  [RewardsController](https://sonicscan.org//address/0xE9Dfe1cbD5F10C56c1466F6AC88e1Fb304Be3780) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://sonicscan.org//address/0x6376D4df995f32f308f2d5049a7a320943023232) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://sonicscan.org//address/0x2026b787C82331c364EAc13bf761Ca75eDeb0A4B) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://sonicscan.org//address/0x629A5a607aC4901252e4C48a0Fde156785598F5b) |  not upgradeable | |--------|--------|
|  [ACLManager](https://sonicscan.org//address/0x7635bFF69E52023aB76267ab1EFf63434cdCe458) |  not upgradeable | |--------|--------|
|  [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) |  not upgradeable | |--------|--------|
|  [Collector](https://sonicscan.org//address/0xc7B3cc5F5988613b0D620623C514EDFB32539720) |  Governance | |--------|--------|
|  [CollectorProxyAdmin](https://sonicscan.org//address/0xd1050fc8e4bea27170a4db11eab7553beb0e13b6) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0xD8E6956718784B914740267b7A50B952fb516656) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  Governance | |--------|--------|
|  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2ba11f27ae9c11eb5a6c453c2421f6c0b29c700) |  not upgradeable | |--------|--------|
|  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  not upgradeable | |--------|--------|
|  [Soneium native adapter](https://sonicscan.org//address/0x5698e43Ef1be85C68Dec568B5925dD5DB7903e39) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  Governance | |--------|--------|
|  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bf010e44c9164a59a385a35c21125c3a91e) |  not upgradeable | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  Governance,Multi-sig | |--------|--------|
|  updateReserveCaps |  Governance,Multi-sig | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance,Multi-sig | |--------|--------|
|  upgradeAaveOracles |  Governance,Multi-sig | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Governance,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,Multi-sig | |--------|--------|
|  reserveListing |  Governance,Multi-sig | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|
|  updateRiskParameters |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0xDd3d7A7d03D9fD9ef45f3E587287922eF65CA38B) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyPoolConfigurator |  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0xDd3d7A7d03D9fD9ef45f3E587287922eF65CA38B) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0xDd3d7A7d03D9fD9ef45f3E587287922eF65CA38B) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1), [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1), [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x1607FCeEc8dEbA4d5Da66D620b2363066d025a02) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://sonicscan.org//address/0x20040a64612555042335926d72B4E5F667a67fA1) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [RewardsController](https://sonicscan.org//address/0xE9Dfe1cbD5F10C56c1466F6AC88e1Fb304Be3780) |  [PoolAddressesProvider](https://sonicscan.org//address/0x82405D1a189bd6cE4667809C35B37fBE136A4c5B) |  onlyEmissionManager |  [EmissionManager](https://sonicscan.org//address/0x2026b787C82331c364EAc13bf761Ca75eDeb0A4B) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://sonicscan.org//address/0x6376D4df995f32f308f2d5049a7a320943023232) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://sonicscan.org//address/0x2026b787C82331c364EAc13bf761Ca75eDeb0A4B) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://sonicscan.org//address/0x629A5a607aC4901252e4C48a0Fde156785598F5b) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ACLManager](https://sonicscan.org//address/0x7635bFF69E52023aB76267ab1EFf63434cdCe458) |  - |  onlyRole |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  setRiskConfig, setAddressRestricted | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) |  - |  onlyRiskCouncil |  [Risk Council](https://sonicscan.org//address/0x45cCB319C57A6Ae0d53C4dB1a151dF75015103b1) |  updateCaps, updateRates, updateCollateralSide, updateLstPriceCaps, updateStablePriceCaps | |--------|--------|--------|--------|--------|
|  [Collector](https://sonicscan.org//address/0xc7B3cc5F5988613b0D620623C514EDFB32539720) |  [CollectorProxyAdmin](https://sonicscan.org//address/0xd1050fc8e4BEA27170a4dB11EAB7553BEb0e13B6) |  onlyFundsAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://sonicscan.org//address/0xc7B3cc5F5988613b0D620623C514EDFB32539720) |  [CollectorProxyAdmin](https://sonicscan.org//address/0xd1050fc8e4BEA27170a4dB11EAB7553BEb0e13B6) |  onlyAdminOrRecipient |  [CollectorProxyAdmin](https://sonicscan.org//address/0xd1050fc8e4BEA27170a4dB11EAB7553BEb0e13B6), [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [CollectorProxyAdmin](https://sonicscan.org//address/0xd1050fc8e4bea27170a4db11eab7553beb0e13b6) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://sonicscan.org//address/0xD8E6956718784B914740267b7A50B952fb516656) |  - |  onlyRetryGuardian |  [BGD](https://sonicscan.org//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0xD8E6956718784B914740267b7A50B952fb516656) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Soneium](https://sonicscan.org//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0xD8E6956718784B914740267b7A50B952fb516656) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2Ba11f27ae9c11eB5a6C453c2421F6c0B29c700) |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2Ba11f27ae9c11eB5a6C453c2421F6c0B29c700) |  onlyGuardian |  [Aave Governance Guardian Soneium](https://sonicscan.org//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2Ba11f27ae9c11eB5a6C453c2421F6c0B29c700) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Soneium](https://sonicscan.org//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6), [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2Ba11f27ae9c11eB5a6C453c2421F6c0B29c700) |  onlyRescueGuardian |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xf2ba11f27ae9c11eb5a6c453c2421f6c0b29c700) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  - |  onlyOwner |  [PayloadsController](https://sonicscan.org//address/0x44D73D7C4b2f98F426Bf8B5e87628d9eE38ef0Cf) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Soneium native adapter](https://sonicscan.org//address/0x5698e43Ef1be85C68Dec568B5925dD5DB7903e39) |  - |  trustedRemote |  [CrossChainController(Eth)](https://sonicscan.org//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bF010e44C9164A59a385a35c21125C3A91E) |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bF010e44C9164A59a385a35c21125C3A91E) |  onlyOwnerOrGuardian |  [Aave Granular Guardian Soneium](https://sonicscan.org//address/0xD8E6956718784B914740267b7A50B952fb516656), [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bF010e44C9164A59a385a35c21125C3A91E) |  onlyRescueGuardian |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bF010e44C9164A59a385a35c21125C3A91E) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0xD92b37a5114b33F668D274Fb48f23b726a854d6E) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bF010e44C9164A59a385a35c21125C3A91E) |  onlyApprovedBridges |  [Soneium native adapter](https://sonicscan.org//address/0x5698e43Ef1be85C68Dec568B5925dD5DB7903e39) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x68e74bf010e44c9164a59a385a35c21125c3a91e) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) |  5/9 |  0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://sonicscan.org//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://sonicscan.org//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://sonicscan.org//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://sonicscan.org//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://sonicscan.org//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://sonicscan.org//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://sonicscan.org//address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://sonicscan.org//address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://sonicscan.org//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://sonicscan.org//address/0x45cCB319C57A6Ae0d53C4dB1a151dF75015103b1) |  2/2 |  0x45cCB319C57A6Ae0d53C4dB1a151dF75015103b1 |  [0xc2cf0387f2a83A7F5C6675F4CDe7F367ea1B989a](https://sonicscan.org//address/0xc2cf0387f2a83A7F5C6675F4CDe7F367ea1B989a), [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://sonicscan.org//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://sonicscan.org//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) |  2/3 |  0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://sonicscan.org//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://sonicscan.org//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://sonicscan.org//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Soneium](https://sonicscan.org//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) |  5/9 |  0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6 |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://sonicscan.org//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://sonicscan.org//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://sonicscan.org//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://sonicscan.org//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://sonicscan.org//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://sonicscan.org//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://sonicscan.org//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://sonicscan.org//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://sonicscan.org//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A), [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Soneium](https://sonicscan.org//address/0xEf323B194caD8e02D9E5D8F07B34f625f1c088f1) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |  [Manual AGRS](https://sonicscan.org//address/0xD9145b5F45Ad4519c7ACcD6E0A4A82e83bB8A6Dc) | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Soneium](https://sonicscan.org//address/0x19CE4363FEA478Aa04B9EA2937cc5A2cbcD44be6) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://sonicscan.org//address/0xdc62E0e65b2251Dc66404ca717FD32dcC365Be3A) | |--------|--------|

### Collector Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) | |--------|--------|
|  FUNDS_ADMIN_ROLE |  [Executor_lvl1](https://sonicscan.org//address/0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A) | |--------|--------|


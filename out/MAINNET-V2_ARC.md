# MAINNET 
## V2_ARC 
### Decentralization
| contract |upgradeable |owned by |
|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  false |  Multi-sig | |--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x37D7306019a38Af123e4b245Eb6C28AF552e0bB0) |  true |  Multi-sig | |--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  true |  Multi-sig | |--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xB8a7bc0d13B1f5460513040a97F404b4fea7D2f3) |  false |  Not owned | |--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0xfA3c34d734fe0106C87917683ca45dffBe3b3B00) |  false |  Governance | |--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  true |  Governance | |--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  false |  Governance | |--------|--------|--------|
|  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  false |  Governance | |--------|--------|--------|
|  [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) |  false |  Governance | |--------|--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  setReserveConfiguration |  Multi-sig | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Multi-sig | |--------|--------|
|  reserveState |  Multi-sig,Governance | |--------|--------|
|  protocolUpgradeablity |  Multi-sig | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Governance,Multi-sig | |--------|--------|
|  configureGovernance |  Governance | |--------|--------|
|  cancelPermissions |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  - |  onlyOwner |  [Aave Arc DAO](https://etherscan.io/address/0x23c155C1c1ecB18a86921Da29802292f1d282c68) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |--------|--------|--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x37D7306019a38Af123e4b245Eb6C28AF552e0bB0) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  onlyLendingPoolConfigurator |  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  onlyPoolAdmin |  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  onlyEmergencyAdmin |  [Aave Arc Guardian](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xB8a7bc0d13B1f5460513040a97F404b4fea7D2f3) |  - |  onlyOwner |  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0xfA3c34d734fe0106C87917683ca45dffBe3b3B00) |  - |  onlyOwner |  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  setMarketBorrowRate | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  - |  onlyEthereumGovernanceExecutor |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  queue | |--------|--------|--------|--------|--------|
|  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  - |  onlyGuardian |  [Aave Arc Guardian](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557) |  cancel | |--------|--------|--------|--------|--------|
|  [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) |  - |  onlyOwner |  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  addPermissionAdmins, removePermissionAdmins | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Arc DAO](https://etherscan.io/address/0x23c155C1c1ecB18a86921Da29802292f1d282c68) |  3/5 |  0x23c155C1c1ecB18a86921Da29802292f1d282c68 |  [0x7390A48219636571408c58582F6F9175d7Cc9d77](https://etherscan.io/address/0x7390A48219636571408c58582F6F9175d7Cc9d77), [0x683a4F9915D6216f73d6Df50151725036bD26C02](https://etherscan.io/address/0x683a4F9915D6216f73d6Df50151725036bD26C02), [0x4bCB2f803B336dFed0e00AD5B1A17AE87f53A267](https://etherscan.io/address/0x4bCB2f803B336dFed0e00AD5B1A17AE87f53A267), [0xc5A2c01930C3900A05d8D6fF1b5cF68618bCC031](https://etherscan.io/address/0xc5A2c01930C3900A05d8D6fF1b5cF68618bCC031), [0x5591aFfD96F6e94eEEb7AC2f5b1dA83CB68d3695](https://etherscan.io/address/0x5591aFfD96F6e94eEEb7AC2f5b1dA83CB68d3695) | |--------|--------|--------|--------|
|  [0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA (Safe)](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  0/0 |  0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA |   | |--------|--------|--------|--------|
|  [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218 (Safe)](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  0/0 |  0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218 |   | |--------|--------|--------|--------|
|  [Aave Arc Guardian](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557) |  1/1 |  0x33B09130b035d6D7e57d76fEa0873d9545FA7557 |  [0x686a12A79008246F4dF2f1Ea30d136BD6DE748B4](https://etherscan.io/address/0x686a12A79008246F4dF2f1Ea30d136BD6DE748B4) | |--------|--------|--------|--------|
|  [0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A (Safe)](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  0/0 |  0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A |   | |--------|--------|--------|--------|
|  [0xD3cF979e676265e4f6379749DECe4708B9A22476 (Safe)](https://etherscan.io/address/0xd3cf979e676265e4f6379749dece4708b9a22476) |  0/0 |  0xd3cf979e676265e4f6379749dece4708b9a22476 |   | |--------|--------|--------|--------|


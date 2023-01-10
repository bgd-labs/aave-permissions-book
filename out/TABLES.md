# Network Tables 
## 1 - ARC 
### onlyOwner 
| contract |caller |functions |
|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0x6FdfafB66d39cD72CFE7984D3Bbcc76632faAb00) |  [0x23c155C1c1ecB18a86921Da29802292f1d282c68](https://etherscan.io/address/0x23c155C1c1ecB18a86921Da29802292f1d282c68) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |  [AaveOracle](https://etherscan.io/address/0xB8a7bc0d13B1f5460513040a97F404b4fea7D2f3) |  [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  setAssetSources, setFallbackOracle | |  [PermissionManager](https://etherscan.io/address/0xF4a1F5fEA79C3609514A417425971FadC10eCfBE) |  [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  addPermissionAdmins, removePermissionAdmins | 
### onlyLendingPoolConfigurator 
| contract |caller |functions |
|----------|----------|----------|
|  [LendingPool](https://etherscan.io/address/0x37D7306019a38Af123e4b245Eb6C28AF552e0bB0) |  [0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | 
### onlyPoolAdmin 
| contract |caller |functions |
|----------|----------|----------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress | 
### onlyEmergencyAdmin 
| contract |caller |functions |
|----------|----------|----------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA) |  [0x33B09130b035d6D7e57d76fEa0873d9545FA7557](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557) |  setPoolPause | 
### onlyEthereumGovernanceExecutor 
| contract |caller |functions |
|----------|----------|----------|
|  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  queue | 
### onlyGuardian 
| contract |caller |functions |
|----------|----------|----------|
|  [ArcTimelock](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218) |  [0x33B09130b035d6D7e57d76fEa0873d9545FA7557](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557) |  cancel | 
### onlyTimelock 
| contract |caller |functions |
|----------|----------|----------|
|  [ExecutorWithTimelock](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setDelay, setPendingAdmin | 
### onlyPendingAdmin 
| contract |caller |functions |
|----------|----------|----------|
|  [ExecutorWithTimelock](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000) |  acceptAdmin | 
### onlyAdmin 
| contract |caller |functions |
|----------|----------|----------|
|  [ExecutorWithTimelock](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  [0xEC568fffba86c094cf06b22134B23074DFE2252c](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c) |  queueTransaction, cancelTransaction, executeTransaction | 

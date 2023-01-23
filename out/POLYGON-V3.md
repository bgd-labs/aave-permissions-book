# POLYGON 
## V3 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  - |  onlyOwner |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://polygonscan.com/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolConfigurator |  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://polygonscan.com/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://polygonscan.com/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyAdmin |  [Guardian1](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyAssetListingOrPoolAdmins |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyRiskOrPoolAdmins |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://polygonscan.com/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyOrPoolAdmin |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772), [Guardian1](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58) |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://polygonscan.com/address/0xb023e699F5a33916Ea823A16485e259257cA8Bd1) |  - |  onlyAssetListingOrPoolAdmins |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [CollectorController](https://polygonscan.com/address/0xDB89487A449274478e984665b8692AfC67459deF) |  - |  onlyOwner |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  approve, transfer | |--------|--------|--------|--------|--------|
|  [Collector](https://polygonscan.com/address/0xe8599F3cc5D38a9aD6F3684cd5CEa72f10Dbc383) |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  onlyFundsAdmin |  [CollectorController](https://polygonscan.com/address/0xDB89487A449274478e984665b8692AfC67459deF) |  approve, transfer, setFundsAdmin | |--------|--------|--------|--------|--------|
|  [RewardsController](https://polygonscan.com/address/0x929EC64c34a17401F460460D4B9390518E5B473e) |  [PoolAddressesProvider](https://polygonscan.com/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmissionManager |  [EmissionManager](https://polygonscan.com/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://polygonscan.com/address/0x1e4b7A6b903680eab0c5dAbcb8fD429cD2a9598c) |  - |  onlyOwner |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://polygonscan.com/address/0x301F221bc732907E2da2dbBFaA8F8F6847c170c3) |  - |  onlyOwner |  [0x252B4e4Ed857e05c6deA76076A9275A34eE0a451](https://polygonscan.com/address/0x252B4e4Ed857e05c6deA76076A9275A34eE0a451) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://polygonscan.com/address/0xA125561fca253f19eA93970534Bb0364ea74187a) |  - |  onlyOwner |  [0x252B4e4Ed857e05c6deA76076A9275A34eE0a451](https://polygonscan.com/address/0x252B4e4Ed857e05c6deA76076A9275A34eE0a451) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://polygonscan.com/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  - |  onlyOwner |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://polygonscan.com/address/0x770ef9f4fe897e59daCc474EF11238303F9552b6) |  - |  onlyOwner |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  - |  onlyGuardian |  [Guardian1](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58) |  cancel | |--------|--------|--------|--------|--------|
|  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  - |  onlyThis |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  updateFxRootSender, updateFxChild, updateGuardian, updateDelay, updateGracePeriod, updateMinimumDelay, updateMaximumDelay, executeDelegateCall | |--------|--------|--------|--------|--------|
|  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  - |  onlyFxChild |  [0x8397259c983751DAf40400790063935a11afa28a](https://polygonscan.com/address/0x8397259c983751DAf40400790063935a11afa28a) |  processMessageFromRoot | |--------|--------|--------|--------|--------|
|  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) |  - |  onlyFxRootSender |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  processMessageFromRoot | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Owners |
|----------|----------|
|  [0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58) |  [0xF0BA0fF18498F6fab57b8286006F9512D6aE2565](https://polygonscan.com/address/0xF0BA0fF18498F6fab57b8286006F9512D6aE2565), [0x80F11A20cd3855cAe3640558Ff320401EE970cFa](https://polygonscan.com/address/0x80F11A20cd3855cAe3640558Ff320401EE970cFa), [0x7390A48219636571408c58582F6F9175d7Cc9d77](https://polygonscan.com/address/0x7390A48219636571408c58582F6F9175d7Cc9d77), [0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d](https://polygonscan.com/address/0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d), [0x585E06CA576D0565a035301819FD2cfD7104c1E8](https://polygonscan.com/address/0x585E06CA576D0565a035301819FD2cfD7104c1E8), [0xB0b42c4931e370c001B24AE0ef89443C84201991](https://polygonscan.com/address/0xB0b42c4931e370c001B24AE0ef89443C84201991), [0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1](https://polygonscan.com/address/0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://polygonscan.com/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xE8D848debB3A3e12AA815b15900c8E020B863F31](https://polygonscan.com/address/0xE8D848debB3A3e12AA815b15900c8E020B863F31), [0xf68142d964297aDB5866CF08885Dc299AA4058f5](https://polygonscan.com/address/0xf68142d964297aDB5866CF08885Dc299AA4058f5) | |--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) | |--------|--------|
|  POOL_ADMIN |  [PolygonBridgeExecutor](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772) | |--------|--------|
|  EMERGENCY_ADMIN |  [Guardian1](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|

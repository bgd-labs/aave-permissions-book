# MAINNET 
## V2_AMM 
### Decentralization
| contract |upgradeable |owned by |
|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  false |  Governance | |--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB) |  true |  Governance | |--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  true |  Governance | |--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  false |  Not owned | |--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  false |  Governance | |--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  true |  Governance | |--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  false |  Governance | |--------|--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xbe9a7B3F2f54E18D7C0a17B03ad84Ac2D1D28eAC) |  false |  Governance | |--------|--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  false |  Governance | |--------|--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  setReserveConfiguration |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Multi-sig | |--------|--------|
|  reserveState |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Governance,Multi-sig | |--------|--------|
|  configureGovernance |  Governance | |--------|--------|
|  cancelPermissions |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |--------|--------|--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyLendingPoolConfigurator |  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyEmergencyAdmin |  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketBorrowRate | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xbe9a7B3F2f54E18D7C0a17B03ad84Ac2D1D28eAC) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  5/10 |  0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633 |  [0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707](https://etherscan.io/address/0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707), [0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39](https://etherscan.io/address/0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://etherscan.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xe5d453700d99296c2c085B8119BD6c152Cf63FA6](https://etherscan.io/address/0xe5d453700d99296c2c085B8119BD6c152Cf63FA6), [0xF1ba2231F373CffD47641540CfaEB1f21E50659B](https://etherscan.io/address/0xF1ba2231F373CffD47641540CfaEB1f21E50659B), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://etherscan.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://etherscan.io/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x9343dcB6A3A523510F3499004D8aa595Baa25bc5](https://etherscan.io/address/0x9343dcB6A3A523510F3499004D8aa595Baa25bc5), [0x2BEDd8645B407B3B6447fbC09B269eC7a5794606](https://etherscan.io/address/0x2BEDd8645B407B3B6447fbC09B269eC7a5794606) | |--------|--------|--------|--------|


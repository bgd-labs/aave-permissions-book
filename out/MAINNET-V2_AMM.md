# MAINNET 
## V2_AMM 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  not upgradeable | |--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB) |  Governance | |--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  Governance | |--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  not upgradeable | |--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  not upgradeable | |--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  Governance | |--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  not upgradeable | |--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xbe9a7B3F2f54E18D7C0a17B03ad84Ac2D1D28eAC) |  not upgradeable | |--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance | |--------|--------|
|  upgradeAaveOracles |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|
|  configureGovernance |  Governance | |--------|--------|
|  cancelProposal |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |--------|--------|--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyLendingPoolConfigurator |  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5) |  onlyEmergencyAdmin |  [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  setPoolPause | |--------|--------|--------|--------|--------|
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
|  [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  5/9 |  0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://etherscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://etherscan.io/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://etherscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://etherscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://etherscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://etherscan.io/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://etherscan.io/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|


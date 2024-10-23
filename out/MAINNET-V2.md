# MAINNET 
## V2 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  not upgradeable | |--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9) |  Governance | |--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  Governance | |--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  not upgradeable | |--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  not upgradeable | |--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  Governance | |--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  not upgradeable | |--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0x135896DE8421be2ec868E0b811006171D9df802A) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6) |  not upgradeable | |--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  not upgradeable | |--------|--------|
|  [DefaultIncentivesController](https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5) |  not upgradeable | |--------|--------|
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
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |--------|--------|--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyLendingPoolConfigurator |  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, setReserveFactor, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyEmergencyAdmin |  [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyPoolOrEmergencyAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  freezeReserve, unfreezeReserve | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketBorrowRate | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0x135896DE8421be2ec868E0b811006171D9df802A) |  - |  onlyOwner |  [ParaSwap](https://etherscan.io/address/0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [DefaultIncentivesController](https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5) |  - |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setDistributionEnd, configureAssets, setClaimer | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  5/9 |  0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://etherscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://etherscan.io/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://etherscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://etherscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://etherscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://etherscan.io/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://etherscan.io/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [ParaSwap](https://etherscan.io/address/0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A) |  6/12 |  0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A |  [0x1c2d669D944Dbb08252b018598C5a2FF53cd70F3](https://etherscan.io/address/0x1c2d669D944Dbb08252b018598C5a2FF53cd70F3), [0xe1068014b5dCb9aB9dDcddF39CB5db8137Bd143b](https://etherscan.io/address/0xe1068014b5dCb9aB9dDcddF39CB5db8137Bd143b), [0xcc46D0E4cAA83ad379fAfFbf6febC20817cCA040](https://etherscan.io/address/0xcc46D0E4cAA83ad379fAfFbf6febC20817cCA040), [0xE6014b86F00E4e66ADAB1BF09d27e0da663CD823](https://etherscan.io/address/0xE6014b86F00E4e66ADAB1BF09d27e0da663CD823), [0x450C01300B83bE379113256038b4Dd3b45d23B5e](https://etherscan.io/address/0x450C01300B83bE379113256038b4Dd3b45d23B5e), [0xcD6d1ae2237Efc04180845BE23fbA45508685634](https://etherscan.io/address/0xcD6d1ae2237Efc04180845BE23fbA45508685634), [0x8dc4fBeFad849b1853a6D473E7baeDa7673dB08F](https://etherscan.io/address/0x8dc4fBeFad849b1853a6D473E7baeDa7673dB08F), [0xDA23b2E44bAf56BcB8E87a287d739a393B34F56d](https://etherscan.io/address/0xDA23b2E44bAf56BcB8E87a287d739a393B34F56d), [0x37426F4554cb81FC035Ceb306D15c36D4D6207E4](https://etherscan.io/address/0x37426F4554cb81FC035Ceb306D15c36D4D6207E4), [0x3b4512e84017EC2dbc24e97006b47318807E1d3F](https://etherscan.io/address/0x3b4512e84017EC2dbc24e97006b47318807E1d3F), [0x6B6cB8658Fa84C905Ba50cf2ED65Bf3869873cE1](https://etherscan.io/address/0x6B6cB8658Fa84C905Ba50cf2ED65Bf3869873cE1), [0x7CB8A492a508A4a05F67Ef70Db13975f19B74b81](https://etherscan.io/address/0x7CB8A492a508A4a05F67Ef70Db13975f19B74b81) | |--------|--------|--------|--------|


# MAINNET 
## V2 
### decentralization
| contract |upgradeable |owned by |
|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  false |  Governance | |--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9) |  true |  Governance | |--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  true |  Governance | |--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  false |  Not owned | |--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  false |  Governance | |--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  true |  Governance | |--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  false |  Governance | |--------|--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24) |  false |  Governance | |--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0x135896DE8421be2ec868E0b811006171D9df802A) |  false |  Not owned | |--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6) |  false |  Not owned | |--------|--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  false |  Governance | |--------|--------|--------|
|  [DefaultIncentivesController](https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5) |  false |  Not owned | |--------|--------|--------|

### actions
| action |can be executed by |
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

### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle | |--------|--------|--------|--------|--------|
|  [LendingPool](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyLendingPoolConfigurator |  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  initReserve, setReserveInterestRateStrategyAddress, setConfiguration, setPause | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [LendingPoolConfigurator](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756) |  [LendingPoolAddressesProvider](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5) |  onlyEmergencyAdmin |  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [LendingRateOracle](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketBorrowRate | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV2](https://etherscan.io/address/0xa0d9C1E9E48Ca30c8d8C3B5D69FF5dc1f6DFfC24) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0x135896DE8421be2ec868E0b811006171D9df802A) |  - |  onlyOwner |  [ParaSwap](https://etherscan.io/address/0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x80Aca0C645fEdABaa20fd2Bf0Daf57885A309FE6) |  - |  onlyOwner |  [0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf](https://etherscan.io/address/0x05182E579FDfCf69E4390c3411D8FeA1fb6467cf) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [LendingPoolAddressesProviderRegistry](https://etherscan.io/address/0x52D306e36E3B6B02c153d0266ff0f85d18BCD413) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [DefaultIncentivesController](https://etherscan.io/address/0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5) |  - |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setDistributionEnd, configureAssets, setClaimer | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Address |Owners |
|----------|----------|----------|
|  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633 |  [0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707](https://etherscan.io/address/0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707), [0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39](https://etherscan.io/address/0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://etherscan.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xe5d453700d99296c2c085B8119BD6c152Cf63FA6](https://etherscan.io/address/0xe5d453700d99296c2c085B8119BD6c152Cf63FA6), [0xF1ba2231F373CffD47641540CfaEB1f21E50659B](https://etherscan.io/address/0xF1ba2231F373CffD47641540CfaEB1f21E50659B), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://etherscan.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://etherscan.io/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x9343dcB6A3A523510F3499004D8aa595Baa25bc5](https://etherscan.io/address/0x9343dcB6A3A523510F3499004D8aa595Baa25bc5), [0x2BEDd8645B407B3B6447fbC09B269eC7a5794606](https://etherscan.io/address/0x2BEDd8645B407B3B6447fbC09B269eC7a5794606) | |--------|--------|--------|
|  [ParaSwap](https://etherscan.io/address/0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A) |  0x36fEDC70feC3B77CAaf50E6C524FD7e5DFBD629A |  [0xe1068014b5dCb9aB9dDcddF39CB5db8137Bd143b](https://etherscan.io/address/0xe1068014b5dCb9aB9dDcddF39CB5db8137Bd143b), [0xcc46D0E4cAA83ad379fAfFbf6febC20817cCA040](https://etherscan.io/address/0xcc46D0E4cAA83ad379fAfFbf6febC20817cCA040), [0xE6014b86F00E4e66ADAB1BF09d27e0da663CD823](https://etherscan.io/address/0xE6014b86F00E4e66ADAB1BF09d27e0da663CD823), [0x450C01300B83bE379113256038b4Dd3b45d23B5e](https://etherscan.io/address/0x450C01300B83bE379113256038b4Dd3b45d23B5e), [0xcD6d1ae2237Efc04180845BE23fbA45508685634](https://etherscan.io/address/0xcD6d1ae2237Efc04180845BE23fbA45508685634), [0x8dc4fBeFad849b1853a6D473E7baeDa7673dB08F](https://etherscan.io/address/0x8dc4fBeFad849b1853a6D473E7baeDa7673dB08F), [0xDA23b2E44bAf56BcB8E87a287d739a393B34F56d](https://etherscan.io/address/0xDA23b2E44bAf56BcB8E87a287d739a393B34F56d), [0x37426F4554cb81FC035Ceb306D15c36D4D6207E4](https://etherscan.io/address/0x37426F4554cb81FC035Ceb306D15c36D4D6207E4), [0x3b4512e84017EC2dbc24e97006b47318807E1d3F](https://etherscan.io/address/0x3b4512e84017EC2dbc24e97006b47318807E1d3F), [0x6B6cB8658Fa84C905Ba50cf2ED65Bf3869873cE1](https://etherscan.io/address/0x6B6cB8658Fa84C905Ba50cf2ED65Bf3869873cE1), [0x7CB8A492a508A4a05F67Ef70Db13975f19B74b81](https://etherscan.io/address/0x7CB8A492a508A4a05F67Ef70Db13975f19B74b81) | |--------|--------|--------|


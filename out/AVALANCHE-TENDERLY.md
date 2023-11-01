# AVALANCHE 
## TENDERLY 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://snowtrace.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolConfigurator |  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://snowtrace.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://snowtrace.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyAssetListingOrPoolAdmins |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyRiskOrPoolAdmins |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470), [ProofOfReserveExecutor](https://snowtrace.io/address/0xab22988D93d5F942fC6B6c6Ea285744809D1d9Cc), [0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5](https://snowtrace.io/address/0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyOrPoolAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  setReservePause | |--------|--------|--------|--------|--------|
|  [ProofOfReserveExecutor](https://snowtrace.io/address/0xab22988D93d5F942fC6B6c6Ea285744809D1d9Cc) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  enableAssets, disableAssets | |--------|--------|--------|--------|--------|
|  [ProofOfReserveAggregator](https://snowtrace.io/address/0x80f2c02224a2E548FC67c0bF705eBFA825dd5439) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  enableProofOfReserveFeed, enableProofOfReserveFeedWithBridgeWrapper, disableProofOfReserveFeed | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://snowtrace.io/address/0xEBd36016B3eD09D4693Ed4251c67Bd858c3c7C9C) |  - |  onlyAssetListingOrPoolAdmins |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://snowtrace.io/address/0x5ba7fd868c40c16f7aDfAe6CF87121E13FC2F7a0) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://snowtrace.io/address/0x5ba7fd868c40c16f7aDfAe6CF87121E13FC2F7a0) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://snowtrace.io/address/0x929EC64c34a17401F460460D4B9390518E5B473e) |  [PoolAddressesProvider](https://snowtrace.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmissionManager |  [EmissionManager](https://snowtrace.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://snowtrace.io/address/0x6F143FE2F7B02424ad3CaD1593D6f36c0Aab69d7) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://snowtrace.io/address/0x2Cf641F7C0eac2788A7924B82d6Ca8EB7bAa4E3A) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://snowtrace.io/address/0x49F5B996814fEd1dd39285B92A59CFb2dfd8D4f9) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://snowtrace.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://snowtrace.io/address/0x770ef9f4fe897e59daCc474EF11238303F9552b6) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://snowtrace.io/address/0xDd81E6F85358292075B78fc8D5830BE8434aF8BA) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://snowtrace.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B) |  - |  setRoleAdmin |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |   | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PayloadsController](https://snowtrace.io/address/0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  updateGasLimit, addVotingPortals, removeVotingPortals, setVotingConfigs, setPowerStrategy | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://snowtrace.io/address/0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyGuardian |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  rescueVotingPortal | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://snowtrace.io/address/0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470), [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://snowtrace.io/address/0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |   | |--------|--------|--------|--------|--------|
|  [VotingMachine](https://snowtrace.io/address/0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F) |  - |  onlyOwner |  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  updateGasLimit | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  - |  onlyOwner |  [PayloadsController](https://snowtrace.io/address/0x1140CB7CAfAcC745771C2Ea31e7B5C653c5d0B80) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [BridgeAdapter0](https://snowtrace.io/address/0x3F006299eC88985c18E6e885EeA29A49eC579882) |  - |  trustedRemote |  [0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1](https://snowtrace.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [BridgeAdapter1](https://snowtrace.io/address/0xf41193E25408F652AF878c47E4401A01B5E4B682) |  - |  trustedRemote |  [0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1](https://snowtrace.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [BridgeAdapter2](https://snowtrace.io/address/0xa198Fac58E02A5C5F8F7e877895d50cFa9ad1E04) |  - |  trustedRemote |  [0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1](https://snowtrace.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyGuardian |  [BGD](https://snowtrace.io/address/0x3DBA1c4094BC0eE4772A05180B7E0c2F1cFD9c36) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [BGD](https://snowtrace.io/address/0x3DBA1c4094BC0eE4772A05180B7E0c2F1cFD9c36), [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://snowtrace.io/address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedSenders |  [VotingMachine](https://snowtrace.io/address/0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F) |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://snowtrace.io/address/0x27FC7D54C893dA63C0AE6d57e1B2B13A70690928) |  [ProxyAdmin](https://snowtrace.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedBridges |  [BridgeAdapter0](https://snowtrace.io/address/0x3F006299eC88985c18E6e885EeA29A49eC579882), [BridgeAdapter1](https://snowtrace.io/address/0xf41193E25408F652AF878c47E4401A01B5E4B682), [BridgeAdapter2](https://snowtrace.io/address/0xa198Fac58E02A5C5F8F7e877895d50cFa9ad1E04) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Address |Owners |
|----------|----------|----------|
|  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) |  0xa35b76E4935449E33C56aB24b23fcd3246f13470 |  [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://snowtrace.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xb647055A9915bF9c8021a684E175A353525b9890](https://snowtrace.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://snowtrace.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://snowtrace.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0xF0BA0fF18498F6fab57b8286006F9512D6aE2565](https://snowtrace.io/address/0xF0BA0fF18498F6fab57b8286006F9512D6aE2565), [0x80F11A20cd3855cAe3640558Ff320401EE970cFa](https://snowtrace.io/address/0x80F11A20cd3855cAe3640558Ff320401EE970cFa), [0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d](https://snowtrace.io/address/0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d), [0x585E06CA576D0565a035301819FD2cfD7104c1E8](https://snowtrace.io/address/0x585E06CA576D0565a035301819FD2cfD7104c1E8), [0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1](https://snowtrace.io/address/0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://snowtrace.io/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7) | |--------|--------|--------|
|  [BGD](https://snowtrace.io/address/0x3DBA1c4094BC0eE4772A05180B7E0c2F1cFD9c36) |  0x3DBA1c4094BC0eE4772A05180B7E0c2F1cFD9c36 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://snowtrace.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://snowtrace.io/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://snowtrace.io/address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) | |--------|--------|
|  POOL_ADMIN |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Guardian Avalanche](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  RISK_ADMIN |  [ProofOfReserveExecutor](https://snowtrace.io/address/0xab22988D93d5F942fC6B6c6Ea285744809D1d9Cc), [0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5](https://snowtrace.io/address/0xD2C92b5A793e196aB11dBefBe3Af6BddeD6c3DD5) | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|

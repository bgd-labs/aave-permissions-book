# ZK_SYNC 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  not upgradeable | |--------|--------|
|  [Pool](https://era.zksync.network//address/0x5a823a7bAeda24DF00d0412F2738172C4dD48a13) |  Governance | |--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  Governance | |--------|--------|
|  [AaveOracle](https://era.zksync.network//address/0x72C9aA92deB6D3A612939f002643A2aC65d4756a) |  not upgradeable | |--------|--------|
|  [Collector](https://era.zksync.network//address/0x34c480f4e3fCb59e2521886950f801af88f68632) |  Governance | |--------|--------|
|  [RewardsController](https://era.zksync.network//address/0x896ED1635aEE1C64d68336A53eebaf04C276254e) |  not upgradeable | |--------|--------|
|  [WrappedTokenGatewayV3](https://era.zksync.network//address/0x5E6aB3f1F82469929f4E4243d110CaBD2Dce5f60) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://era.zksync.network//address/0x595ef5910b3d3f287cA71b539021238Bc5F727AD) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://era.zksync.network//address/0x396C44011e58108eC3a7Ad83B5c9FB4B256Ba5D7) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  not upgradeable | |--------|--------|
|  [ACLManager](https://era.zksync.network//address/0x9c63E38f3FCef5e1b1d7E647c1e39Ddc1e15e5D8) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://era.zksync.network//address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  Governance | |--------|--------|
|  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  not upgradeable | |--------|--------|
|  [ZkSync native adapter](https://era.zksync.network//address/0x1BC5C10CAe378fDbd7D52ec4F9f34590a619c68E) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  Governance | |--------|--------|
|  updateReserveCaps |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance | |--------|--------|
|  upgradeAaveOracles |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance,External Contract | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  - |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://era.zksync.network//address/0x5a823a7bAeda24DF00d0412F2738172C4dD48a13) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyPoolConfigurator |  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://era.zksync.network//address/0x5a823a7bAeda24DF00d0412F2738172C4dD48a13) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyPoolAdmin |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://era.zksync.network//address/0x5a823a7bAeda24DF00d0412F2738172C4dD48a13) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyPoolAdmin |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyEmergencyAdmin |  [Aave Guardian ZkSync](https://era.zksync.network//address/0xba845c27903F7dDB5c676e5b74728C871057E000) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://era.zksync.network//address/0xEFbc49BB1A3481Cd964f2d5046971b9358D21eEd) |  [PoolAddressesProvider](https://era.zksync.network//address/0xE8bC6e12faf260dbA1c942134070221B11BF37Fb) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020), [Aave Guardian ZkSync](https://era.zksync.network//address/0xba845c27903F7dDB5c676e5b74728C871057E000) |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://era.zksync.network//address/0x72C9aA92deB6D3A612939f002643A2aC65d4756a) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://era.zksync.network//address/0x34c480f4e3fCb59e2521886950f801af88f68632) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyFundsAdmin |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://era.zksync.network//address/0x34c480f4e3fCb59e2521886950f801af88f68632) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyAdminOrRecipient |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D), [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://era.zksync.network//address/0x896ED1635aEE1C64d68336A53eebaf04C276254e) |  - |  onlyEmissionManager |  [EmissionManager](https://era.zksync.network//address/0x595ef5910b3d3f287cA71b539021238Bc5F727AD) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://era.zksync.network//address/0x5E6aB3f1F82469929f4E4243d110CaBD2Dce5f60) |  - |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://era.zksync.network//address/0x595ef5910b3d3f287cA71b539021238Bc5F727AD) |  - |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://era.zksync.network//address/0x396C44011e58108eC3a7Ad83B5c9FB4B256Ba5D7) |  - |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  - |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://era.zksync.network//address/0x9c63E38f3FCef5e1b1d7E647c1e39Ddc1e15e5D8) |  - |  onlyRole |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  setRoleAdmin | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://era.zksync.network//address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228) |  - |  onlyRetryGuardian |  [BGD](https://era.zksync.network//address/0x2451337aD5fE8b563bEB3b9c4A2B8789294879Ec) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://era.zksync.network//address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian ZkSync](https://era.zksync.network//address/0x4257bf0746D783f0D962913d7d8AFA408B62547E) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://era.zksync.network//address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyGuardian |  [Aave Governance Guardian ZkSync](https://era.zksync.network//address/0x4257bf0746D783f0D962913d7d8AFA408B62547E) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyOwnerOrGuardian |  [Aave Governance Guardian ZkSync](https://era.zksync.network//address/0x4257bf0746D783f0D962913d7d8AFA408B62547E), [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyRescueGuardian |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  - |  onlyOwner |  [PayloadsController](https://era.zksync.network//address/0x2E79349c3F5e4751E87b966812C9E65E805996F1) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [ZkSync native adapter](https://era.zksync.network//address/0x1BC5C10CAe378fDbd7D52ec4F9f34590a619c68E) |  - |  trustedRemote |  [CrossChainController(Eth)](https://era.zksync.network//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyOwner |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyOwnerOrGuardian |  [GranularGuardian](https://era.zksync.network//address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228), [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyRescueGuardian |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://era.zksync.network//address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C) |  [ProxyAdmin](https://era.zksync.network//address/0x158d6c497317367CEa3CBAb0BD84E6de236F060D) |  onlyApprovedBridges |  [ZkSync native adapter](https://era.zksync.network//address/0x1BC5C10CAe378fDbd7D52ec4F9f34590a619c68E) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Guardian ZkSync](https://era.zksync.network//address/0xba845c27903F7dDB5c676e5b74728C871057E000) |  5/9 |  0xba845c27903F7dDB5c676e5b74728C871057E000 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://era.zksync.network//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://era.zksync.network//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://era.zksync.network//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://era.zksync.network//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://era.zksync.network//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://era.zksync.network//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0x8659D0BB123Da6D16D9394C7838BA286c2207d0E](https://era.zksync.network//address/0x8659D0BB123Da6D16D9394C7838BA286c2207d0E), [0xECC2a9240268BC7a26386ecB49E1Befca2706AC9](https://era.zksync.network//address/0xECC2a9240268BC7a26386ecB49E1Befca2706AC9), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://era.zksync.network//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [BGD](https://era.zksync.network//address/0x2451337aD5fE8b563bEB3b9c4A2B8789294879Ec) |  2/3 |  0x2451337aD5fE8b563bEB3b9c4A2B8789294879Ec |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://era.zksync.network//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://era.zksync.network//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://era.zksync.network//address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|
|  [Aave Governance Guardian ZkSync](https://era.zksync.network//address/0x4257bf0746D783f0D962913d7d8AFA408B62547E) |  5/9 |  0x4257bf0746D783f0D962913d7d8AFA408B62547E |  [0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272](https://era.zksync.network//address/0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://era.zksync.network//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27](https://era.zksync.network//address/0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://era.zksync.network//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://era.zksync.network//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://era.zksync.network//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://era.zksync.network//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://era.zksync.network//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://era.zksync.network//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Guardian ZkSync](https://era.zksync.network//address/0xba845c27903F7dDB5c676e5b74728C871057E000) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://era.zksync.network//address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian ZkSync](https://era.zksync.network//address/0x4257bf0746D783f0D962913d7d8AFA408B62547E) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://era.zksync.network//address/0x2451337aD5fE8b563bEB3b9c4A2B8789294879Ec) | |--------|--------|


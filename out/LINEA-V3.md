# LINEA 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  not upgradeable | |--------|--------|
|  [Pool](https://lineascan.build//address/0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac) |  External Contract | |--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  External Contract | |--------|--------|
|  [AaveOracle](https://lineascan.build//address/0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9) |  not upgradeable | |--------|--------|
|  [Collector](https://lineascan.build//address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809) |  External Contract | |--------|--------|
|  [RewardsController](https://lineascan.build//address/0xc67bb8F2314fA0df50cBa314c6509A7bdAD500C0) |  External Contract | |--------|--------|
|  [WrappedTokenGatewayV3](https://lineascan.build//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://lineascan.build//address/0x0165C65FB21bDC9Cdc09C627d62AB3a983337158) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://lineascan.build//address/0x96dFCCB3F9ACDaF6c8f8a35E814023C3484d1eA2) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  not upgradeable | |--------|--------|
|  [ACLManager](https://lineascan.build//address/0xbf32c7dFC72b730967072B112927ca0de205dbb5) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://lineascan.build//address/0xc1cd6faF6e9138b4e6C21d438f9ebF2bd6F6cA16) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://lineascan.build//address/0x61308f66DEF56EffFa25C8CB5408D6dDdB450149) |  External Contract | |--------|--------|
|  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  not upgradeable | |--------|--------|
|  [Linea native adapter](https://lineascan.build//address/0xB3332d31ECFC3ef3BF6Cda79833D11d1A53f5cE6) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  External Contract | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  External Contract | |--------|--------|
|  updateReserveCaps |  External Contract | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  External Contract | |--------|--------|
|  upgradeAaveOracles |  External Contract | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  External Contract,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  External Contract,Multi-sig | |--------|--------|
|  reserveListing |  External Contract | |--------|--------|
|  adminsConfiguration |  External Contract | |--------|--------|
|  protocolUpgradeablity |  External Contract | |--------|--------|
|  adiConfigurations |  External Contract | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,External Contract | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  - |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://lineascan.build//address/0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyPoolConfigurator |  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://lineascan.build//address/0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyPoolAdmin |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://lineascan.build//address/0xc47b8C00b0f69a36fa203Ffeac0334874574a8Ac) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyPoolAdmin |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88), [Aave Protocol Guardian Linea](https://lineascan.build//address/0x0BF186764D8333a938f35e5dD124a7b9b9dccDF9) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://lineascan.build//address/0x812E7c19421D9f41A6DDCF047d5cc2dE2Ca5Bfa2) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88), [Aave Protocol Guardian Linea](https://lineascan.build//address/0x0BF186764D8333a938f35e5dD124a7b9b9dccDF9) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://lineascan.build//address/0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://lineascan.build//address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyFundsAdmin |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://lineascan.build//address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyAdminOrRecipient |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A), [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://lineascan.build//address/0xc67bb8F2314fA0df50cBa314c6509A7bdAD500C0) |  [PoolAddressesProvider](https://lineascan.build//address/0x89502c3731F69DDC95B65753708A07F8Cd0373F4) |  onlyEmissionManager |  [EmissionManager](https://lineascan.build//address/0x0165C65FB21bDC9Cdc09C627d62AB3a983337158) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://lineascan.build//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  - |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://lineascan.build//address/0x0165C65FB21bDC9Cdc09C627d62AB3a983337158) |  - |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://lineascan.build//address/0x96dFCCB3F9ACDaF6c8f8a35E814023C3484d1eA2) |  - |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  - |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://lineascan.build//address/0xbf32c7dFC72b730967072B112927ca0de205dbb5) |  - |  onlyRole |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  setRoleAdmin | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://lineascan.build//address/0xc1cd6faF6e9138b4e6C21d438f9ebF2bd6F6cA16) |  - |  onlyRetryGuardian |  [BGD](https://lineascan.build//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://lineascan.build//address/0xc1cd6faF6e9138b4e6C21d438f9ebF2bd6F6cA16) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Linea](https://lineascan.build//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://lineascan.build//address/0xc1cd6faF6e9138b4e6C21d438f9ebF2bd6F6cA16) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://lineascan.build//address/0x61308f66DEF56EffFa25C8CB5408D6dDdB450149) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyOwner |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://lineascan.build//address/0x61308f66DEF56EffFa25C8CB5408D6dDdB450149) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyGuardian |  [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://lineascan.build//address/0x61308f66DEF56EffFa25C8CB5408D6dDdB450149) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyOwnerOrGuardian |  [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://lineascan.build//address/0x61308f66DEF56EffFa25C8CB5408D6dDdB450149) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyRescueGuardian |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) |  - |  onlyOwner |  [0x6ec33534BE07d45cc4E02Fbd127F8ed2aE919a6b](https://lineascan.build//address/0x6ec33534BE07d45cc4E02Fbd127F8ed2aE919a6b) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Linea native adapter](https://lineascan.build//address/0xB3332d31ECFC3ef3BF6Cda79833D11d1A53f5cE6) |  - |  trustedRemote |  [CrossChainController(Eth)](https://lineascan.build//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyOwner |  [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyOwnerOrGuardian |  [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyRescueGuardian |  [Deployer](https://lineascan.build//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://lineascan.build//address/0x0D3f821e9741C8a8Bcac231162320251Db0cdf52) |  [ProxyAdmin](https://lineascan.build//address/0x160E35e28fEE90F3656420584e0a990276219b5A) |  onlyApprovedBridges |  [Linea native adapter](https://lineascan.build//address/0xB3332d31ECFC3ef3BF6Cda79833D11d1A53f5cE6) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Linea](https://lineascan.build//address/0x0BF186764D8333a938f35e5dD124a7b9b9dccDF9) |  5/9 |  0x0BF186764D8333a938f35e5dD124a7b9b9dccDF9 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://lineascan.build//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://lineascan.build//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://lineascan.build//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://lineascan.build//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://lineascan.build//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://lineascan.build//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://lineascan.build//address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://lineascan.build//address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://lineascan.build//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [BGD](https://lineascan.build//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  2/3 |  0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://lineascan.build//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://lineascan.build//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://lineascan.build//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Linea](https://lineascan.build//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  5/9 |  0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://lineascan.build//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://lineascan.build//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://lineascan.build//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://lineascan.build//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://lineascan.build//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://lineascan.build//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://lineascan.build//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://lineascan.build//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://lineascan.build//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Linea](https://lineascan.build//address/0x0BF186764D8333a938f35e5dD124a7b9b9dccDF9) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://lineascan.build//address/0x8c2d95FE7aeB57b86961F3abB296A54f0ADb7F88) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Linea](https://lineascan.build//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://lineascan.build//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) | |--------|--------|


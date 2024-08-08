# SCROLL 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  not upgradeable | |--------|--------|
|  [Pool](https://scrollscan.com//address/0x11fCfe756c05AD438e312a7fd934381537D3cFfe) |  Governance | |--------|--------|
|  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  Governance | |--------|--------|
|  [AaveOracle](https://scrollscan.com//address/0x04421D8C506E2fA2371a08EfAaBf791F624054F3) |  not upgradeable | |--------|--------|
|  [Collector](https://scrollscan.com//address/0x90eB541e1a431D8a30ED85A77675D1F001128cb5) |  Governance | |--------|--------|
|  [RewardsController](https://scrollscan.com//address/0xa3f3100C4f1D0624DB9DB97b40C13885Ce297799) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://scrollscan.com//address/0xFF75A4B698E3Ec95E608ac0f22A03B8368E05F5D) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://scrollscan.com//address/0x6091546836DAe0487A50E300da3F237727441D90) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://scrollscan.com//address/0xFBedc64AeE24921cb43004312B9eF367a4162b57) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  not upgradeable | |--------|--------|
|  [ACLManager](https://scrollscan.com//address/0x7633F981D87dC6307227de9383D2ce7243158081) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://scrollscan.com//address/0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://scrollscan.com//address/0xc68D0C511076283075bD5cc9aA61E43673135f37) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://scrollscan.com//address/0xa835707d28e6C37C49d661742f2Fb5987367cEd4) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  Governance | |--------|--------|
|  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  not upgradeable | |--------|--------|
|  [Scroll native adapter](https://scrollscan.com//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  Governance | |--------|--------|
|  updateReserveCaps |  Governance,Multi-sig | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance | |--------|--------|
|  upgradeAaveOracles |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Governance,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  - |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://scrollscan.com//address/0x11fCfe756c05AD438e312a7fd934381537D3cFfe) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyPoolConfigurator |  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://scrollscan.com//address/0x11fCfe756c05AD438e312a7fd934381537D3cFfe) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyPoolAdmin |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://scrollscan.com//address/0x11fCfe756c05AD438e312a7fd934381537D3cFfe) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyPoolAdmin |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24), [FreezeSteward](https://scrollscan.com//address/0xc68D0C511076283075bD5cc9aA61E43673135f37), [CapPlusRiskSteward](https://scrollscan.com//address/0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://scrollscan.com//address/0x32BCab42a2bb5AC577D24b425D46d8b8e0Df9b7f) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24), [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://scrollscan.com//address/0x04421D8C506E2fA2371a08EfAaBf791F624054F3) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://scrollscan.com//address/0x90eB541e1a431D8a30ED85A77675D1F001128cb5) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyFundsAdmin |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://scrollscan.com//address/0x90eB541e1a431D8a30ED85A77675D1F001128cb5) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyAdminOrRecipient |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E), [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://scrollscan.com//address/0xa3f3100C4f1D0624DB9DB97b40C13885Ce297799) |  [PoolAddressesProvider](https://scrollscan.com//address/0x69850D0B276776781C063771b161bd8894BCdD04) |  onlyEmissionManager |  [EmissionManager](https://scrollscan.com//address/0x6091546836DAe0487A50E300da3F237727441D90) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://scrollscan.com//address/0xFF75A4B698E3Ec95E608ac0f22A03B8368E05F5D) |  - |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://scrollscan.com//address/0x6091546836DAe0487A50E300da3F237727441D90) |  - |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://scrollscan.com//address/0xFBedc64AeE24921cb43004312B9eF367a4162b57) |  - |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  - |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://scrollscan.com//address/0x7633F981D87dC6307227de9383D2ce7243158081) |  - |  onlyRole |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://scrollscan.com//address/0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e) |  - |  onlyRiskCouncil |  [Risk Council](https://scrollscan.com//address/0x611439a74546888c3535B4dd119A5Cbb9f5332EA) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://scrollscan.com//address/0xc68D0C511076283075bD5cc9aA61E43673135f37) |  - |  onlyEmergencyAdmin |  [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7) |  setFreeze | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://scrollscan.com//address/0xa835707d28e6C37C49d661742f2Fb5987367cEd4) |  - |  onlyRetryGuardian |  [BGD](https://scrollscan.com//address/0x4aAa03F0A61cf93eA252e987b585453578108358) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://scrollscan.com//address/0xa835707d28e6C37C49d661742f2Fb5987367cEd4) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Scroll](https://scrollscan.com//address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://scrollscan.com//address/0xa835707d28e6C37C49d661742f2Fb5987367cEd4) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyGuardian |  [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyOwnerOrGuardian |  [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7), [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyRescueGuardian |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  - |  onlyOwner |  [PayloadsController](https://scrollscan.com//address/0x6b6B41c0f8C223715f712BE83ceC3c37bbfDC3fE) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Scroll native adapter](https://scrollscan.com//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  - |  trustedRemote |  [CrossChainController(Eth)](https://scrollscan.com//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyOwner |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyOwnerOrGuardian |  [BGD](https://scrollscan.com//address/0x4aAa03F0A61cf93eA252e987b585453578108358), [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyRescueGuardian |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://scrollscan.com//address/0x03073D3F4769f6b6604d616238fD6c636C99AD0A) |  [ProxyAdmin](https://scrollscan.com//address/0x782559e349b084bB7C07c08404aE6E3436cDAE2E) |  onlyApprovedBridges |  [Scroll native adapter](https://scrollscan.com//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7) |  6/10 |  0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://scrollscan.com//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0xF0BA0fF18498F6fab57b8286006F9512D6aE2565](https://scrollscan.com//address/0xF0BA0fF18498F6fab57b8286006F9512D6aE2565), [0x80F11A20cd3855cAe3640558Ff320401EE970cFa](https://scrollscan.com//address/0x80F11A20cd3855cAe3640558Ff320401EE970cFa), [0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d](https://scrollscan.com//address/0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d), [0x585E06CA576D0565a035301819FD2cfD7104c1E8](https://scrollscan.com//address/0x585E06CA576D0565a035301819FD2cfD7104c1E8), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://scrollscan.com//address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xb647055A9915bF9c8021a684E175A353525b9890](https://scrollscan.com//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://scrollscan.com//address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1](https://scrollscan.com//address/0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://scrollscan.com//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7) | |--------|--------|--------|--------|
|  [Risk Council](https://scrollscan.com//address/0x611439a74546888c3535B4dd119A5Cbb9f5332EA) |  1/1 |  0x611439a74546888c3535B4dd119A5Cbb9f5332EA |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://scrollscan.com//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://scrollscan.com//address/0x4aAa03F0A61cf93eA252e987b585453578108358) |  2/3 |  0x4aAa03F0A61cf93eA252e987b585453578108358 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://scrollscan.com//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://scrollscan.com//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://scrollscan.com//address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Scroll](https://scrollscan.com//address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  5/9 |  0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://scrollscan.com//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272](https://scrollscan.com//address/0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://scrollscan.com//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27](https://scrollscan.com//address/0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://scrollscan.com//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://scrollscan.com//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://scrollscan.com//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://scrollscan.com//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://scrollscan.com//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Guardian Scroll](https://scrollscan.com//address/0x63B20270b695E44Ac94Ad7592D5f81E3575b93e7) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |  [0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3](https://scrollscan.com//address/0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3) | |--------|--------|
|  RISK_ADMIN |  [FreezeSteward](https://scrollscan.com//address/0xc68D0C511076283075bD5cc9aA61E43673135f37), [CapPlusRiskSteward](https://scrollscan.com//address/0xc4dcA550EF04FD0f8AbD4c384575Fb8a8123054e) | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://scrollscan.com//address/0xc1ABF87FfAdf4908f4eC8dc54A25DCFEabAE4A24) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Scroll](https://scrollscan.com//address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://scrollscan.com//address/0x4aAa03F0A61cf93eA252e987b585453578108358) | |--------|--------|


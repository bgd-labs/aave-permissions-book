# MANTLE 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  not upgradeable | |--------|--------|
|  [Pool](https://mantlescan.xyz//address/0x2e770EF8AbdEcA83D9310E2d3B3c2FdfFF5fd85A) |  Governance | |--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  Governance | |--------|--------|
|  [AaveOracle](https://mantlescan.xyz//address/0x6c23bAF050ec192afc0B967a93b83e6c5405df43) |  not upgradeable | |--------|--------|
|  [RewardsController](https://mantlescan.xyz//address/0xe875feF12DF97D763038F0Eac53962Ca36249eA6) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://mantlescan.xyz//address/0xde35f7711295Dfd0CD8bd94d46f65b8Acb182520) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://mantlescan.xyz//address/0x9D6aB154437A28CF202954e1176449c75e6D6c4B) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://mantlescan.xyz//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  not upgradeable | |--------|--------|
|  [ACLManager](https://mantlescan.xyz//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  not upgradeable | |--------|--------|
|  [Collector](https://mantlescan.xyz//address/0x29B8Edc8a5158e8eBD7Dea3473517AB079260a0b) |  Governance | |--------|--------|
|  [CollectorProxyAdmin](https://mantlescan.xyz//address/0x03a85af086e114250cfbe2530dc70a896c4f301e) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://mantlescan.xyz//address/0xb26670d2800DBB9cfCe2f2660FfDcA48C799c86d) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  Governance | |--------|--------|
|  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354ebbae707e613d58bc9035400477bdf) |  not upgradeable | |--------|--------|
|  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  not upgradeable | |--------|--------|
|  [Mantle native adapter](https://mantlescan.xyz//address/0x4E740ac02b866b429738a9e225e92A15F4452521) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  Governance | |--------|--------|
|  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042ad141ee72667db9f2549e5aa8433a94) |  not upgradeable | |--------|--------|

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
|  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://mantlescan.xyz//address/0x2e770EF8AbdEcA83D9310E2d3B3c2FdfFF5fd85A) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyPoolConfigurator |  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://mantlescan.xyz//address/0x2e770EF8AbdEcA83D9310E2d3B3c2FdfFF5fd85A) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyPoolAdmin |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://mantlescan.xyz//address/0x2e770EF8AbdEcA83D9310E2d3B3c2FdfFF5fd85A) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyPoolAdmin |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b), [Aave Protocol Guardian Mantle](https://mantlescan.xyz//address/0x172867391d690Eb53896623DaD22208624230686) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://mantlescan.xyz//address/0x4fDE7000ac23033B0FD420098B8a83A9Ff52c33C) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b), [Aave Protocol Guardian Mantle](https://mantlescan.xyz//address/0x172867391d690Eb53896623DaD22208624230686) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://mantlescan.xyz//address/0x6c23bAF050ec192afc0B967a93b83e6c5405df43) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [RewardsController](https://mantlescan.xyz//address/0xe875feF12DF97D763038F0Eac53962Ca36249eA6) |  [PoolAddressesProvider](https://mantlescan.xyz//address/0x2aB3580a805fB10CbAd567212C70e26C1B6769eC) |  onlyEmissionManager |  [EmissionManager](https://mantlescan.xyz//address/0x9D6aB154437A28CF202954e1176449c75e6D6c4B) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://mantlescan.xyz//address/0xde35f7711295Dfd0CD8bd94d46f65b8Acb182520) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://mantlescan.xyz//address/0x9D6aB154437A28CF202954e1176449c75e6D6c4B) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://mantlescan.xyz//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ACLManager](https://mantlescan.xyz//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  - |  onlyRole |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [Collector](https://mantlescan.xyz//address/0x29B8Edc8a5158e8eBD7Dea3473517AB079260a0b) |  [CollectorProxyAdmin](https://mantlescan.xyz//address/0x03A85aF086e114250CFbe2530Dc70a896C4F301e) |  onlyFundsAdmin |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://mantlescan.xyz//address/0x29B8Edc8a5158e8eBD7Dea3473517AB079260a0b) |  [CollectorProxyAdmin](https://mantlescan.xyz//address/0x03A85aF086e114250CFbe2530Dc70a896C4F301e) |  onlyAdminOrRecipient |  [CollectorProxyAdmin](https://mantlescan.xyz//address/0x03A85aF086e114250CFbe2530Dc70a896C4F301e), [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [CollectorProxyAdmin](https://mantlescan.xyz//address/0x03a85af086e114250cfbe2530dc70a896c4f301e) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://mantlescan.xyz//address/0xb26670d2800DBB9cfCe2f2660FfDcA48C799c86d) |  - |  onlyRetryGuardian |  [BGD](https://mantlescan.xyz//address/0x0686f59Cc2aEc1ccf891472Dc6C89bB747F6a4A7) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://mantlescan.xyz//address/0xb26670d2800DBB9cfCe2f2660FfDcA48C799c86d) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Mantle](https://mantlescan.xyz//address/0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://mantlescan.xyz//address/0xb26670d2800DBB9cfCe2f2660FfDcA48C799c86d) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354EBbaE707E613D58bC9035400477bDf) |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354EBbaE707E613D58bC9035400477bDf) |  onlyGuardian |  [Aave Governance Guardian Mantle](https://mantlescan.xyz//address/0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354EBbaE707E613D58bC9035400477bDf) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Mantle](https://mantlescan.xyz//address/0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD), [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354EBbaE707E613D58bC9035400477bDf) |  onlyRescueGuardian |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [PayloadsControllerProxyAdmin](https://mantlescan.xyz//address/0x18a2374354ebbae707e613d58bc9035400477bdf) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  - |  onlyOwner |  [PayloadsController](https://mantlescan.xyz//address/0xF089f77173A3009A98c45f49D547BF714A7B1e01) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Mantle native adapter](https://mantlescan.xyz//address/0x4E740ac02b866b429738a9e225e92A15F4452521) |  - |  trustedRemote |  [CrossChainController(Eth)](https://mantlescan.xyz//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042AD141EE72667db9F2549e5aA8433A94) |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042AD141EE72667db9F2549e5aA8433A94) |  onlyOwnerOrGuardian |  [Aave Granular Guardian Mantle](https://mantlescan.xyz//address/0xb26670d2800DBB9cfCe2f2660FfDcA48C799c86d), [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042AD141EE72667db9F2549e5aA8433A94) |  onlyRescueGuardian |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042AD141EE72667db9F2549e5aA8433A94) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://mantlescan.xyz//address/0x1283C5015B1Fb5616FA3aCb0C18e6879a02869cB) |  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042AD141EE72667db9F2549e5aA8433A94) |  onlyApprovedBridges |  [Mantle native adapter](https://mantlescan.xyz//address/0x4E740ac02b866b429738a9e225e92A15F4452521) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainControllerProxyAdmin](https://mantlescan.xyz//address/0x80568e042ad141ee72667db9f2549e5aa8433a94) |  - |  onlyOwner |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Mantle](https://mantlescan.xyz//address/0x172867391d690Eb53896623DaD22208624230686) |  5/9 |  0x172867391d690Eb53896623DaD22208624230686 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://mantlescan.xyz//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://mantlescan.xyz//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://mantlescan.xyz//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://mantlescan.xyz//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://mantlescan.xyz//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://mantlescan.xyz//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://mantlescan.xyz//address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://mantlescan.xyz//address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://mantlescan.xyz//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [BGD](https://mantlescan.xyz//address/0x0686f59Cc2aEc1ccf891472Dc6C89bB747F6a4A7) |  2/3 |  0x0686f59Cc2aEc1ccf891472Dc6C89bB747F6a4A7 |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://mantlescan.xyz//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://mantlescan.xyz//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://mantlescan.xyz//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Mantle](https://mantlescan.xyz//address/0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD) |  5/9 |  0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://mantlescan.xyz//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://mantlescan.xyz//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://mantlescan.xyz//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://mantlescan.xyz//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://mantlescan.xyz//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://mantlescan.xyz//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://mantlescan.xyz//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://mantlescan.xyz//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://mantlescan.xyz//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Mantle](https://mantlescan.xyz//address/0x172867391d690Eb53896623DaD22208624230686) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Mantle](https://mantlescan.xyz//address/0x14816fC7f443A9C834d30eeA64daD20C4f56fBCD) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://mantlescan.xyz//address/0x0686f59Cc2aEc1ccf891472Dc6C89bB747F6a4A7) | |--------|--------|

### Collector Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) | |--------|--------|
|  FUNDS_ADMIN_ROLE |  [Executor_lvl1](https://mantlescan.xyz//address/0x70884634D0098782592111A2A6B8d223be31CB7b) | |--------|--------|


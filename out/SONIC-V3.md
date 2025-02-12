# SONIC 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  not upgradeable | |--------|--------|
|  [Pool](https://sonicscan.org//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  Governance | |--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  Governance | |--------|--------|
|  [AaveOracle](https://sonicscan.org//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  not upgradeable | |--------|--------|
|  [RewardsController](https://sonicscan.org//address/0xD93e3Ae8f69D04d484d1652Ca569d4b0522414DF) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://sonicscan.org//address/0xDe090EfCD6ef4b86792e2D84E55a5fa8d49D25D2) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://sonicscan.org//address/0x4F6f44325828D2A40724A0a966F33d75cD1DF7c1) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://sonicscan.org//address/0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9) |  not upgradeable | |--------|--------|
|  [ACLManager](https://sonicscan.org//address/0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741) |  not upgradeable | |--------|--------|
|  [Collector](https://sonicscan.org//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  Not owned | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  Governance | |--------|--------|
|  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  not upgradeable | |--------|--------|
|  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  not upgradeable | |--------|--------|
|  [LayerZero adapter](https://sonicscan.org//address/0x7B8FaC105A7a85f02C3f31559d2ee7313BDC5d7f) |  not upgradeable | |--------|--------|
|  [Hyperlane adapter](https://sonicscan.org//address/0x1098F187F5f444Bc1c77cD9beE99e8d460347F5F) |  not upgradeable | |--------|--------|
|  [CCIP adapter](https://sonicscan.org//address/0x1905fCdDa41241C0871A5eC3f9dcC3E8d247261D) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  Governance | |--------|--------|
|  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  not upgradeable | |--------|--------|

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
|  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolConfigurator |  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://sonicscan.org//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7), [Aave Protocol Guardian Sonic](https://sonicscan.org//address/0xA4aF5175ed38e791362F01c67a487DbA4aE07dFe) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://sonicscan.org//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7), [Aave Protocol Guardian Sonic](https://sonicscan.org//address/0xA4aF5175ed38e791362F01c67a487DbA4aE07dFe) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://sonicscan.org//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [RewardsController](https://sonicscan.org//address/0xD93e3Ae8f69D04d484d1652Ca569d4b0522414DF) |  [PoolAddressesProvider](https://sonicscan.org//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyEmissionManager |  [EmissionManager](https://sonicscan.org//address/0x4F6f44325828D2A40724A0a966F33d75cD1DF7c1) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://sonicscan.org//address/0xDe090EfCD6ef4b86792e2D84E55a5fa8d49D25D2) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://sonicscan.org//address/0x4F6f44325828D2A40724A0a966F33d75cD1DF7c1) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://sonicscan.org//address/0xCFDAdA7DCd2e785cF706BaDBC2B8Af5084d595e9) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ACLManager](https://sonicscan.org//address/0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741) |  - |  onlyRole |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [Collector](https://sonicscan.org//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  [0x0000000000000000000000000000000000000000](https://sonicscan.org//address/0x0000000000000000000000000000000000000000) |  onlyFundsAdmin |   |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://sonicscan.org//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  [0x0000000000000000000000000000000000000000](https://sonicscan.org//address/0x0000000000000000000000000000000000000000) |  onlyAdminOrRecipient |  [0xd059Ec2CF261858e23fB5a3a5debD929501e99e8](https://sonicscan.org//address/0xd059Ec2CF261858e23fB5a3a5debD929501e99e8) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566) |  - |  onlyRetryGuardian |  [BGD](https://sonicscan.org//address/0x7837d7a167732aE41627A3B829871d9e32e2e7f2) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Sonic](https://sonicscan.org//address/0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  onlyGuardian |  [Aave Governance Guardian Sonic](https://sonicscan.org//address/0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Sonic](https://sonicscan.org//address/0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f), [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  onlyRescueGuardian |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [PayloadsControllerProxyAdmin](https://sonicscan.org//address/0xd8249A5Bbe57dDCfEDE09B091b185A31bC02b8E7) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  - |  onlyOwner |  [PayloadsController](https://sonicscan.org//address/0x0846C28Dd54DEA4Fd7Fb31bcc5EB81673D68c695) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [LayerZero adapter](https://sonicscan.org//address/0x7B8FaC105A7a85f02C3f31559d2ee7313BDC5d7f) |  - |  trustedRemote |  [CrossChainController(Eth)](https://sonicscan.org//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [Hyperlane adapter](https://sonicscan.org//address/0x1098F187F5f444Bc1c77cD9beE99e8d460347F5F) |  - |  trustedRemote |  [CrossChainController(Eth)](https://sonicscan.org//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CCIP adapter](https://sonicscan.org//address/0x1905fCdDa41241C0871A5eC3f9dcC3E8d247261D) |  - |  trustedRemote |  [CrossChainController(Eth)](https://sonicscan.org//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyOwnerOrGuardian |  [Aave Granular Guardian Sonic](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566), [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyRescueGuardian |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyApprovedBridges |  [LayerZero adapter](https://sonicscan.org//address/0x7B8FaC105A7a85f02C3f31559d2ee7313BDC5d7f), [Hyperlane adapter](https://sonicscan.org//address/0x1098F187F5f444Bc1c77cD9beE99e8d460347F5F), [CCIP adapter](https://sonicscan.org//address/0x1905fCdDa41241C0871A5eC3f9dcC3E8d247261D) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://sonicscan.org//address/0x58e003a3C6f2Aeed6a2a6Bc77B504566523cb15c) |  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  onlyGuardian |  [Aave Granular Guardian Sonic](https://sonicscan.org//address/0x10078c1D8E46dd1ed5D8df2C42d5ABb969b11566) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [CrossChainControllerProxyAdmin](https://sonicscan.org//address/0x04aCbFA78c5F97a97995847AF2D6eaBD697552D4) |  - |  onlyOwner |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Sonic](https://sonicscan.org//address/0xA4aF5175ed38e791362F01c67a487DbA4aE07dFe) |  5/9 |  0xA4aF5175ed38e791362F01c67a487DbA4aE07dFe |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://sonicscan.org//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://sonicscan.org//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://sonicscan.org//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://sonicscan.org//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://sonicscan.org//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://sonicscan.org//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://sonicscan.org//address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://sonicscan.org//address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://sonicscan.org//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [BGD](https://sonicscan.org//address/0x7837d7a167732aE41627A3B829871d9e32e2e7f2) |  2/3 |  0x7837d7a167732aE41627A3B829871d9e32e2e7f2 |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://sonicscan.org//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://sonicscan.org//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://sonicscan.org//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Sonic](https://sonicscan.org//address/0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f) |  5/9 |  0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://sonicscan.org//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://sonicscan.org//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://sonicscan.org//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://sonicscan.org//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://sonicscan.org//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://sonicscan.org//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://sonicscan.org//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://sonicscan.org//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://sonicscan.org//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Sonic](https://sonicscan.org//address/0xA4aF5175ed38e791362F01c67a487DbA4aE07dFe) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Sonic](https://sonicscan.org//address/0x63C4422D6cc849549daeb600B7EcE52bD18fAd7f) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://sonicscan.org//address/0x7837d7a167732aE41627A3B829871d9e32e2e7f2) | |--------|--------|

### Collector Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://sonicscan.org//address/0x7b62461a3570c6AC8a9f8330421576e417B71EE7) | |--------|--------|
|  FUNDS_ADMIN_ROLE |   | |--------|--------|


# BASE 
## TENDERLY 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  not upgradeable | |--------|--------|
|  [Pool](https://basescan.org/address/0xA238Dd80C259a72e81d7e4664a9801593F98d1c5) |  Governance | |--------|--------|
|  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  Governance | |--------|--------|
|  [AaveOracle](https://basescan.org/address/0x2Cc0Fc26eD4563A5ce5e8bdcfe1A2878676Ae156) |  not upgradeable | |--------|--------|
|  [Collector](https://basescan.org/address/0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057) |  Governance | |--------|--------|
|  [RewardsController](https://basescan.org/address/0xf9cc4F0D883F1a1eb2c253bdb46c254Ca51E1F44) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://basescan.org/address/0x729b3EA8C005AbC58c9150fb57Ec161296F06766) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://basescan.org/address/0x2E549104c516b8657A7D888494DfbAbD7C70b464) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://basescan.org/address/0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://basescan.org/address/0x6533A273F3aC84Df91DCD654D6EBAbA73687e246) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://basescan.org/address/0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  not upgradeable | |--------|--------|
|  [ACLManager](https://basescan.org/address/0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://basescan.org/address/0x12DEB4025b79f2B43f6aeF079F9D77C3f9a67bb6) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://basescan.org/address/0x4A4c73d563395ad827511F70097d4Ef82E653805) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://basescan.org/address/0xa1c6aF35E0205f42256382C05243C543FEDBf4bB) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  Governance | |--------|--------|
|  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  not upgradeable | |--------|--------|
|  [Base native adapter](https://basescan.org/address/0x7120b1f8e5b73c0C0DC99C6e52Fe4937E7EA11e0) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  Governance | |--------|--------|

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
|  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://basescan.org/address/0xA238Dd80C259a72e81d7e4664a9801593F98d1c5) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyPoolConfigurator |  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://basescan.org/address/0xA238Dd80C259a72e81d7e4664a9801593F98d1c5) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyPoolAdmin |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://basescan.org/address/0xA238Dd80C259a72e81d7e4664a9801593F98d1c5) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyPoolAdmin |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [CapPlusRiskSteward](https://basescan.org/address/0x12DEB4025b79f2B43f6aeF079F9D77C3f9a67bb6), [FreezeSteward](https://basescan.org/address/0x4A4c73d563395ad827511F70097d4Ef82E653805) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://basescan.org/address/0x5731a04B1E775f0fdd454Bf70f3335886e9A96be) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [0x56C1a4b54921DEA9A344967a8693C7E661D72968 (Safe)](https://basescan.org/address/0x56C1a4b54921DEA9A344967a8693C7E661D72968) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://basescan.org/address/0x2Cc0Fc26eD4563A5ce5e8bdcfe1A2878676Ae156) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://basescan.org/address/0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyFundsAdmin |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://basescan.org/address/0xBA9424d650A4F5c80a0dA641254d1AcCE2A37057) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyAdminOrRecipient |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795), [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://basescan.org/address/0xf9cc4F0D883F1a1eb2c253bdb46c254Ca51E1F44) |  [PoolAddressesProvider](https://basescan.org/address/0xe20fCBdBfFC4Dd138cE8b2E6FBb6CB49777ad64D) |  onlyEmissionManager |  [EmissionManager](https://basescan.org/address/0x6533A273F3aC84Df91DCD654D6EBAbA73687e246) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://basescan.org/address/0x729b3EA8C005AbC58c9150fb57Ec161296F06766) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://basescan.org/address/0x2E549104c516b8657A7D888494DfbAbD7C70b464) |  - |  onlyOwner |  [0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45](https://basescan.org/address/0xA9F30e6ED4098e9439B2ac8aEA2d3fc26BcEbb45) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://basescan.org/address/0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://basescan.org/address/0x6533A273F3aC84Df91DCD654D6EBAbA73687e246) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://basescan.org/address/0x2f6571d3Eb9a4e350C68C36bCD2afe39530078E2) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  - |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://basescan.org/address/0x43955b0899Ab7232E3a454cf84AedD22Ad46FD33) |  - |  onlyRole |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://basescan.org/address/0x12DEB4025b79f2B43f6aeF079F9D77C3f9a67bb6) |  - |  onlyRiskCouncil |  [Risk Council](https://basescan.org/address/0xfbeB4AcB31340bA4de9C87B11dfBf7e2bc8C0bF1) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://basescan.org/address/0x4A4c73d563395ad827511F70097d4Ef82E653805) |  - |  onlyEmergencyAdmin |  [0x56C1a4b54921DEA9A344967a8693C7E661D72968 (Safe)](https://basescan.org/address/0x56C1a4b54921DEA9A344967a8693C7E661D72968) |  setFreeze | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://basescan.org/address/0xa1c6aF35E0205f42256382C05243C543FEDBf4bB) |  - |  onlyRetryGuardian |  [BGD](https://basescan.org/address/0x7FDA7C3528ad8f05e62148a700D456898b55f8d2) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://basescan.org/address/0xa1c6aF35E0205f42256382C05243C543FEDBf4bB) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Base](https://basescan.org/address/0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://basescan.org/address/0xa1c6aF35E0205f42256382C05243C543FEDBf4bB) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyGuardian |  [Aave Governance Guardian Base](https://basescan.org/address/0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Base](https://basescan.org/address/0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe), [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyRescueGuardian |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  - |  onlyOwner |  [PayloadsController](https://basescan.org/address/0x2DC219E716793fb4b21548C0f009Ba3Af753ab01) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Base native adapter](https://basescan.org/address/0x7120b1f8e5b73c0C0DC99C6e52Fe4937E7EA11e0) |  - |  trustedRemote |  [CrossChainController(Eth)](https://basescan.org/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyOwner |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyOwnerOrGuardian |  [BGD](https://basescan.org/address/0x7FDA7C3528ad8f05e62148a700D456898b55f8d2), [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyRescueGuardian |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://basescan.org/address/0x529467C76f234F2bD359d7ecF7c660A2846b04e2) |  [ProxyAdmin](https://basescan.org/address/0xc85b1E333aecc99340b2320493Fe2d22b8734795) |  onlyApprovedBridges |  [Base native adapter](https://basescan.org/address/0x7120b1f8e5b73c0C0DC99C6e52Fe4937E7EA11e0) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [0x56C1a4b54921DEA9A344967a8693C7E661D72968 (Safe)](https://basescan.org/address/0x56C1a4b54921DEA9A344967a8693C7E661D72968) |  5/9 |  0x56C1a4b54921DEA9A344967a8693C7E661D72968 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://basescan.org/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://basescan.org/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://basescan.org/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://basescan.org/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://basescan.org/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://basescan.org/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://basescan.org/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://basescan.org/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://basescan.org/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://basescan.org/address/0xfbeB4AcB31340bA4de9C87B11dfBf7e2bc8C0bF1) |  1/1 |  0xfbeB4AcB31340bA4de9C87B11dfBf7e2bc8C0bF1 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://basescan.org/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://basescan.org/address/0x7FDA7C3528ad8f05e62148a700D456898b55f8d2) |  2/3 |  0x7FDA7C3528ad8f05e62148a700D456898b55f8d2 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://basescan.org/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://basescan.org/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://basescan.org/address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Base](https://basescan.org/address/0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe) |  5/9 |  0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://basescan.org/address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272](https://basescan.org/address/0xA1C9CEeD5Ff78f700dC4930514621843b5fAc272), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://basescan.org/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27](https://basescan.org/address/0xfd639f49Da6cadc98f01B60900C8BE30C38c4B27), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://basescan.org/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://basescan.org/address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://basescan.org/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://basescan.org/address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://basescan.org/address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  EMERGENCY_ADMIN |  [0x56C1a4b54921DEA9A344967a8693C7E661D72968 (Safe)](https://basescan.org/address/0x56C1a4b54921DEA9A344967a8693C7E661D72968) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |  [0xab515542d621574f9b5212d50593cD0C07e641bD](https://basescan.org/address/0xab515542d621574f9b5212d50593cD0C07e641bD) | |--------|--------|
|  RISK_ADMIN |  [CapPlusRiskSteward](https://basescan.org/address/0x12DEB4025b79f2B43f6aeF079F9D77C3f9a67bb6), [FreezeSteward](https://basescan.org/address/0x4A4c73d563395ad827511F70097d4Ef82E653805) | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://basescan.org/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Base](https://basescan.org/address/0x360c0a69Ed2912351227a0b745f890CB2eBDbcFe) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://basescan.org/address/0x7FDA7C3528ad8f05e62148a700D456898b55f8d2) | |--------|--------|


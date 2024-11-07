# MAINNET 
## LIDO 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  not upgradeable | |--------|--------|
|  [Pool](https://etherscan.io/address/0x4e033931ad43597d96D6bcc25c280717730B58B1) |  Governance | |--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  Governance | |--------|--------|
|  [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  not upgradeable | |--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xE3C061981870C0C7b1f3C4F4bB36B95f1F260BE6) |  not upgradeable | |--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  Governance | |--------|--------|
|  [RewardsController](https://etherscan.io/address/0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://etherscan.io/address/0x0B8C700917a6991FEa7198dDFC80bc8962b5055D) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0xD0887AA7fEBC8962c622493646195e7c76D94fCE) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x66E1aBdb06e7363a618D65a910c540dfED23754f) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://etherscan.io/address/0xC6cAB8D39D93DC0Bd5986E7Ce5Bb956E30103A43) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  not upgradeable | |--------|--------|
|  [ProxyAdminLong](https://etherscan.io/address/0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517) |  not upgradeable | |--------|--------|
|  [ACLManager](https://etherscan.io/address/0x013E2C7567b6231e865BB9273F8c7656103611c0) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://etherscan.io/address/0x3843b29118fFC18d5d12EE079d0324E1bF115e69) |  not upgradeable | |--------|--------|
|  [AaveMerkleDistributor](https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10) |  not upgradeable | |--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  not upgradeable | |--------|--------|
|  [Manual AGRS](https://etherscan.io/address/0x30adC2f98ff78fDde12F191Acb82699f640694FB) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|

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
|  configureGovernance |  Governance | |--------|--------|
|  cancelProposal |  Multi-sig | |--------|--------|
|  updateRiskParameters |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x4e033931ad43597d96D6bcc25c280717730B58B1) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyPoolConfigurator |  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x4e033931ad43597d96D6bcc25c280717730B58B1) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x4e033931ad43597d96D6bcc25c280717730B58B1) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [CapPlusRiskSteward](https://etherscan.io/address/0x3843b29118fFC18d5d12EE079d0324E1bF115e69) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [CapPlusRiskSteward](https://etherscan.io/address/0x3843b29118fFC18d5d12EE079d0324E1bF115e69), [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x342631c6CeFC9cfbf97b2fe4aa242a236e1fd517) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  - |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFee, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0xE3C061981870C0C7b1f3C4F4bB36B95f1F260BE6) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://etherscan.io/address/0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb) |  [PoolAddressesProvider](https://etherscan.io/address/0xcfBf336fe147D643B9Cb705648500e101504B16d) |  onlyEmissionManager |  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://etherscan.io/address/0x0B8C700917a6991FEa7198dDFC80bc8962b5055D) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0xD0887AA7fEBC8962c622493646195e7c76D94fCE) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x66E1aBdb06e7363a618D65a910c540dfED23754f) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://etherscan.io/address/0xC6cAB8D39D93DC0Bd5986E7Ce5Bb956E30103A43) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ProxyAdminLong](https://etherscan.io/address/0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517) |  - |  onlyOwner |  [Executor_lvl2](https://etherscan.io/address/0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://etherscan.io/address/0x013E2C7567b6231e865BB9273F8c7656103611c0) |  - |  onlyRole |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://etherscan.io/address/0x3843b29118fFC18d5d12EE079d0324E1bF115e69) |  - |  onlyRiskCouncil |  [Risk Council](https://etherscan.io/address/0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8) |  updateCaps | |--------|--------|--------|--------|--------|
|  [AaveMerkleDistributor](https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addDistributions, emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  bridge | |--------|--------|--------|--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  - |  onlyRescueGuardian |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://etherscan.io/address/0x30adC2f98ff78fDde12F191Acb82699f640694FB) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setRiskConfig, setAddressRestricted | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://etherscan.io/address/0x30adC2f98ff78fDde12F191Acb82699f640694FB) |  - |  onlyRiskCouncil |  [Risk Council](https://etherscan.io/address/0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8) |  updateCaps, updateRates, updateCollateralSide, updateLstPriceCaps, updateStablePriceCaps | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  5/9 |  0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://etherscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://etherscan.io/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://etherscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://etherscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://etherscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://etherscan.io/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://etherscan.io/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://etherscan.io/address/0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8) |  1/1 |  0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |  [0x49d9409111a6363d82C4371fFa43fAEA660C917B](https://etherscan.io/address/0x49d9409111a6363d82C4371fFa43fAEA660C917B), [0x45c00508C14601fd1C1e296eB3C0e3eEEdCa45D0](https://etherscan.io/address/0x45c00508C14601fd1C1e296eB3C0e3eEEdCa45D0), [0xab515542d621574f9b5212d50593cD0C07e641bD](https://etherscan.io/address/0xab515542d621574f9b5212d50593cD0C07e641bD) | |--------|--------|
|  RISK_ADMIN |  [CapPlusRiskSteward](https://etherscan.io/address/0x3843b29118fFC18d5d12EE079d0324E1bF115e69) | |--------|--------|


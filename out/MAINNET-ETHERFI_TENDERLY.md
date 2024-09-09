# MAINNET 
## ETHERFI_TENDERLY 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  not upgradeable | |--------|--------|
|  [Pool](https://etherscan.io/address/0x0AA97c284e98396202b6A04024F5E2c65026F3c0) |  Governance | |--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  Governance | |--------|--------|
|  [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  not upgradeable | |--------|--------|
|  [AaveOracle](https://etherscan.io/address/0x43b64f28A678944E0655404B0B98E443851cC34F) |  not upgradeable | |--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  Governance | |--------|--------|
|  [RewardsController](https://etherscan.io/address/0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://etherscan.io/address/0xAB911dFB2bB9e264EE836F30D3367618f8Aef965) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0xB04427eFdd15b0EC233400d2F7f7E4fd0291C285) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x8831a5EEB5e10D2E5148Ca91ee9E4716a00c2CB2) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://etherscan.io/address/0xbaA999AC55EAce41CcAE355c77809e68Bb345170) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  not upgradeable | |--------|--------|
|  [ProxyAdminLong](https://etherscan.io/address/0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517) |  not upgradeable | |--------|--------|
|  [ACLManager](https://etherscan.io/address/0x3cE8E2eb6501d4705477643E96881B1bef6A2DB3) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://etherscan.io/address/0x1EBdbE77bbDDD284BdCE8D7981D7eD26D6af58cA) |  not upgradeable | |--------|--------|
|  [AaveMerkleDistributor](https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10) |  not upgradeable | |--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|

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
|  configureGovernance |  Governance | |--------|--------|
|  cancelProposal |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x0AA97c284e98396202b6A04024F5E2c65026F3c0) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyPoolConfigurator |  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x0AA97c284e98396202b6A04024F5E2c65026F3c0) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x0AA97c284e98396202b6A04024F5E2c65026F3c0) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x8438F4D29D895d75C86BDC25360c25eF0607E65d) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  - |  onlyPoolAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFee, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0x43b64f28A678944E0655404B0B98E443851cC34F) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://etherscan.io/address/0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb) |  [PoolAddressesProvider](https://etherscan.io/address/0xeBa440B438Ad808101d1c451C1C5322c90BEFCdA) |  onlyEmissionManager |  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://etherscan.io/address/0xAB911dFB2bB9e264EE836F30D3367618f8Aef965) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0xB04427eFdd15b0EC233400d2F7f7E4fd0291C285) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x8831a5EEB5e10D2E5148Ca91ee9E4716a00c2CB2) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://etherscan.io/address/0xbaA999AC55EAce41CcAE355c77809e68Bb345170) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ProxyAdminLong](https://etherscan.io/address/0x86C3FfeE349A7cFf7cA88C449717B1b133bfb517) |  - |  onlyOwner |  [Executor_lvl2](https://etherscan.io/address/0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://etherscan.io/address/0x3cE8E2eb6501d4705477643E96881B1bef6A2DB3) |  - |  onlyRole |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://etherscan.io/address/0x1EBdbE77bbDDD284BdCE8D7981D7eD26D6af58cA) |  - |  onlyRiskCouncil |  [Risk Council](https://etherscan.io/address/0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8) |  updateCaps | |--------|--------|--------|--------|--------|
|  [AaveMerkleDistributor](https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addDistributions, emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  bridge | |--------|--------|--------|--------|--------|
|  [AavePolEthBridge](https://etherscan.io/address/0x1C2BA5b8ab8e795fF44387ba6d251fa65AD20b36) |  - |  onlyRescueGuardian |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) |  5/9 |  0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://etherscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://etherscan.io/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://etherscan.io/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://etherscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://etherscan.io/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://etherscan.io/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://etherscan.io/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://etherscan.io/address/0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8) |  1/1 |  0x47c71dFEB55Ebaa431Ae3fbF99Ea50e0D3d30fA8 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  EMERGENCY_ADMIN |  [New Aave Guardian Ethereum](https://etherscan.io/address/0x2CFe3ec4d5a6811f4B8067F0DE7e47DfA938Aa30) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|


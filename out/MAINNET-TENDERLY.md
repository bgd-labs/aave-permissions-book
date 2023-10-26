# MAINNET 
## TENDERLY 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyPoolConfigurator |  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyPoolAdmin |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://etherscan.io/address/0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyPoolAdmin |   |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyEmergencyAdmin |   |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyAssetListingOrPoolAdmins |   |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyRiskOrPoolAdmins |   |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://etherscan.io/address/0x64b761D848206f447Fe2dd461b0c635Ec39EbB27) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyEmergencyOrPoolAdmin |   |  setReservePause | |--------|--------|--------|--------|--------|
|  [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  - |  onlyPoolAdmin |   |  updateFee, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://etherscan.io/address/0x54586bE62E3c3580375aE3723C145253060Ca0C2) |  - |  onlyAssetListingOrPoolAdmins |   |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyFundsAdmin |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://etherscan.io/address/0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyAdminOrRecipient |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476), [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://etherscan.io/address/0x8164Cc65827dcFe994AB23944CBC90e0aa80bFcb) |  [PoolAddressesProvider](https://etherscan.io/address/0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e) |  onlyEmissionManager |  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://etherscan.io/address/0xD322A49006FC828F9B5B37Ab215F99B4E5caB19C) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://etherscan.io/address/0xADC0A53095A0af87F3aa29FE0715B5c28016364e) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://etherscan.io/address/0x02e7B8511831B1b02d9018215a0f8f500Ea5c6B3) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://etherscan.io/address/0x223d844fc4B006D67c0cDbd39371A9F73f69d974) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://etherscan.io/address/0xbaA999AC55EAce41CcAE355c77809e68Bb345170) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://etherscan.io/address/0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://etherscan.io/address/0xc2aaCf6553D20d1e9d78E365AAba8032af9c85b0) |  - |  setRoleAdmin |   |   | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [AaveGovernanceV3](https://etherscan.io/address/0x9AEE0B04504CeF83A65AC3f0e838D0593BCb2BC7) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyShortExecutor |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  updateGasLimit, addVotingPortals, removeVotingPortals, setVotingConfigs, setPowerStrategy | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://etherscan.io/address/0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateGasLimit, addVotingPortals, removeVotingPortals, setVotingConfigs, setPowerStrategy | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://etherscan.io/address/0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyGuardian |  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  rescueVotingPortal | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://etherscan.io/address/0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://etherscan.io/address/0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |   | |--------|--------|--------|--------|--------|
|  [VotingMachine](https://etherscan.io/address/0x617332a777780F546261247F621051d0b98975Eb) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateGasLimit | |--------|--------|--------|--------|--------|
|  [VotingPortal_Eth_Eth](https://etherscan.io/address/0xf23f7De3AC42F22eBDA17e64DC4f51FB66b8E21f) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setStartVotingGasLimit, setVoteViaPortalGasLimit | |--------|--------|--------|--------|--------|
|  [VotingPortal_Eth_Avax](https://etherscan.io/address/0x33aCEf7365809218485873B7d0d67FeE411B5D79) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setStartVotingGasLimit, setVoteViaPortalGasLimit | |--------|--------|--------|--------|--------|
|  [VotingPortal_Eth_Pol](https://etherscan.io/address/0x9b24C168d6A76b5459B1d47071a54962a4df36c3) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setStartVotingGasLimit, setVoteViaPortalGasLimit | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  - |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Executor_lvl2](https://etherscan.io/address/0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957) |  - |  onlyOwner |  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [EmergencyRegistry](https://etherscan.io/address/0x73C6Fb358dDA8e84D50e98A98F7c0dF32e15C7e9) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setEmergency | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyGuardian |  [BGD](https://etherscan.io/address/0xb812d0944f8F581DfAA3a93Dda0d22EcEf51A9CF) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyOwnerOrGuardian |  [BGD](https://etherscan.io/address/0xb812d0944f8F581DfAA3a93Dda0d22EcEf51A9CF), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyRescueGuardian |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedSenders |  [AaveGovernanceV3](https://etherscan.io/address/0x9AEE0B04504CeF83A65AC3f0e838D0593BCb2BC7), [VotingMachine](https://etherscan.io/address/0x617332a777780F546261247F621051d0b98975Eb), [VotingPortal_Eth_Eth](https://etherscan.io/address/0xf23f7De3AC42F22eBDA17e64DC4f51FB66b8E21f), [VotingPortal_Eth_Avax](https://etherscan.io/address/0x33aCEf7365809218485873B7d0d67FeE411B5D79), [VotingPortal_Eth_Pol](https://etherscan.io/address/0x9b24C168d6A76b5459B1d47071a54962a4df36c3), [Deployer](https://etherscan.io/address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://etherscan.io/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  [ProxyAdmin](https://etherscan.io/address/0xD3cF979e676265e4f6379749DECe4708B9A22476) |  onlyApprovedBridges |  [0xDB8953194810b1942544fA528791278D458719D5](https://etherscan.io/address/0xDB8953194810b1942544fA528791278D458719D5), [0x2a323be63e08E08536Fc3b5d8C6f24825e68895e](https://etherscan.io/address/0x2a323be63e08E08536Fc3b5d8C6f24825e68895e), [0x6Abb61beb5848B476d026C4934E8a6415e2E75a8](https://etherscan.io/address/0x6Abb61beb5848B476d026C4934E8a6415e2E75a8), [0xb13712De579E1f9943502FFCf72eab6ec348cF79](https://etherscan.io/address/0xb13712De579E1f9943502FFCf72eab6ec348cF79) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Address |Owners |
|----------|----------|----------|
|  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633 |  [0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707](https://etherscan.io/address/0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707), [0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39](https://etherscan.io/address/0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://etherscan.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xe5d453700d99296c2c085B8119BD6c152Cf63FA6](https://etherscan.io/address/0xe5d453700d99296c2c085B8119BD6c152Cf63FA6), [0xF1ba2231F373CffD47641540CfaEB1f21E50659B](https://etherscan.io/address/0xF1ba2231F373CffD47641540CfaEB1f21E50659B), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://etherscan.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://etherscan.io/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x9343dcB6A3A523510F3499004D8aa595Baa25bc5](https://etherscan.io/address/0x9343dcB6A3A523510F3499004D8aa595Baa25bc5), [0x2BEDd8645B407B3B6447fbC09B269eC7a5794606](https://etherscan.io/address/0x2BEDd8645B407B3B6447fbC09B269eC7a5794606) | |--------|--------|--------|
|  [BGD](https://etherscan.io/address/0xb812d0944f8F581DfAA3a93Dda0d22EcEf51A9CF) |  0xb812d0944f8F581DfAA3a93Dda0d22EcEf51A9CF |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://etherscan.io/address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://etherscan.io/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  DEFAULT_ADMIN |   | |--------|--------|
|  EMERGENCY_ADMIN |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  POOL_ADMIN |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

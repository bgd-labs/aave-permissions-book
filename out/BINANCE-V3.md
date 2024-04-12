# BINANCE 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  not upgradeable | |--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  Governance | |--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  Governance | |--------|--------|
|  [AaveOracle](https://bscscan.com/address/0x39bc1bfDa2130d6Bb6DBEfd366939b4c7aa7C697) |  not upgradeable | |--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  Governance | |--------|--------|
|  [RewardsController](https://bscscan.com/address/0xC206C2764A9dBF27d599613b8F9A63ACd1160ab4) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://bscscan.com/address/0xd91d1331db4F436DaF47Ec9Dd86deCb8EEF946B4) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://bscscan.com/address/0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://bscscan.com/address/0x0727a6494095511078d63143A8a1E90b9f310880) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://bscscan.com/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71) |  not upgradeable | |--------|--------|
|  [RatesFactory](https://bscscan.com/address/0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6) |  Governance | |--------|--------|
|  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  not upgradeable | |--------|--------|
|  [ACLManager](https://bscscan.com/address/0x2D97F8FA96886Fd923c065F5457F9DDd494e3877) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  Governance | |--------|--------|
|  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  not upgradeable | |--------|--------|
|  [LayerZeroAdapter](https://bscscan.com/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  not upgradeable | |--------|--------|
|  [HyperLaneAdapter](https://bscscan.com/address/0x118DFD5418890c0332042ab05173Db4A2C1d283c) |  not upgradeable | |--------|--------|
|  [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  Governance | |--------|--------|

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
|  pausePool |  Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Governance,Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolConfigurator |  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyEmergencyAdmin |  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412), [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://bscscan.com/address/0x39bc1bfDa2130d6Bb6DBEfd366939b4c7aa7C697) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyFundsAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyAdminOrRecipient |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://bscscan.com/address/0xC206C2764A9dBF27d599613b8F9A63ACd1160ab4) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyEmissionManager |  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://bscscan.com/address/0xd91d1331db4F436DaF47Ec9Dd86deCb8EEF946B4) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://bscscan.com/address/0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://bscscan.com/address/0x0727a6494095511078d63143A8a1E90b9f310880) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://bscscan.com/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://bscscan.com/address/0x02e9b27599C4Bf8f789d34b6E65C51092c3d9FA6) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://bscscan.com/address/0x2D97F8FA96886Fd923c065F5457F9DDd494e3877) |  - |  onlyRole |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) |  - |  onlyRiskCouncil |  [Risk Council](https://bscscan.com/address/0x126dc589cc75f17385dD95516F3F1788d862E7bc) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412) |  - |  onlyEmergencyAdmin |  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) |  setFreeze | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyGuardian |  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwnerOrGuardian |  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyRescueGuardian |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  - |  onlyOwner |  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [LayerZeroAdapter](https://bscscan.com/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [HyperLaneAdapter](https://bscscan.com/address/0x118DFD5418890c0332042ab05173Db4A2C1d283c) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwnerOrGuardian |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyRescueGuardian |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyApprovedBridges |  [LayerZeroAdapter](https://bscscan.com/address/0xFF1137243698CaA18EE364Cc966CF0e02A4e6327), [HyperLaneAdapter](https://bscscan.com/address/0x118DFD5418890c0332042ab05173Db4A2C1d283c), [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyGuardian |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) |  solveEmergency | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) |  6/10 |  0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://bscscan.com/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://bscscan.com/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xb647055A9915bF9c8021a684E175A353525b9890](https://bscscan.com/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://bscscan.com/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0xF0BA0fF18498F6fab57b8286006F9512D6aE2565](https://bscscan.com/address/0xF0BA0fF18498F6fab57b8286006F9512D6aE2565), [0x80F11A20cd3855cAe3640558Ff320401EE970cFa](https://bscscan.com/address/0x80F11A20cd3855cAe3640558Ff320401EE970cFa), [0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d](https://bscscan.com/address/0x5bE3E96Cdc3A97628bD7308d3588B9a474F4A54d), [0x585E06CA576D0565a035301819FD2cfD7104c1E8](https://bscscan.com/address/0x585E06CA576D0565a035301819FD2cfD7104c1E8), [0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1](https://bscscan.com/address/0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://bscscan.com/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7) | |--------|--------|--------|--------|
|  [Risk Council](https://bscscan.com/address/0x126dc589cc75f17385dD95516F3F1788d862E7bc) |  1/1 |  0x126dc589cc75f17385dD95516F3F1788d862E7bc |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://bscscan.com/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) |  2/3 |  0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://bscscan.com/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://bscscan.com/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://bscscan.com/address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Guardian Binance](https://bscscan.com/address/0x25170e9Ed4077ABA7D3DD03cf4A9F45Dc6D0fcCD) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |  [0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3](https://bscscan.com/address/0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3) | |--------|--------|
|  RISK_ADMIN |  [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412), [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) | |--------|--------|


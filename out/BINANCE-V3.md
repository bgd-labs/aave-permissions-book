# BINANCE 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  not upgradeable | |--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  Governance | |--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  Governance | |--------|--------|
|  [AaveOracle](https://bscscan.com/address/0x39bc1bfDa2130d6Bb6DBEfd366939b4c7aa7C697) |  not upgradeable | |--------|--------|
|  [RewardsController](https://bscscan.com/address/0xC206C2764A9dBF27d599613b8F9A63ACd1160ab4) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://bscscan.com/address/0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7) |  not upgradeable | |--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://bscscan.com/address/0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5) |  not upgradeable | |--------|--------|
|  [ParaSwapRepayAdapter](https://bscscan.com/address/0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://bscscan.com/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71) |  not upgradeable | |--------|--------|
|  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  not upgradeable | |--------|--------|
|  [ACLManager](https://bscscan.com/address/0x2D97F8FA96886Fd923c065F5457F9DDd494e3877) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412) |  not upgradeable | |--------|--------|
|  [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) |  not upgradeable | |--------|--------|
|  [Manual AGRS](https://bscscan.com/address/0xbe7998712402B6A63975515A532Ce503437998b7) |  not upgradeable | |--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  Governance | |--------|--------|
|  [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://bscscan.com/address/0xe4FB5e3F506BE0095f38004f993D16fdA8224383) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  Governance | |--------|--------|
|  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  not upgradeable | |--------|--------|
|  [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  not upgradeable | |--------|--------|
|  [LayerZero adapter](https://bscscan.com/address/0xa5cc218513305221201f196760E9e64e9D49d98A) |  not upgradeable | |--------|--------|
|  [Hyperlane adapter](https://bscscan.com/address/0x3F006299eC88985c18E6e885EeA29A49eC579882) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  Governance | |--------|--------|
|  updateReserveCaps |  Governance,External Contract | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  Governance | |--------|--------|
|  upgradeAaveOracles |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  Governance,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,External Contract,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|
|  updateRiskParameters |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolConfigurator |  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://bscscan.com/address/0x6807dc923806fE8Fd134338EABCA509979a7e0cB) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [0x87F4aDD5425f566F156af5074BaD2dFFCd20C594](https://bscscan.com/address/0x87F4aDD5425f566F156af5074BaD2dFFCd20C594) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyRiskOrPoolOrEmergencyAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [0x87F4aDD5425f566F156af5074BaD2dFFCd20C594](https://bscscan.com/address/0x87F4aDD5425f566F156af5074BaD2dFFCd20C594), [Aave Protocol Guardian Binance](https://bscscan.com/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://bscscan.com/address/0x67bdF23C7fCE7C65fF7415Ba3F2520B45D6f9584) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [Aave Protocol Guardian Binance](https://bscscan.com/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://bscscan.com/address/0x39bc1bfDa2130d6Bb6DBEfd366939b4c7aa7C697) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [RewardsController](https://bscscan.com/address/0xC206C2764A9dBF27d599613b8F9A63ACd1160ab4) |  [PoolAddressesProvider](https://bscscan.com/address/0xff75B6da14FfbbfD355Daf7a2731456b3562Ba6D) |  onlyEmissionManager |  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://bscscan.com/address/0x0c2C95b24529664fE55D4437D7A31175CFE6c4f7) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [ParaSwapLiquiditySwapAdapter](https://bscscan.com/address/0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [ParaSwapRepayAdapter](https://bscscan.com/address/0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://bscscan.com/address/0x6eD1c70aa357fB8a7e1Eac85aa59e33287Df8f85) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://bscscan.com/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://bscscan.com/address/0x2D97F8FA96886Fd923c065F5457F9DDd494e3877) |  - |  onlyRole |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595) |  - |  onlyRiskCouncil |  [Risk Council](https://bscscan.com/address/0x126dc589cc75f17385dD95516F3F1788d862E7bc) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412) |  - |  onlyEmergencyAdmin |  [Aave Protocol Guardian Binance](https://bscscan.com/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setFreeze | |--------|--------|--------|--------|--------|
|  [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approvePool, revokePool | |--------|--------|--------|--------|--------|
|  [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) |  - |  onlyOwnerOrGuardian |  [Finance Risk Council](https://bscscan.com/address/0x22740deBa78d5a0c24C58C740e3715ec29de1bFa), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  depositV3, withdrawV3, withdrawV2, migrateV2toV3, migrateBetweenV3 | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://bscscan.com/address/0xbe7998712402B6A63975515A532Ce503437998b7) |  - |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setRiskConfig, setAddressRestricted | |--------|--------|--------|--------|--------|
|  [Manual AGRS](https://bscscan.com/address/0xbe7998712402B6A63975515A532Ce503437998b7) |  - |  onlyRiskCouncil |  [Risk Council](https://bscscan.com/address/0x126dc589cc75f17385dD95516F3F1788d862E7bc) |  updateCaps, updateRates, updateCollateralSide, updateLstPriceCaps, updateStablePriceCaps | |--------|--------|--------|--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyFundsAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43), [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://bscscan.com/address/0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyAdminOrRecipient |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43), [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43) |  - |  onlyCleanUpRole |  [CleanUp Admin](https://bscscan.com/address/0xdeadD8aB03075b7FBA81864202a2f59EE25B312b), [ACI Automation](https://bscscan.com/address/0x3Cbded22F878aFC8d39dCD744d3Fe62086B76193) |  renewAllowance, batchRepayBadDebt, batchLiquidate, batchRepayBadDebt | |--------|--------|--------|--------|--------|
|  [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43) |  - |  onlyAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  setAvailableBudget | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://bscscan.com/address/0xe4FB5e3F506BE0095f38004f993D16fdA8224383) |  - |  onlyRetryGuardian |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://bscscan.com/address/0xe4FB5e3F506BE0095f38004f993D16fdA8224383) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Binance](https://bscscan.com/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://bscscan.com/address/0xe4FB5e3F506BE0095f38004f993D16fdA8224383) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyGuardian |  [Aave Governance Guardian Binance](https://bscscan.com/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Binance](https://bscscan.com/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyRescueGuardian |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  - |  onlyOwner |  [PayloadsController](https://bscscan.com/address/0xE5EF2Dd06755A97e975f7E282f828224F2C3e627) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [LayerZero adapter](https://bscscan.com/address/0xa5cc218513305221201f196760E9e64e9D49d98A) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [Hyperlane adapter](https://bscscan.com/address/0x3F006299eC88985c18E6e885EeA29A49eC579882) |  - |  trustedRemote |  [CrossChainController(Eth)](https://bscscan.com/address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwner |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyOwnerOrGuardian |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964), [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyRescueGuardian |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyApprovedBridges |  [CCIP adapter](https://bscscan.com/address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67), [LayerZero adapter](https://bscscan.com/address/0xa5cc218513305221201f196760E9e64e9D49d98A), [Hyperlane adapter](https://bscscan.com/address/0x3F006299eC88985c18E6e885EeA29A49eC579882) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://bscscan.com/address/0x9d33ee6543C9b2C8c183b8fb58fB089266cffA19) |  [ProxyAdmin](https://bscscan.com/address/0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c) |  onlyGuardian |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) |  solveEmergency | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Binance](https://bscscan.com/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  5/9 |  0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://bscscan.com/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://bscscan.com/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://bscscan.com/address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://bscscan.com/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://bscscan.com/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://bscscan.com/address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e](https://bscscan.com/address/0xC5bE5c0134857B4b96F45AA6f6B77DB96Ac1487e), [0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E](https://bscscan.com/address/0xd4af2E86a27F8F77B0556E081F97B215C9cA8f2E), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://bscscan.com/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://bscscan.com/address/0x126dc589cc75f17385dD95516F3F1788d862E7bc) |  2/2 |  0x126dc589cc75f17385dD95516F3F1788d862E7bc |  [0xc2cf0387f2a83A7F5C6675F4CDe7F367ea1B989a](https://bscscan.com/address/0xc2cf0387f2a83A7F5C6675F4CDe7F367ea1B989a), [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://bscscan.com/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [Finance Risk Council](https://bscscan.com/address/0x22740deBa78d5a0c24C58C740e3715ec29de1bFa) |  3/4 |  0x22740deBa78d5a0c24C58C740e3715ec29de1bFa |  [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://bscscan.com/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xb647055A9915bF9c8021a684E175A353525b9890](https://bscscan.com/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://bscscan.com/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://bscscan.com/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb) | |--------|--------|--------|--------|
|  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) |  2/3 |  0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://bscscan.com/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://bscscan.com/address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://bscscan.com/address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Binance](https://bscscan.com/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  5/9 |  0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://bscscan.com/address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://bscscan.com/address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://bscscan.com/address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://bscscan.com/address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://bscscan.com/address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://bscscan.com/address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://bscscan.com/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://bscscan.com/address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://bscscan.com/address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  EMERGENCY_ADMIN |  [Aave Protocol Guardian Binance](https://bscscan.com/address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |  [0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3](https://bscscan.com/address/0x14F8e5Fe35b2d0D67dBcE9329f1b5d09f60c06C3) | |--------|--------|
|  RISK_ADMIN |  [0x87F4aDD5425f566F156af5074BaD2dFFCd20C594](https://bscscan.com/address/0x87F4aDD5425f566F156af5074BaD2dFFCd20C594) | |--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Binance](https://bscscan.com/address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://bscscan.com/address/0xE8C5ab722d0b1B7316Cc4034f2BE91A5B1d29964) | |--------|--------|

### Collector Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  FUNDS_ADMIN_ROLE |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a), [ClinicSteward](https://bscscan.com/address/0x9e842f55Fdbb8F332D7c7aCe2B67fa5e4CCAAc43), [PoolExposureSteward](https://bscscan.com/address/0x58AfE45eE7D7f2AE9c26827F33A6f319Feb68Df8) | |--------|--------|

### Clinic Steward Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://bscscan.com/address/0x9390B1735def18560c509E2d0bc090E9d6BA257a) | |--------|--------|
|  CLEANUP_ROLE |  [CleanUp Admin](https://bscscan.com/address/0xdeadD8aB03075b7FBA81864202a2f59EE25B312b), [ACI Automation](https://bscscan.com/address/0x3Cbded22F878aFC8d39dCD744d3Fe62086B76193) | |--------|--------|


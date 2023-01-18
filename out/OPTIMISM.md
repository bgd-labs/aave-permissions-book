# OPTIMISM 
## V3 
## contracts && permits
| contract |proxyAdmin |modifier |caller |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  - |  onlyOwner |  [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://optimistic.etherscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolConfigurator |  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://optimistic.etherscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://optimistic.etherscan.io/address/0x794a61358D6845594F94dc1DB02A252b5b4814aD) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyPoolAdmin |   |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyAdmin |   |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyAssetListingOrPoolAdmins |   |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyRiskOrPoolAdmins |   |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E) |  [PoolAddressesProvider](https://optimistic.etherscan.io/address/0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb) |  onlyEmergencyOrPoolAdmin |   |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://optimistic.etherscan.io/address/0xD81eb3728a631871a7eBBaD631b5f424909f0c77) |  - |  onlyAssetListingOrPoolAdmins |   |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [CollectorController](https://optimistic.etherscan.io/address/0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21) |  - |  onlyOwner |  [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c) |  approve, transfer | |--------|--------|--------|--------|--------|
|  [Collector](https://optimistic.etherscan.io/address/0xB2289E329D2F85F1eD31Adbb30eA345278F21bcf) |  [0xe50c8c619d05ff98b22adf991f17602c774f785c](https://optimistic.etherscan.io/address/0xe50c8c619d05ff98b22adf991f17602c774f785c) |  onlyFundsAdmin |  [CollectorController](https://optimistic.etherscan.io/address/0xA77E4A084d7d4f064E326C0F6c0aCefd47A5Cb21) |  approve, transfer, setFundsAdmin | |--------|--------|--------|--------|--------|
|  [RewardsController](https://optimistic.etherscan.io/address/0x929EC64c34a17401F460460D4B9390518E5B473e) |  [0xa97684ead0e402dc232d5a977953df7ecbab3cdb](https://optimistic.etherscan.io/address/0xa97684ead0e402dc232d5a977953df7ecbab3cdb) |  onlyEmissionManager |  [0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73](https://optimistic.etherscan.io/address/0x048f2228D7Bf6776f99aB50cB1b1eaB4D1d4cA73) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|

## Admins 
| Role |Contract |
|----------|----------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  DEFAULT_ADMIN |   | |--------|--------|
|  EMERGENCY_ADMIN |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  POOL_ADMIN |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

## Guardians 
| Guardian |Owners |
|----------|----------|


# GNOSIS 
## TENDERLY 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  not upgradeable | |--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  Governance | |--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  Governance | |--------|--------|
|  [AaveOracle](https://gnosisscan.io//address/0xeb0a051be10228213BAEb449db63719d6742F7c4) |  not upgradeable | |--------|--------|
|  [Collector](https://gnosisscan.io//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  Governance | |--------|--------|
|  [RewardsController](https://gnosisscan.io//address/0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d) |  Governance | |--------|--------|
|  [WrappedTokenGatewayV3](https://gnosisscan.io//address/0xfE76366A986B72c3f2923e05E6ba07b7de5401e4) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://gnosisscan.io//address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://gnosisscan.io//address/0x1236010CECea55998384e795B59815D871f5f94d) |  not upgradeable | |--------|--------|
|  [RatesFactory](https://gnosisscan.io//address/0x73dDE2A75c06a108912bf7Ff600eDdCE9d96Ed25) |  Governance | |--------|--------|
|  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  not upgradeable | |--------|--------|
|  [ACLManager](https://gnosisscan.io//address/0xEc710f59005f48703908bC519D552Df5B8472614) |  not upgradeable | |--------|--------|
|  [CapPlusRiskSteward](https://gnosisscan.io//address/0x33AE1f41546a2e05368Bf789b3d868813c0Ae658) |  not upgradeable | |--------|--------|
|  [FreezeSteward](https://gnosisscan.io//address/0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  Governance | |--------|--------|
|  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  not upgradeable | |--------|--------|
|  [Gnosis native adapter](https://gnosisscan.io//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  not upgradeable | |--------|--------|
|  [LayerZero adapter](https://gnosisscan.io//address/0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F) |  not upgradeable | |--------|--------|
|  [Hyperlane adapter](https://gnosisscan.io//address/0xA806DA549FcB2B4912a7dFFE4c1aA7A1ed0Bd5C9) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  Governance | |--------|--------|

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
|  pausePool |  External Contract,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  Governance,External Contract,Multi-sig | |--------|--------|
|  reserveListing |  Governance | |--------|--------|
|  adminsConfiguration |  Governance | |--------|--------|
|  protocolUpgradeablity |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Governance,Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolConfigurator |  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [Pool](https://gnosisscan.io//address/0xb50201558B00496A145fE76f7424749556E326D8) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyBridge |   |  mintUnbacked, backUnbacked | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyEmergencyAdmin |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F), [Aave Protocol Guardian Gnosis](https://gnosisscan.io//address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setPoolPause | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyRiskOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setReserveFreeze, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://gnosisscan.io//address/0x7304979ec9E4EaA0273b6A037a31c4e9e5A75D16) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyEmergencyOrPoolAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D), [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F), [Aave Protocol Guardian Gnosis](https://gnosisscan.io//address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://gnosisscan.io//address/0xeb0a051be10228213BAEb449db63719d6742F7c4) |  - |  onlyAssetListingOrPoolAdmins |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [Collector](https://gnosisscan.io//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyFundsAdmin |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://gnosisscan.io//address/0x3e652E97ff339B73421f824F5b03d75b62F1Fb51) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyAdminOrRecipient |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75), [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [RewardsController](https://gnosisscan.io//address/0xaD4F91D26254B6B0C6346b390dDA2991FDE2F20d) |  [PoolAddressesProvider](https://gnosisscan.io//address/0x36616cf17557639614c1cdDb356b1B83fc0B2132) |  onlyEmissionManager |  [EmissionManager](https://gnosisscan.io//address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://gnosisscan.io//address/0xfE76366A986B72c3f2923e05E6ba07b7de5401e4) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://gnosisscan.io//address/0x41585C50524fb8c3899B43D7D797d9486AAc94DB) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://gnosisscan.io//address/0x1236010CECea55998384e795B59815D871f5f94d) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [RatesFactory](https://gnosisscan.io//address/0x73dDE2A75c06a108912bf7Ff600eDdCE9d96Ed25) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  - |  - |  - | |--------|--------|--------|--------|--------|
|  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  - |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|
|  [ACLManager](https://gnosisscan.io//address/0xEc710f59005f48703908bC519D552Df5B8472614) |  - |  onlyRole |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [CapPlusRiskSteward](https://gnosisscan.io//address/0x33AE1f41546a2e05368Bf789b3d868813c0Ae658) |  - |  onlyRiskCouncil |  [Risk Council](https://gnosisscan.io//address/0xF221B08dD10e0C68D74F035764931Baa3b030481) |  updateCaps | |--------|--------|--------|--------|--------|
|  [FreezeSteward](https://gnosisscan.io//address/0x3Ceaf9b6CAb92dFe6302D0CC3F1BA880C28d35e5) |  - |  onlyEmergencyAdmin |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F), [Aave Protocol Guardian Gnosis](https://gnosisscan.io//address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  setFreeze | |--------|--------|--------|--------|--------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyGuardian |  [Aave Governance Guardian Gnosis](https://gnosisscan.io//address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwnerOrGuardian |  [Aave Governance Guardian Gnosis](https://gnosisscan.io//address/0x1A0581dd5C7C3DA4Ba1CDa7e0BcA7286afc4973b), [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyRescueGuardian |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  - |  onlyOwner |  [PayloadsController](https://gnosisscan.io//address/0x9A1F491B86D09fC1484b5fab10041B189B60756b) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [Gnosis native adapter](https://gnosisscan.io//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090) |  - |  trustedRemote |  [CrossChainController(Eth)](https://gnosisscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [LayerZero adapter](https://gnosisscan.io//address/0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F) |  - |  trustedRemote |  [CrossChainController(Eth)](https://gnosisscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [Hyperlane adapter](https://gnosisscan.io//address/0xA806DA549FcB2B4912a7dFFE4c1aA7A1ed0Bd5C9) |  - |  trustedRemote |  [CrossChainController(Eth)](https://gnosisscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwner |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyOwnerOrGuardian |  [BGD](https://gnosisscan.io//address/0xcb8a3E864D12190eD2b03cbA0833b15f2c314Ed8), [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyRescueGuardian |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyApprovedBridges |  [Gnosis native adapter](https://gnosisscan.io//address/0x3C06dce358add17aAf230f2234bCCC4afd50d090), [LayerZero adapter](https://gnosisscan.io//address/0x9b6f5ef589A3DD08670Dd146C11C4Fb33E04494F), [Hyperlane adapter](https://gnosisscan.io//address/0xA806DA549FcB2B4912a7dFFE4c1aA7A1ed0Bd5C9) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://gnosisscan.io//address/0x8Dc5310fc9D3D7D1Bb3D1F686899c8F082316c9F) |  [ProxyAdmin](https://gnosisscan.io//address/0xe892E40C92c2E4D281Be59b2E6300F271d824E75) |  onlyGuardian |  [BGD](https://gnosisscan.io//address/0xcb8a3E864D12190eD2b03cbA0833b15f2c314Ed8) |  solveEmergency | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Protocol Guardian Gnosis](https://gnosisscan.io//address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) |  5/9 |  0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://gnosisscan.io//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d), [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://gnosisscan.io//address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x818C277dBE886b934e60aa047250A73529E26A99](https://gnosisscan.io//address/0x818C277dBE886b934e60aa047250A73529E26A99), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://gnosisscan.io//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xb647055A9915bF9c8021a684E175A353525b9890](https://gnosisscan.io//address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922](https://gnosisscan.io//address/0x57ab7ee15cE5ECacB1aB84EE42D5A9d0d8112922), [0x8659D0BB123Da6D16D9394C7838BA286c2207d0E](https://gnosisscan.io//address/0x8659D0BB123Da6D16D9394C7838BA286c2207d0E), [0xECC2a9240268BC7a26386ecB49E1Befca2706AC9](https://gnosisscan.io//address/0xECC2a9240268BC7a26386ecB49E1Befca2706AC9), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://gnosisscan.io//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02) | |--------|--------|--------|--------|
|  [Risk Council](https://gnosisscan.io//address/0xF221B08dD10e0C68D74F035764931Baa3b030481) |  1/1 |  0xF221B08dD10e0C68D74F035764931Baa3b030481 |  [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://gnosisscan.io//address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|
|  [BGD](https://gnosisscan.io//address/0xcb8a3E864D12190eD2b03cbA0833b15f2c314Ed8) |  2/3 |  0xcb8a3E864D12190eD2b03cbA0833b15f2c314Ed8 |  [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://gnosisscan.io//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://gnosisscan.io//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7), [0x0650302887619fa7727D8BD480Cda11A638B219B](https://gnosisscan.io//address/0x0650302887619fa7727D8BD480Cda11A638B219B) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  POOL_ADMIN |  [Executor_lvl1](https://gnosisscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  EMERGENCY_ADMIN |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://gnosisscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F), [Aave Protocol Guardian Gnosis](https://gnosisscan.io//address/0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  BRIDGE |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|


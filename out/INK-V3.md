# INK 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  not upgradeable | |--------|--------|
|  [Pool](https://explorer.inkonchain.com//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  External Contract | |--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  External Contract | |--------|--------|
|  [AaveOracle](https://explorer.inkonchain.com//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  not upgradeable | |--------|--------|
|  [RewardsController](https://explorer.inkonchain.com//address/0xD93e3Ae8f69D04d484d1652Ca569d4b0522414DF) |  External Contract | |--------|--------|
|  [WrappedTokenGatewayV3](https://explorer.inkonchain.com//address/0xDe090EfCD6ef4b86792e2D84E55a5fa8d49D25D2) |  not upgradeable | |--------|--------|
|  [EmissionManager](https://explorer.inkonchain.com//address/0x9CbcEf2c44cF28ff2aa36Bff7BaB315398209A79) |  not upgradeable | |--------|--------|
|  [PoolAddressesProviderRegistry](https://explorer.inkonchain.com//address/0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741) |  not upgradeable | |--------|--------|
|  [ACLManager](https://explorer.inkonchain.com//address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809) |  not upgradeable | |--------|--------|
|  [Collector](https://explorer.inkonchain.com//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  External Contract | |--------|--------|
|  [CollectorProxyAdmin](https://explorer.inkonchain.com//address/0xd059ec2cf261858e23fb5a3a5debd929501e99e8) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  configureProtocolFees |  External Contract | |--------|--------|
|  updateReserveCaps |  External Contract | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  upgradeAaveTokens (a/v/s) |  External Contract | |--------|--------|
|  upgradeAaveOracles |  External Contract | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  pausePool |  External Contract,Multi-sig | |--------|--------|
|  pauseAndFreezeReserve |  External Contract,Multi-sig | |--------|--------|
|  reserveListing |  External Contract | |--------|--------|
|  adminsConfiguration |  External Contract | |--------|--------|
|  protocolUpgradeablity |  External Contract | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  - |  onlyOwner |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setMarketId, setAddress, setAddressAsProxy, setPoolImpl, setPoolConfiguratorImpl, setPriceOracle, setACLManager, setACLAdmin, setPriceOracleSentinel, setPoolDataProvider | |--------|--------|--------|--------|--------|
|  [Pool](https://explorer.inkonchain.com//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolConfigurator |  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  initReserve, dropReserve, setReserveInterestRateStrategyAddress, setConfiguration, updateBridgeProtocolFee, updateFlashloanPremiums, configureEModeCategory, resetIsolationModeTotalDebt | |--------|--------|--------|--------|--------|
|  [Pool](https://explorer.inkonchain.com//address/0x2816cf15F6d2A220E789aA011D5EE4eB6c47FEbA) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolAdmin |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  rescueTokens | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyPoolAdmin |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  dropReserve, dropReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, setReserveActive, updateBridgeProtocolFee, updateFlashloanPremiumTotal, updateFlashloanPremiumToProtocol | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyAssetListingOrPoolAdmins |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  initReserves | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyRiskOrPoolAdmins |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setReserveBorrowing, setReserveBorrowing, configureReserveAsCollateral, setReserveStableRateBorrowing, setBorrowableInIsolation, setReserveFactor, setDebtCeiling, setSiloedBorrowing, setBorrowCap, setSupplyCap, setLiquidationProtocolFee, setEModeCategory, setAssetEModeCategory, setUnbackedMintCap, setReserveInterestRateStrategyAddress, setReserveFlashLoaning | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyRiskOrPoolOrEmergencyAdmins |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D), [Ink emergency-admin multisig](https://explorer.inkonchain.com//address/0x00C2B13eF4F70Bf1827179Fe6d8facF7cFf6AcD2) |  setReserveFreeze | |--------|--------|--------|--------|--------|
|  [PoolConfigurator](https://explorer.inkonchain.com//address/0x4f221e5c0B7103f7e3291E10097de6D9e3BfC02d) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyEmergencyOrPoolAdmin |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D), [Ink emergency-admin multisig](https://explorer.inkonchain.com//address/0x00C2B13eF4F70Bf1827179Fe6d8facF7cFf6AcD2) |  setPoolPause, setReservePause | |--------|--------|--------|--------|--------|
|  [AaveOracle](https://explorer.inkonchain.com//address/0x4758213271BFdC72224A7a8742dC865fC97756e1) |  - |  onlyAssetListingOrPoolAdmins |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setAssetSources, setFallbackOracle | |--------|--------|--------|--------|--------|
|  [RewardsController](https://explorer.inkonchain.com//address/0xD93e3Ae8f69D04d484d1652Ca569d4b0522414DF) |  [PoolAddressesProvider](https://explorer.inkonchain.com//address/0x4172E6aAEC070ACB31aaCE343A58c93E4C70f44D) |  onlyEmissionManager |  [EmissionManager](https://explorer.inkonchain.com//address/0x9CbcEf2c44cF28ff2aa36Bff7BaB315398209A79) |  configureAssets, setTransferStrategy, setRewardOracle, setClaimer | |--------|--------|--------|--------|--------|
|  [WrappedTokenGatewayV3](https://explorer.inkonchain.com//address/0xDe090EfCD6ef4b86792e2D84E55a5fa8d49D25D2) |  - |  onlyOwner |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [EmissionManager](https://explorer.inkonchain.com//address/0x9CbcEf2c44cF28ff2aa36Bff7BaB315398209A79) |  - |  onlyOwner |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setClaimer, setEmissionAdmin, setRewardsController | |--------|--------|--------|--------|--------|
|  [PoolAddressesProviderRegistry](https://explorer.inkonchain.com//address/0x501B4c19dd9C2e06E94dA7b6D5Ed4ddA013EC741) |  - |  onlyOwner |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  registerAddressesProvider, unregisterAddressesProvider | |--------|--------|--------|--------|--------|
|  [ACLManager](https://explorer.inkonchain.com//address/0x86E2938daE289763D4e09a7e42c5cCcA62Cf9809) |  - |  onlyRole |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  setRoleAdmin | |--------|--------|--------|--------|--------|
|  [Collector](https://explorer.inkonchain.com//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  [CollectorProxyAdmin](https://explorer.inkonchain.com//address/0xd059Ec2CF261858e23fB5a3a5debD929501e99e8) |  onlyFundsAdmin |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  approve, transfer, setFundsAdmin, createStream | |--------|--------|--------|--------|--------|
|  [Collector](https://explorer.inkonchain.com//address/0x9138E2cAdFEB23AFFdc0419F2912CaB8F135dba9) |  [CollectorProxyAdmin](https://explorer.inkonchain.com//address/0xd059Ec2CF261858e23fB5a3a5debD929501e99e8) |  onlyAdminOrRecipient |  [CollectorProxyAdmin](https://explorer.inkonchain.com//address/0xd059Ec2CF261858e23fB5a3a5debD929501e99e8), [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  withdrawFromStream, cancelStream | |--------|--------|--------|--------|--------|
|  [CollectorProxyAdmin](https://explorer.inkonchain.com//address/0xd059ec2cf261858e23fb5a3a5debd929501e99e8) |  - |  onlyOwner |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  changeProxyAdmin, upgrade, upgradeAndCall | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Ink emergency-admin multisig](https://explorer.inkonchain.com//address/0x00C2B13eF4F70Bf1827179Fe6d8facF7cFf6AcD2) |  4/8 |  0x00C2B13eF4F70Bf1827179Fe6d8facF7cFf6AcD2 |  [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://explorer.inkonchain.com//address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xc10EE2614B90944Bbc88587f19024941C6dc21e1](https://explorer.inkonchain.com//address/0xc10EE2614B90944Bbc88587f19024941C6dc21e1), [0x2746F3BA4F69Ac0B4462208aC1B5c1e5a981dCcA](https://explorer.inkonchain.com//address/0x2746F3BA4F69Ac0B4462208aC1B5c1e5a981dCcA), [0x26de2b9E15886b21dd86ec57C2f4983A98458FCe](https://explorer.inkonchain.com//address/0x26de2b9E15886b21dd86ec57C2f4983A98458FCe), [0xaFe7AB320A37b731D5cA37Ba85802f26F3b75469](https://explorer.inkonchain.com//address/0xaFe7AB320A37b731D5cA37Ba85802f26F3b75469), [0x13e42804884a2da5874fB2a615adC2d81C710B36](https://explorer.inkonchain.com//address/0x13e42804884a2da5874fB2a615adC2d81C710B36), [0x22E13B9A650D75dfA8cAB4170f93fDFA5E3c8220](https://explorer.inkonchain.com//address/0x22E13B9A650D75dfA8cAB4170f93fDFA5E3c8220), [0xf27e36cFfACE56E6acBCf0Acf0229147d57647AB](https://explorer.inkonchain.com//address/0xf27e36cFfACE56E6acBCf0Acf0229147d57647AB) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  POOL_ADMIN |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  EMERGENCY_ADMIN |  [Ink emergency-admin multisig](https://explorer.inkonchain.com//address/0x00C2B13eF4F70Bf1827179Fe6d8facF7cFf6AcD2) | |--------|--------|
|  ASSET_LISTING_ADMIN |   | |--------|--------|
|  FLASH_BORROWER |   | |--------|--------|
|  RISK_ADMIN |   | |--------|--------|

### Collector Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  FUNDS_ADMIN_ROLE |  [PPC Executor](https://explorer.inkonchain.com//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|


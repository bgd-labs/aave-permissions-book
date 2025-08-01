# ETHEREUM 
## GHO 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  not upgradeable | |--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535) |  not upgradeable | |--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B) |  not upgradeable | |--------|--------|
|  [GSMRegistry](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |  not upgradeable | |--------|--------|
|  [GhoStewardV2](https://etherscan.io/address/0x8F2411a538381aae2b464499005F0211e867d84f) |  not upgradeable | |--------|--------|
|  Aave a/v/s tokens |  Governance | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,Governance | |--------|--------|
|  configureGovernance |  Governance | |--------|--------|
|  cancelProposal |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitator |  [Gho Direct Minter](https://etherscan.io/address/0x593B09afc075B3c326CE2AD7750888645BA8943d), [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8), [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B), [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535), [0x2cE01c87Fec1b71A9041c52CaED46Fc5f4807285](https://etherscan.io/address/0x2cE01c87Fec1b71A9041c52CaED46Fc5f4807285) |  mint, burn | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitatorManager |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addFacilitator, removeFacilitator | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyBucketManager |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [0x46Aa1063e5265b43663E81329333B47c517A5409](https://etherscan.io/address/0x46Aa1063e5265b43663E81329333B47c517A5409) |  setFacilitatorBucketCapacity | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535) |  - |  onlyRescuer |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535) |  - |  onlySwapFreezer |   |  setSwapFreeze | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535) |  - |  onlyLiquidator |   |  seize, burnAfterSeize | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0xFeeb6FE430B7523fEF2a38327241eE7153779535) |  - |  onlyConfigurator |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFeeStrategy, updateExposureCap, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B) |  - |  onlyRescuer |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B) |  - |  onlySwapFreezer |   |  setSwapFreeze | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B) |  - |  onlyLiquidator |   |  seize, burnAfterSeize | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x535b2f7C20B9C83d70e519cf9991578eF9816B7B) |  - |  onlyConfigurator |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFeeStrategy, updateExposureCap, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [GSMRegistry](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addGsm, removeGsm | |--------|--------|--------|--------|--------|
|  [GhoStewardV2](https://etherscan.io/address/0x8F2411a538381aae2b464499005F0211e867d84f) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setControlledFacilitator | |--------|--------|--------|--------|--------|
|  [GhoStewardV2](https://etherscan.io/address/0x8F2411a538381aae2b464499005F0211e867d84f) |  - |  onlyRiskCouncil |  [Gho Risk Council](https://etherscan.io/address/0x8513e6F37dBc52De87b166980Fa3F50639694B60) |  updateGsmBuySellFees, updateGsmExposureCap, updateGhoBorrowRate, updateGhoBorrowCap, updateFacilitatorBucketCapacity | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Gho Risk Council](https://etherscan.io/address/0x8513e6F37dBc52De87b166980Fa3F50639694B60) |  3/4 |  0x8513e6F37dBc52De87b166980Fa3F50639694B60 |  [0xbA037E4746ff58c55dc8F27a328C428F258DDACb](https://etherscan.io/address/0xbA037E4746ff58c55dc8F27a328C428F258DDACb), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://etherscan.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xb647055A9915bF9c8021a684E175A353525b9890](https://etherscan.io/address/0xb647055A9915bF9c8021a684E175A353525b9890), [0x5d49dBcdd300aECc2C311cFB56593E71c445d60d](https://etherscan.io/address/0x5d49dBcdd300aECc2C311cFB56593E71c445d60d) | |--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  FACILITATOR_MANAGER_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  BUCKET_MANAGER_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A), [0x46Aa1063e5265b43663E81329333B47c517A5409](https://etherscan.io/address/0x46Aa1063e5265b43663E81329333B47c517A5409) | |--------|--------|

### Admins GSM_USDC
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  CONFIGURATOR_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  SWAP_FREEZER_ROLE |   | |--------|--------|
|  DEFAULT_ADMIN_ROLE |   | |--------|--------|
|  TOKEN_RESCUER_ROLE |   | |--------|--------|
|  LIQUIDATOR_ROLE |   | |--------|--------|

### Admins GSM_USDT
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  CONFIGURATOR_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  SWAP_FREEZER_ROLE |   | |--------|--------|
|  DEFAULT_ADMIN_ROLE |   | |--------|--------|
|  TOKEN_RESCUER_ROLE |   | |--------|--------|
|  LIQUIDATOR_ROLE |   | |--------|--------|


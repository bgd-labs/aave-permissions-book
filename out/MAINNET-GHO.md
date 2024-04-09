# MAINNET 
## GHO 
### decentralization
| contract |decentralization lvl |upgradeable |owned by |
|----------|----------|----------|----------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  5/5 |  false |  Not owned | |--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |  5/5 |  false |  Not owned | |--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  5/5 |  false |  Not owned | |--------|--------|--------|--------|
|  [GSMRegistry](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |  5/5 |  false |  Gov V3 | |--------|--------|--------|--------|

### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitator |  [GHO aToken](https://etherscan.io/address/0x00907f9921424583e7ffBfEdf84F92B7B2Be4977), [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8), [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578), [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  mint, burn | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitatorManager |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addFacilitator, removeFacilitator | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyBucketManager |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setFacilitatorBucketCapacity | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |  - |  onlyRescuer |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |  - |  onlySwapFreezer |  [GSM_USDC_ORACLE_SWAP_FREEZER](https://etherscan.io/address/0xef6beCa8D9543eC007bceA835aF768B58F730C1f), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setSwapFreeze | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |  - |  onlyLiquidator |   |  seize, burnAfterSeize | |--------|--------|--------|--------|--------|
|  [GSM_USDC](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |  - |  onlyConfigurator |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFeeStrategy, updateExposureCap, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  - |  onlyRescuer |   |  rescueTokens | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  - |  onlySwapFreezer |  [GSM_USDT_ORACLE_SWAP_FREEZER](https://etherscan.io/address/0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  setSwapFreeze | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  - |  onlyLiquidator |   |  seize, burnAfterSeize | |--------|--------|--------|--------|--------|
|  [GSM_USDT](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |  - |  onlyConfigurator |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  updateFeeStrategy, updateExposureCap, updateGhoTreasury | |--------|--------|--------|--------|--------|
|  [GSMRegistry](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |  - |  onlyOwner |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  addGsm, removeGsm | |--------|--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  FACILITATOR_MANAGER_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  BUCKET_MANAGER_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|

### Admins GSM_USDC
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  CONFIGURATOR_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  SWAP_FREEZER_ROLE |  [GSM_USDC_ORACLE_SWAP_FREEZER](https://etherscan.io/address/0xef6beCa8D9543eC007bceA835aF768B58F730C1f), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  DEFAULT_ADMIN_ROLE |   | |--------|--------|
|  TOKEN_RESCUER_ROLE |   | |--------|--------|
|  LIQUIDATOR_ROLE |   | |--------|--------|

### Admins GSM_USDT
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  CONFIGURATOR_ROLE |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  SWAP_FREEZER_ROLE |  [GSM_USDT_ORACLE_SWAP_FREEZER](https://etherscan.io/address/0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5), [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) | |--------|--------|
|  DEFAULT_ADMIN_ROLE |   | |--------|--------|
|  TOKEN_RESCUER_ROLE |   | |--------|--------|
|  LIQUIDATOR_ROLE |   | |--------|--------|


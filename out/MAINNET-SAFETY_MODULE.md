# MAINNET 
## SAFETY_MODULE 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [stkAave](https://etherscan.io/address/0x4da27a545c0c5B758a6BA100e3a049001de870f5) |  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  configureAssets | |--------|--------|--------|--------|--------|
|  [stkABPT](https://etherscan.io/address/0xa1116930326D21fB917d5A27F1E9943A9595fb47) |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  configureAssets | |--------|--------|--------|--------|--------|
|  [ABPT](https://etherscan.io/address/0x41A08648C3766F9F9d85598fF102a08f4ef84F84) |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  onlyOwner |  [Guardian1](https://etherscan.io/address/0xB9062896ec3A615a4e4444DF183F0531a77218AE) |  setCap, setPublicSwap, createPool, updateWeight, updateWeightsGradually, commitAddToken, applyAddToken, removeToken, whitelistLiquidityProvider, removeWhitelistedLiquidityProvider | |--------|--------|--------|--------|--------|
|  [BPT](https://etherscan.io/address/0xC697051d1C6296C24aE3bceF39acA743861D9A81) |  - |  onlyController |  [ABPT](https://etherscan.io/address/0x41A08648C3766F9F9d85598fF102a08f4ef84F84) |  setSwapFee, setController, setPublicSwap, finalize, bind, rebind, unbind | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Owners |
|----------|----------|
|  [0xB9062896ec3A615a4e4444DF183F0531a77218AE](https://etherscan.io/address/0xB9062896ec3A615a4e4444DF183F0531a77218AE) |  [0xa81cF4389f493Fee9FC0fA69510b48D3E2Bfd3ce](https://etherscan.io/address/0xa81cF4389f493Fee9FC0fA69510b48D3E2Bfd3ce), [0xf0919eC356e4221e0b8C8b0d1992Bdc0D7475e4E](https://etherscan.io/address/0xf0919eC356e4221e0b8C8b0d1992Bdc0D7475e4E), [0xB0c9C5B5211dE3a75b61BB798887b76AcCD64193](https://etherscan.io/address/0xB0c9C5B5211dE3a75b61BB798887b76AcCD64193), [0x106fc088aBA908130fBC343F2F6d212Ff36150D1](https://etherscan.io/address/0x106fc088aBA908130fBC343F2F6d212Ff36150D1), [0xE7A4F2b1772603170111BC633cbCF1AcEbD60BCe](https://etherscan.io/address/0xE7A4F2b1772603170111BC633cbCF1AcEbD60BCe), [0xf6dcD4d7141E06B916987C3C46220f6241278a30](https://etherscan.io/address/0xf6dcD4d7141E06B916987C3C46220f6241278a30) | |--------|--------|


# MAINNET 
## SAFETY_MODULE 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [stkAave](https://etherscan.io/address/0x4da27a545c0c5B758a6BA100e3a049001de870f5) |  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  configureAssets | |--------|--------|--------|--------|--------|
|  [stkABPT](https://etherscan.io/address/0xa1116930326D21fB917d5A27F1E9943A9595fb47) |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  onlyEmissionManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  configureAssets | |--------|--------|--------|--------|--------|
|  [ABPT](https://etherscan.io/address/0x41A08648C3766F9F9d85598fF102a08f4ef84F84) |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  onlyOwner |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setCap, setPublicSwap, createPool, updateWeight, updateWeightsGradually, commitAddToken, applyAddToken, removeToken, whitelistLiquidityProvider, removeWhitelistedLiquidityProvider | |--------|--------|--------|--------|--------|
|  [BPT](https://etherscan.io/address/0xC697051d1C6296C24aE3bceF39acA743861D9A81) |  - |  onlyController |  [ABPT](https://etherscan.io/address/0x41A08648C3766F9F9d85598fF102a08f4ef84F84) |  setSwapFee, setController, setPublicSwap, finalize, bind, rebind, unbind | |--------|--------|--------|--------|--------|


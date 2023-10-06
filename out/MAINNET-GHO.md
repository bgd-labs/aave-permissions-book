# MAINNET 
## GHO 
### contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitator |  [GHO aToken](https://etherscan.io/address/0x00907f9921424583e7ffBfEdf84F92B7B2Be4977), [GHOFlashMinter](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |  mint, burn | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyFacilitatorManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  addFacilitator, removeFacilitator | |--------|--------|--------|--------|--------|
|  [GHO](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |  - |  onlyBucketManager |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setFacilitatorBucketCapacity | |--------|--------|--------|--------|--------|

### Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) | |--------|--------|
|  FACILITATOR_MANAGER_ROLE |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) | |--------|--------|
|  BUCKET_MANAGER_ROLE |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) | |--------|--------|


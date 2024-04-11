# MAINNET 
## GOV_V2 
### Decentralization
| contract |upgradeable |owned by |
|----------|----------|----------|
|  [AaveGovernanceV2](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c) |  false |  External Contract | |--------|--------|--------|
|  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  false |  Not owned | |--------|--------|--------|
|  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  false |  Not owned | |--------|--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  adiConfigurations |  Governance | |--------|--------|
|  retryAndInvalidateMessages |  Governance,Multi-sig | |--------|--------|
|  configureGovernance |  Governance | |--------|--------|
|  cancelPermissions |  Multi-sig | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [AaveGovernanceV2](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c) |  - |  onlyGuardian |  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  cancel, __abdicate | |--------|--------|--------|--------|--------|
|  [AaveGovernanceV2](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c) |  - |  onlyOwner |  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  setGovernanceStrategy, setVotingDelay, authorizeExecutors, unauthorizeExecutors | |--------|--------|--------|--------|--------|
|  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  - |  onlyTimelock |  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  setDelay, setPendingAdmin | |--------|--------|--------|--------|--------|
|  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  - |  onlyPendingAdmin |  [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000) |  acceptAdmin | |--------|--------|--------|--------|--------|
|  [ShortExecutor](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5) |  - |  onlyAdmin |  [Executor_lvl1](https://etherscan.io/address/0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A) |  queueTransaction, cancelTransaction, executeTransaction | |--------|--------|--------|--------|--------|
|  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  - |  onlyTimelock |  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  setDelay, setPendingAdmin | |--------|--------|--------|--------|--------|
|  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  - |  onlyPendingAdmin |  [0x0000000000000000000000000000000000000000](https://etherscan.io/address/0x0000000000000000000000000000000000000000) |  acceptAdmin | |--------|--------|--------|--------|--------|
|  [LongExecutor](https://etherscan.io/address/0x79426A1c24B2978D90d7A5070a46C65B07bC4299) |  - |  onlyAdmin |  [Executor_lvl2](https://etherscan.io/address/0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957) |  queueTransaction, cancelTransaction, executeTransaction | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [Aave Guardian Ethereum](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633) |  5/10 |  0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633 |  [0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707](https://etherscan.io/address/0xB43fAaD03f85A4Ac18B11d2e3F0397D18535e707), [0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39](https://etherscan.io/address/0x911716aaE8745F38Bf91A639eF641B1f3ce3Ac39), [0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4](https://etherscan.io/address/0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4), [0xe5d453700d99296c2c085B8119BD6c152Cf63FA6](https://etherscan.io/address/0xe5d453700d99296c2c085B8119BD6c152Cf63FA6), [0xF1ba2231F373CffD47641540CfaEB1f21E50659B](https://etherscan.io/address/0xF1ba2231F373CffD47641540CfaEB1f21E50659B), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://etherscan.io/address/0x4C30E33758216aD0d676419c21CB8D014C68099f), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://etherscan.io/address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://etherscan.io/address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x9343dcB6A3A523510F3499004D8aa595Baa25bc5](https://etherscan.io/address/0x9343dcB6A3A523510F3499004D8aa595Baa25bc5), [0x2BEDd8645B407B3B6447fbC09B269eC7a5794606](https://etherscan.io/address/0x2BEDd8645B407B3B6447fbC09B269eC7a5794606) | |--------|--------|--------|--------|


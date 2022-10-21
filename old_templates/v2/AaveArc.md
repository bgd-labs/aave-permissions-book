## LendingPoolConfigurator [0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA](https://etherscan.io/address/0x4e1c7865e7BE78A7748724Fa0409e88dc14E67aA)

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getPoolAdmin()`
| address | [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218)
| functions | batchInitReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> enableBorrowingOnReserve<br/> disableBorrowingOnReserve<br/> configureReserveAsCollateral<br/> enableReserveStableRate<br/> disableReserveStableRate<br/> activateReserve<br/> deactivateReserve<br/> freezeReserve<br/> unfreezeReserve<br/> setReserveFactor<br/> setReserveInterestRateStrategyAddress

| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getEmergencyAdmin()`
| address | [0x33B09130b035d6D7e57d76fEa0873d9545FA7557](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557)
| functions | setPoolPause

<br/>

## ArcTimelock [0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218](https://etherscan.io/address/0xAce1d11d836cb3F51Ef658FD4D353fFb3c301218)

| modifier | onlyEthereumGovernanceExecutor | 
| --------- | -------- |
| check | `msg.sender == _ethereumGovernanceExecutor`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | queue

| modifier | onlyGuardian | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0x33B09130b035d6D7e57d76fEa0873d9545FA7557](https://etherscan.io/address/0x33B09130b035d6D7e57d76fEa0873d9545FA7557)
| functions | cancel

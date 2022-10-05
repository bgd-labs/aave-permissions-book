## AddressProvider 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5

### modifiers

| modifier | check | address | Comment |
| --------- | -------- | ------- | ------- |
| onlyOwner | `owner()` | 0xEE56e2B3D491590B5b31738cC34d5232F378a8D5 | short executor?

### functions

| Functions | modifier | 
| --------- | -------- |
setMarketId | onlyOwner
setAddressAsProxy | onlyOwner
setAddress | onlyOwner
setLendingPoolImpl | onlyOwner
setLendingPoolConfiguratorImpl | onlyOwner
setLendingPoolCollateralManager | onlyOwner
setPoolAdmin | onlyOwner
setEmergencyAdmin | onlyOwner
setPriceOracle | onlyOwner
setLendingRateOracle | onlyOwner


## LendingPool 0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9

### modifiers

| modifier | check | address | Comment |
| --------- | -------- | ------- | ------- |
| onlyLendingPoolConfigurator | `_addressesProvider.getLendingPoolConfigurator()` | 0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756 | LendingPoolConfigurator contract |

### functions

| Functions | modifier | 
| --------- | -------- |
| initReseve | onlyLendingPoolConfigurator  |
| setReserveInterestRateStrategyAddress | onlyLendingPoolConfigurator  | 
| setConfiguration | onlyLendingPoolConfigurator | 
| setPause | onlyLendingPoolConfigurator | 

## LendingPoolConfigurator 0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756

### modifiers

| modifier | check | address | Comment |
| --------- | -------- | ------- | ------- |
| onlyPoolAdmin | `addressesProvider.getPoolAdmin()` | 0xEE56e2B3D491590B5b31738cC34d5232F378a8D5 | short executor?
| onlyEmergencyAdmin | `addressesProvider.getEmergencyAdmin()` | 0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633 | multisig?

### functions

| Functions | modifier | 
| --------- | -------- | 
initReserve | onlyPoolAdmin | 
updateAToken | onlyPoolAdmin |
updateStableDebtToken | onlyPoolAdmin |
updateVariableDebtToken | onlyPoolAdmin |
enableBorrowingOnReserve | onlyPoolAdmin |
disableBorrowingOnReserve | onlyPoolAdmin |
configureReserveAsCollateral | onlyPoolAdmin |
enableReserveStableRate | onlyPoolAdmin |
disableReserveStableRate | onlyPoolAdmin |
activateReserve | onlyPoolAdmin |
deactivateReserve | onlyPoolAdmin |
freezeReserve | onlyPoolAdmin |
unfreezeReserve | onlyPoolAdmin |
setReserveFactor |  onlyPoolAdmin |
setReserveInterestRateStrategyAddress | onlyPoolAdmin |
setPoolPause | onlyEmergencyAdmin |

## AaveOracle 0xA50ba011c48153De246E5192C8f9258A2ba79Ca9

### modifiers

| modifier | check | address | Comment |
| --------- | -------- | ------- | ------- |
| onlyOwner | `owner()` | 0xEE56e2B3D491590B5b31738cC34d5232F378a8D5 | short executor?

### functions

| Functions | modifier | 
| --------- | -------- | 
| setAssetSources | onlyOwner | 
| setFallbackOracle | onlyOwner |

## LendingRateOracle 0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D

### modifiers

| modifier | check | address | Comment |
| --------- | -------- | ------- | ------- |
| onlyOwner | `owner()` | 0xB9062896ec3A615a4e4444DF183F0531a77218AE | multisig?

### functions

| Functions | modifier | 
| --------- | -------- | 
setMarketBorrowRate | onlyOwner




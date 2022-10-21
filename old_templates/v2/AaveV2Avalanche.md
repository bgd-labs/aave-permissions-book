## AddressProvider [0xb6A86025F0FE1862B372cb0ca18CE3EDe02A318f](https://snowtrace.io/address/0xb6A86025F0FE1862B372cb0ca18CE3EDe02A318f)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0x01244E7842254e3FD229CD263472076B1439D1Cd](https://snowtrace.io/address/0x01244E7842254e3FD229CD263472076B1439D1Cd)
| functions | setMarketId<br/> setAddressAsProxy<br/> setAddress<br/> setLendingPoolImpl<br/> setLendingPoolConfiguratorImpl<br/> setLendingPoolCollateralManager<br/> setPoolAdmin<br/> setEmergencyAdmin<br/> setPriceOracle<br/> setLendingRateOracle

<br/>

## LendingPool [0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C](https://snowtrace.io/address/0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C)

| modifier |  onlyLendingPoolConfigurator | 
| --------- | -------- |
| check | `msg.sender == _addressesProvider.getLendingPoolConfigurator()`
| address | [0x230B618aD4C475393A7239aE03630042281BD86e](https://snowtrace.io/address/0x230B618aD4C475393A7239aE03630042281BD86e)
| functions | initReseve<br/> setReserveInterestRateStrategyAddress<br/> setConfiguration<br/> setPause

<br/>

## LendingPoolConfigurator [0x230B618aD4C475393A7239aE03630042281BD86e](https://snowtrace.io/address/0x230B618aD4C475393A7239aE03630042281BD86e)

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getPoolAdmin()`
| address | [0x01244E7842254e3FD229CD263472076B1439D1Cd](https://snowtrace.io/address/0x01244E7842254e3FD229CD263472076B1439D1Cd)
| functions | initReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> enableBorrowingOnReserve<br/> disableBorrowingOnReserve<br/> configureReserveAsCollateral<br/> enableReserveStableRate<br/> disableReserveStableRate<br/> activateReserve<br/> deactivateReserve<br/> freezeReserve<br/> unfreezeReserve<br/> setReserveFactor<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getEmergencyAdmin()`
| address | [0x01244E7842254e3FD229CD263472076B1439D1Cd](https://snowtrace.io/address/0x01244E7842254e3FD229CD263472076B1439D1Cd)
| functions | setPoolPause

<br/>

## AaveOracle [0xdC336Cd4769f4cC7E9d726DA53e6d3fC710cEB89](https://snowtrace.io/address/0xdC336Cd4769f4cC7E9d726DA53e6d3fC710cEB89)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0x01244E7842254e3FD229CD263472076B1439D1Cd](https://snowtrace.io/address/0x01244E7842254e3FD229CD263472076B1439D1Cd)
| functions | setAssetSources<br/> setFallbackOracle

<br/>

## LendingRateOracle [0xc34254642B504484465F38Cb1CC396d45a9c7c80](https://snowtrace.io/address/0xc34254642B504484465F38Cb1CC396d45a9c7c80)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0x01244E7842254e3FD229CD263472076B1439D1Cd](https://snowtrace.io/address/0x01244E7842254e3FD229CD263472076B1439D1Cd)
| functions | setMarketBorrowRate


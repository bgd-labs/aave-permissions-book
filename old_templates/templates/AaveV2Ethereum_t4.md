## AddressProvider [0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5](https://etherscan.io/address/0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | setMarketId<br/> setAddressAsProxy<br/> setAddress<br/> setLendingPoolImpl<br/> setLendingPoolConfiguratorImpl<br/> setLendingPoolCollateralManager<br/> setPoolAdmin<br/> setEmergencyAdmin<br/> setPriceOracle<br/> setLendingRateOracle

<br/>

## LendingPool [0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9](https://etherscan.io/address/0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9)

| modifier |  onlyLendingPoolConfigurator | 
| --------- | -------- |
| check | `_addressesProvider.getLendingPoolConfigurator()`
| address | [0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756)
| functions | initReseve<br/> setReserveInterestRateStrategyAddress<br/> setConfiguration<br/> setPause

<br/>

## LendingPoolConfigurator [0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756](https://etherscan.io/address/0x311Bb771e4F8952E6Da169b425E7e92d6Ac45756)

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| check | `addressesProvider.getPoolAdmin()`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | initReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> enableBorrowingOnReserve<br/> disableBorrowingOnReserve<br/> configureReserveAsCollateral<br/> enableReserveStableRate<br/> disableReserveStableRate<br/> activateReserve<br/> deactivateReserve<br/> freezeReserve<br/> unfreezeReserve<br/> setReserveFactor<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| check | `addressesProvider.getEmergencyAdmin()`
| address | [0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633)
| functions | setPoolPause

<br/>

## AaveOracle [0xA50ba011c48153De246E5192C8f9258A2ba79Ca9](https://etherscan.io/address/0xA50ba011c48153De246E5192C8f9258A2ba79Ca9)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | setAssetSources<br/> setFallbackOracle

<br/>

## LendingRateOracle [0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D](https://etherscan.io/address/0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xB9062896ec3A615a4e4444DF183F0531a77218AE](https://etherscan.io/address/0xB9062896ec3A615a4e4444DF183F0531a77218AE)
| functions | setMarketBorrowRate


## AddressProvider [0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5](https://etherscan.io/address/0xAcc030EF66f9dFEAE9CbB0cd1B25654b82cFA8d5)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | setMarketId<br/> setAddressAsProxy<br/> setAddress<br/> setLendingPoolImpl<br/> setLendingPoolConfiguratorImpl<br/> setLendingPoolCollateralManager<br/> setPoolAdmin<br/> setEmergencyAdmin<br/> setPriceOracle<br/> setLendingRateOracle

<br/>

## LendingPool [0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB](https://etherscan.io/address/0x7937D4799803FbBe595ed57278Bc4cA21f3bFfCB)

| modifier |  onlyLendingPoolConfigurator | 
| --------- | -------- |
| check | `msg.sender == _addressesProvider.getLendingPoolConfigurator()`
| address | [0x23A875eDe3F1030138701683e42E9b16A7F87768](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768)
| functions | initReseve<br/> setReserveInterestRateStrategyAddress<br/> setConfiguration<br/> setPause

<br/>

## LendingPoolConfigurator [0x23A875eDe3F1030138701683e42E9b16A7F87768](https://etherscan.io/address/0x23A875eDe3F1030138701683e42E9b16A7F87768)

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getPoolAdmin()`
| address | [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)
| functions | initReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> enableBorrowingOnReserve<br/> disableBorrowingOnReserve<br/> configureReserveAsCollateral<br/> enableReserveStableRate<br/> disableReserveStableRate<br/> activateReserve<br/> deactivateReserve<br/> freezeReserve<br/> unfreezeReserve<br/> setReserveFactor<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getEmergencyAdmin()`
| address | [0xB9062896ec3A615a4e4444DF183F0531a77218AE](https://etherscan.io/address/0xB9062896ec3A615a4e4444DF183F0531a77218AE)
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


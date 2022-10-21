## AddressProvider [0xd05e3E715d945B59290df0ae8eF85c1BdB684744](https://polygonscan.com/address/0xd05e3E715d945B59290df0ae8eF85c1BdB684744)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772)
| functions | setMarketId<br/> setAddressAsProxy<br/> setAddress<br/> setLendingPoolImpl<br/> setLendingPoolConfiguratorImpl<br/> setLendingPoolCollateralManager<br/> setPoolAdmin<br/> setEmergencyAdmin<br/> setPriceOracle<br/> setLendingRateOracle

<br/>

## LendingPool [0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf](https://polygonscan.com/address/0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf)

| modifier |  onlyLendingPoolConfigurator | 
| --------- | -------- |
| check | `msg.sender == _addressesProvider.getLendingPoolConfigurator()`
| address | [0x26db2B833021583566323E3b8985999981b9F1F3](https://polygonscan.com/address/0x26db2B833021583566323E3b8985999981b9F1F3)
| functions | initReseve<br/> setReserveInterestRateStrategyAddress<br/> setConfiguration<br/> setPause

<br/>

## LendingPoolConfigurator [0x26db2B833021583566323E3b8985999981b9F1F3](https://polygonscan.com/address/0x26db2B833021583566323E3b8985999981b9F1F3)

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getPoolAdmin()`
| address | [0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772)
| functions | initReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> enableBorrowingOnReserve<br/> disableBorrowingOnReserve<br/> configureReserveAsCollateral<br/> enableReserveStableRate<br/> disableReserveStableRate<br/> activateReserve<br/> deactivateReserve<br/> freezeReserve<br/> unfreezeReserve<br/> setReserveFactor<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| check | `msg.sender == addressesProvider.getEmergencyAdmin()`
| address | [0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58](https://polygonscan.com/address/0x1450F2898D6bA2710C98BE9CAF3041330eD5ae58)
| functions | setPoolPause

<br/>

## AaveOracle [0x0229F777B0fAb107F9591a41d5F02E4e98dB6f2d](https://polygonscan.com/address/0x0229F777B0fAb107F9591a41d5F02E4e98dB6f2d)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772](https://polygonscan.com/address/0xdc9A35B16DB4e126cFeDC41322b3a36454B1F772)
| functions | setAssetSources<br/> setFallbackOracle

<br/>

## LendingRateOracle [0x17F73aEaD876CC4059089ff815EDA37052960dFB](https://polygonscan.com/address/0x17F73aEaD876CC4059089ff815EDA37052960dFB)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0xBb2F3BA4a63982eD6D93c190c28B15CBBA0B6AF3](https://polygonscan.com/address/0xBb2F3BA4a63982eD6D93c190c28B15CBBA0B6AF3)
| functions | setMarketBorrowRate


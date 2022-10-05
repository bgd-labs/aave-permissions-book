## SHORT_EXECUTOR 0xEE56e2B3D491590B5b31738cC34d5232F378a8D5

| contract | as | functions | 
| --------- | -------- | -------- | 
| AddressProvider | onlyOwner | setMarketId, setAddressAsProxy, setAddress, setLendingPoolImpl, setLendingPoolConfiguratorImpl, setLendingPoolCollateralManager, setPoolAdmin, setEmergencyAdmin, setPriceOracle, setLendingRateOracle
| LendingPoolConfigurator | onlyPoolAdmin | initReserve, updateAToken, updateStableDebtToken, updateVariableDebtToken, enableBorrowingOnReserve, disableBorrowingOnReserve, configureReserveAsCollateral, enableReserveStableRate, disableReserveStableRate, activateReserve, deactivateReserve, freezeReserve, unfreezeReserve, setReserveFactor, setReserveInterestRateStrategyAddress
| AaveOracle | onlyOwner | setAssetSources, setFallbackOracle

## MULTISIG_1 0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633

| contract | as | functions | 
| --------- | -------- | -------- | 
| LendingPoolConfigurator | onlyEmergencyAdmin | setPoolPause

## MULTISIG_2 0xB9062896ec3A615a4e4444DF183F0531a77218AE

| contract | as | functions 
| --------- | -------- | -------- | 
| LendingRateOracle | onlyOwner | setMarketBorrowRate

## ACLManager [0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B](https://arbiscan.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B)

- ACLManager controles roles:

| role | addresses |
| --------- | -------- |
DEFAULT_ADMIN_ROLE | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
POOL_ADMIN_ROLE | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
EMERGENCY_ADMIN_ROLE | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
BRIDGE_ROLE | not set
ASSET_LISTING_ADMIN_ROLE | not set
RISK_ADMIN_ROLE | not set




## PoolConfigurator [0x8145eddDf43f50276641b55bd3AD95944510021E](https://arbiscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E)

| modifier | onlyAssetListingOrPoolAdmins | 
| --------- | -------- |
| role | `ASSET_LISTING_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
| functions | initReserves

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb) 
| functions | dropReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> setReserveActive<br/> updateBridgeProtocolFee<br/> updateFlashloanPremiumTotal<br/> updateFlashloanPremiumToProtocol

| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
| functions | setPoolPause

| modifier | onlyRiskOrPoolAdmins | 
| --------- | -------- |
| role | `RISK_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
| functions | setReserveBorrowing<br/> configureReserveAsCollateral<br/> setReserveStableRateBorrowing<br/> setReserveFreeze<br/> setBorrowableInIsolation<br/> setReserveFactor<br/> setDebtCeiling<br/> setSiloedBorrowing<br/> setBorrowCap<br/> setSupplyCap<br/> setLiquidationProtocolFee<br/> setEModeCategory<br/> setAssetEModeCategory<br/> setUnbackedMintCap<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
| functions | setReservePause

<br/>

## rescueTokens

- Function for rescuing tokens, at contracts: Pool, PoolConfigurator, AToken

| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb](https://arbiscan.io/address/0xbbd9f90699c1FA0D7A65870D241DD1f1217c96Eb)
| functions | rescueTokens


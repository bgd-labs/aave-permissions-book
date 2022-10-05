## ACLManager [0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B](https://snowtrace.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B)

- ACLManager controles roles:

| role | addresses |
| --------- | -------- |
DEFAULT_ADMIN_ROLE | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470)
POOL_ADMIN_ROLE | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470)
EMERGENCY_ADMIN_ROLE | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470)
BRIDGE_ROLE | not set
ASSET_LISTING_ADMIN_ROLE | not set
RISK_ADMIN_ROLE | not set


## PoolConfigurator [0x8145eddDf43f50276641b55bd3AD95944510021E](https://snowtrace.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E)

| modifier | onlyAssetListingOrPoolAdmins | 
| --------- | -------- |
| role | `ASSET_LISTING_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | initReserves

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | dropReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> setReserveActive<br/> updateBridgeProtocolFee<br/> updateFlashloanPremiumTotal<br/> updateFlashloanPremiumToProtocol

| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | setPoolPause

| modifier | onlyRiskOrPoolAdmins | 
| --------- | -------- |
| role | `RISK_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | setReserveBorrowing<br/> configureReserveAsCollateral<br/> setReserveStableRateBorrowing<br/> setReserveFreeze<br/> setBorrowableInIsolation<br/> setReserveFactor<br/> setDebtCeiling<br/> setSiloedBorrowing<br/> setBorrowCap<br/> setSupplyCap<br/> setLiquidationProtocolFee<br/> setEModeCategory<br/> setAssetEModeCategory<br/> setUnbackedMintCap<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | setReservePause

<br/>

## rescueTokens

- Function for rescuing tokens, at contracts: Pool, PoolConfigurator, AToken

| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xa35b76E4935449E33C56aB24b23fcd3246f13470](https://snowtrace.io/address/0xa35b76E4935449E33C56aB24b23fcd3246f13470) 
| functions | rescueTokens


## ACLManager [0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B](https://optimistic.etherscan.io/address/0xa72636CbcAa8F5FF95B2cc47F3CDEe83F3294a0B)

- ACLManager controles roles:

| role | addresses |
| --------- | -------- |
DEFAULT_ADMIN_ROLE | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
POOL_ADMIN_ROLE | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
EMERGENCY_ADMIN_ROLE | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
BRIDGE_ROLE | not set
ASSET_LISTING_ADMIN_ROLE | not set
RISK_ADMIN_ROLE | not set


## PoolConfigurator [0x8145eddDf43f50276641b55bd3AD95944510021E](https://optimistic.etherscan.io/address/0x8145eddDf43f50276641b55bd3AD95944510021E)

| modifier | onlyAssetListingOrPoolAdmins | 
| --------- | -------- |
| role | `ASSET_LISTING_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
| functions | initReserves

| modifier | onlyPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c) 
| functions | dropReserve<br/> updateAToken<br/> updateStableDebtToken<br/> updateVariableDebtToken<br/> setReserveActive<br/> updateBridgeProtocolFee<br/> updateFlashloanPremiumTotal<br/> updateFlashloanPremiumToProtocol

| modifier | onlyEmergencyAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
| functions | setPoolPause

| modifier | onlyRiskOrPoolAdmins | 
| --------- | -------- |
| role | `RISK_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
| functions | setReserveBorrowing<br/> configureReserveAsCollateral<br/> setReserveStableRateBorrowing<br/> setReserveFreeze<br/> setBorrowableInIsolation<br/> setReserveFactor<br/> setDebtCeiling<br/> setSiloedBorrowing<br/> setBorrowCap<br/> setSupplyCap<br/> setLiquidationProtocolFee<br/> setEModeCategory<br/> setAssetEModeCategory<br/> setUnbackedMintCap<br/> setReserveInterestRateStrategyAddress


| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `EMERGENCY_ADMIN_ROLE \| POOL_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
| functions | setReservePause

<br/>

## rescueTokens

- Function for rescuing tokens, at contracts: Pool, PoolConfigurator, AToken

| modifier | onlyEmergencyOrPoolAdmin | 
| --------- | -------- |
| role | `POOL_ADMIN_ROLE`
| address | [0xE50c8C619d05ff98b22Adf991F17602C774F785c](https://optimistic.etherscan.io/address/0xE50c8C619d05ff98b22Adf991F17602C774F785c)
| functions | rescueTokens


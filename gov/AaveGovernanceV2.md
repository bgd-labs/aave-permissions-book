## AaveGovernanceV2 [0xEC568fffba86c094cf06b22134B23074DFE2252c](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c)

| modifier | onlyOwner | 
| --------- | -------- |
| check | `msg.sender == this.owner()`
| address | [0x61910EcD7e8e942136CE7Fe7943f956cea1CC2f7](https://etherscan.io/address/0x61910EcD7e8e942136CE7Fe7943f956cea1CC2f7)
| functions | setGovernanceStrategy<br/> setVotingDelay<br/> authorizeExecutors<br/> unauthorizeExecutors

Guardian, can cancel the proposal: [0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633](https://etherscan.io/address/0xCA76Ebd8617a03126B6FB84F9b1c1A0fB71C2633)


## TimelockExecutor (short executor) [0xEE56e2B3D491590B5b31738cC34d5232F378a8D5](https://etherscan.io/address/0xEE56e2B3D491590B5b31738cC34d5232F378a8D5)

| modifier | onlyAdmin | 
| --------- | -------- |
| check | `require(msg.sender == _admin`
| address | [0xEC568fffba86c094cf06b22134B23074DFE2252c](https://etherscan.io/address/0xEC568fffba86c094cf06b22134B23074DFE2252c)
| functions | queueTransaction<br/> cancelTransaction<br/> executeTransaction

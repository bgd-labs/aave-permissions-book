# CELO 
## V3 
### Contracts upgradeability
| contract |upgradeable by |
|----------|----------|
|  Aave a/v/s tokens |  Governance | |--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  not upgradeable | |--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  Not owned | |--------|--------|
|  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  not upgradeable | |--------|--------|
|  [LayerZero adapter](https://celoscan.io//address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  not upgradeable | |--------|--------|
|  [Hyperlane adapter](https://celoscan.io//address/0xa5cc218513305221201f196760E9e64e9D49d98A) |  not upgradeable | |--------|--------|
|  [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928) |  not upgradeable | |--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  Not owned | |--------|--------|

### Actions type
| type |can be executed by |
|----------|----------|
|  updateReserveBorrowSettings |  Governance | |--------|--------|
|  updateReserveSettings |  Governance | |--------|--------|
|  configureCollateral |  Governance | |--------|--------|
|  reserveUpgradeability |  Governance | |--------|--------|
|  adiConfigurations |  External Contract | |--------|--------|
|  retryAndInvalidateMessages |  Multi-sig,External Contract | |--------|--------|

### Contracts
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|

### Governance V3 Contracts 
| contract |proxyAdmin |modifier |permission owner |functions |
|----------|----------|----------|----------|----------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyRetryGuardian |  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  retryEnvelope, retryTransaction | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyEmergencyGuardian |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  solveEmergency | |--------|--------|--------|--------|--------|
|  [GranularGuardian](https://celoscan.io//address/0xbE815420A63A413BB8D508d8022C0FF150Ea7C39) |  - |  onlyDefaultAdmin |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwner |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateExecutors | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyGuardian |  [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  cancelPayload | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwnerOrGuardian |  [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  updateGuardian | |--------|--------|--------|--------|--------|
|  [PayloadsController](https://celoscan.io//address/0xE48E10834C04E394A04BF22a565D063D40b9FA42) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyRescueGuardian |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) |  - |  onlyOwner |  [0x956DE559DFc27678FD69d4f49f485196b50BDD0F](https://celoscan.io//address/0x956DE559DFc27678FD69d4f49f485196b50BDD0F) |  executeTransaction | |--------|--------|--------|--------|--------|
|  [LayerZero adapter](https://celoscan.io//address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [Hyperlane adapter](https://celoscan.io//address/0xa5cc218513305221201f196760E9e64e9D49d98A) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928) |  - |  trustedRemote |  [CrossChainController(Eth)](https://celoscan.io//address/0xEd42a7D8559a463722Ca4beD50E0Cc05a386b0e1) |  receiveMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwner |  [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  approveSenders, removeSenders, enableBridgeAdapters, disableBridgeAdapters, updateMessagesValidityTimestamp, allowReceiverBridgeAdapters, disallowReceiverBridgeAdapters | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyOwnerOrGuardian |  [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6), [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  retryEnvelope, retryTransaction, updateGuardian | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyRescueGuardian |  [Deployer](https://celoscan.io//address/0xEAF6183bAb3eFD3bF856Ac5C058431C8592394d6) |  emergencyTokenTransfer, emergencyEtherTransfer | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyApprovedSenders |   |  forwardMessage | |--------|--------|--------|--------|--------|
|  [CrossChainController](https://celoscan.io//address/0x50F4dAA86F3c747ce15C3C38bD0383200B61d6Dd) |  [0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0](https://celoscan.io//address/0x54BDcc37c4143f944A3EE51C892a6cBDF305E7a0) |  onlyApprovedBridges |  [LayerZero adapter](https://celoscan.io//address/0xAE93BEa44dcbE52B625169588574d31e36fb3A67), [Hyperlane adapter](https://celoscan.io//address/0xa5cc218513305221201f196760E9e64e9D49d98A), [CCIP adapter](https://celoscan.io//address/0x3d534E8964e7aAcfc702751cc9A2BB6A9fe7d928) |  receiveCrossChainMessage | |--------|--------|--------|--------|--------|

### Guardians 
| Guardian |Threshold |Address |Owners |
|----------|----------|----------|----------|
|  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) |  2/3 |  0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea |  [0x0650302887619fa7727D8BD480Cda11A638B219B](https://celoscan.io//address/0x0650302887619fa7727D8BD480Cda11A638B219B), [0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02](https://celoscan.io//address/0xf71fc92e2949ccF6A5Fd369a0b402ba80Bc61E02), [0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7](https://celoscan.io//address/0x5811d9FF80ff4B73A8F9bA42A6082FaB82E89Ea7) | |--------|--------|--------|--------|
|  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) |  5/9 |  0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E |  [0xDA5Ae43e179987a66B9831F92223567e1F38BE7D](https://celoscan.io//address/0xDA5Ae43e179987a66B9831F92223567e1F38BE7D), [0x1e3804357eD445251FfECbb6e40107bf03888885](https://celoscan.io//address/0x1e3804357eD445251FfECbb6e40107bf03888885), [0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9](https://celoscan.io//address/0x4f96743057482a2E10253AFDacDA3fd9CF2C1DC9), [0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29](https://celoscan.io//address/0xebED04E9137AfeBFF6a1B97aC0adf61a544eFE29), [0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7](https://celoscan.io//address/0xbd4DCfA978c6D0d342cE36809AfFFa49d4B7f1F7), [0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396](https://celoscan.io//address/0xA3103D0ED00d24795Faa2d641ACf6A320EeD7396), [0x936CD9654271083cCF93A975919Da0aB3Bc99EF3](https://celoscan.io//address/0x936CD9654271083cCF93A975919Da0aB3Bc99EF3), [0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9](https://celoscan.io//address/0x0D2394C027602Dc4c3832Ffd849b5df45DBac0E9), [0x4C30E33758216aD0d676419c21CB8D014C68099f](https://celoscan.io//address/0x4C30E33758216aD0d676419c21CB8D014C68099f) | |--------|--------|--------|--------|

### Granular Guardian Admins 
| Role |Contract |
|----------|----------|
|  DEFAULT_ADMIN |  [Executor_lvl1](https://celoscan.io//address/0x1dF462e2712496373A347f8ad10802a5E95f053D) | |--------|--------|
|  SOLVE_EMERGENCY_ROLE |  [Aave Governance Guardian Celo](https://celoscan.io//address/0x056E4C4E80D1D14a637ccbD0412CDAAEc5B51F4E) | |--------|--------|
|  RETRY_ROLE |  [BGD](https://celoscan.io//address/0xfD3a6E65e470a7D7D730FFD5D36a9354E8F9F4Ea) | |--------|--------|


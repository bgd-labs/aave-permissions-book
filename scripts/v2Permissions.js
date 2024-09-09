"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveV2Modifiers = void 0;
var ethers_1 = require("ethers");
var configs_js_1 = require("../helpers/configs.js");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var lendingPoolAddressProviderAbi = require("../abis/lendingPoolAddressProviderAbi.json");
var lendingPoolConfigurator = require("../abis/lendingPoolConfigurator.json");
var onlyOwnerAbi = require("../abis/onlyOwnerAbi.json");
var arcTimelockAbi = require("../abis/arcTimelockAbi.json");
var aave_address_book_1 = require("@bgd-labs/aave-address-book");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var guardian_js_1 = require("../helpers/guardian.js");
var collectorAbi = require("../abis/collectorAbi.json");
var contract_helpers_1 = require("@aave/contract-helpers");
var resolveV2Modifiers = function (addressBook, provider, permissionsObject, pool, chainId) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, lendingPoolAddressesProvider, lendingPoolAddressesProviderOwner, lendingRateOracleAddress, poolAdmin, emergencyAdmin, _a, _b, lendingPoolConfiguratorContract, poolConfiguratorAdmin, emergencyAdminConfigurator, _c, _d, _e, _f, _g, _h, _j, _k, _l, porExecutorContract, porExecutorOwner, _m, _o, porAggregatorContract, porAggregatorOwner, _p, _q, aaveOracle, aaveOracleOwner, _r, _s, lendingRateOracle, lendingRateOracleOwner, _t, _u, collector, fundsAdmin, collectorProxyAdmin, _v, _w, _x, _y, proxyAdminContract, proxyAdminOwner, _z, _0, arcTimelock, governanceExecutor, arcTimelockGuardian, _1, _2, _3, permissionManager, permissionManagerOwner, _4, _5, wethGatewayContract, wethGatewayOwner, _6, _7, paraswapLiquiditySwapContract, liquiditySwapOwner, _8, _9, paraswapRepaySwapContract, repaySwapOwner, _10, _11, addressesRegistryContract, addressRegistryOwner, _12, _13, _14, _15, proxyAdminContracts, i, _16, _17;
    var _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75;
    return __generator(this, function (_76) {
        switch (_76.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                lendingPoolAddressesProvider = new ethers_1.ethers.Contract(addressBook.POOL_ADDRESSES_PROVIDER, lendingPoolAddressProviderAbi, provider);
                return [4 /*yield*/, lendingPoolAddressesProvider.owner()];
            case 1:
                lendingPoolAddressesProviderOwner = _76.sent();
                return [4 /*yield*/, lendingPoolAddressesProvider.getLendingRateOracle()];
            case 2:
                lendingRateOracleAddress = _76.sent();
                return [4 /*yield*/, lendingPoolAddressesProvider.getPoolAdmin()];
            case 3:
                poolAdmin = _76.sent();
                return [4 /*yield*/, lendingPoolAddressesProvider.getEmergencyAdmin()];
            case 4:
                emergencyAdmin = _76.sent();
                _a = obj;
                _b = 'LendingPoolAddressesProvider';
                _18 = {
                    address: addressBook.POOL_ADDRESSES_PROVIDER
                };
                _19 = {
                    modifier: 'onlyOwner'
                };
                _20 = {
                    address: lendingPoolAddressesProviderOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, lendingPoolAddressesProviderOwner)];
            case 5:
                _20.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, lendingPoolAddressesProviderOwner)];
            case 6:
                _a[_b] = (_18.modifiers = [
                    (_19.addresses = [
                        (_20.signersThreshold = _76.sent(),
                            _20)
                    ],
                        _19.functions = roles['LendingPoolAddressesProvider']['onlyOwner'],
                        _19)
                ],
                    _18);
                obj['LendingPool'] = {
                    address: addressBook.POOL,
                    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
                    modifiers: [
                        {
                            modifier: 'onlyLendingPoolConfigurator',
                            addresses: [
                                {
                                    address: addressBook.POOL_CONFIGURATOR,
                                    owners: [],
                                },
                            ],
                            functions: roles['LendingPool']['onlyLendingPoolConfigurator'],
                        },
                    ],
                };
                lendingPoolConfiguratorContract = new ethers_1.ethers.Contract(addressBook.POOL_ADDRESSES_PROVIDER, lendingPoolConfigurator, provider);
                return [4 /*yield*/, lendingPoolConfiguratorContract.getPoolAdmin()];
            case 7:
                poolConfiguratorAdmin = _76.sent();
                return [4 /*yield*/, lendingPoolConfiguratorContract.getEmergencyAdmin()];
            case 8:
                emergencyAdminConfigurator = _76.sent();
                _c = obj;
                _d = 'LendingPoolConfigurator';
                _21 = {
                    address: addressBook.POOL_CONFIGURATOR,
                    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER
                };
                _22 = {
                    modifier: 'onlyPoolAdmin'
                };
                _23 = {
                    address: poolConfiguratorAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, poolConfiguratorAdmin)];
            case 9:
                _23.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, poolConfiguratorAdmin)];
            case 10:
                _e = [
                    (_22.addresses = [
                        (_23.signersThreshold = _76.sent(),
                            _23)
                    ],
                        _22.functions = roles['LendingPoolConfigurator']['onlyPoolAdmin'],
                        _22)
                ];
                _24 = {
                    modifier: 'onlyEmergencyAdmin'
                };
                _25 = {
                    address: emergencyAdminConfigurator
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, emergencyAdminConfigurator)];
            case 11:
                _25.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, emergencyAdminConfigurator)];
            case 12:
                _c[_d] = (_21.modifiers = _e.concat([
                    (_24.addresses = [
                        (_25.signersThreshold = _76.sent(),
                            _25)
                    ],
                        _24.functions = roles['LendingPoolConfigurator']['onlyEmergencyAdmin'],
                        _24)
                ]),
                    _21);
                if (!(pool === configs_js_1.Pools.V2)) return [3 /*break*/, 17];
                _g = (_f = obj['LendingPoolConfigurator'].modifiers).push;
                _26 = {
                    modifier: 'onlyPoolOrEmergencyAdmin'
                };
                _27 = {
                    address: poolConfiguratorAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, poolConfiguratorAdmin)];
            case 13:
                _27.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, poolConfiguratorAdmin)];
            case 14:
                _h = [
                    (_27.signersThreshold = _76.sent(),
                        _27)
                ];
                _28 = {
                    address: emergencyAdminConfigurator
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, emergencyAdminConfigurator)];
            case 15:
                _28.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, emergencyAdminConfigurator)];
            case 16:
                _g.apply(_f, [(_26.addresses = _h.concat([
                        (_28.signersThreshold = _76.sent(),
                            _28)
                    ]),
                        _26.functions = roles['LendingPoolConfigurator']['onlyPoolOrEmergencyAdmin'],
                        _26)]);
                _76.label = 17;
            case 17:
                if (!(chainId === contract_helpers_1.ChainId.avalanche)) return [3 /*break*/, 28];
                // const code = ethers.utils.solidityKeccak256(
                //   ['string'],
                //   ['PROOF_OF_RESERVE_ADMIN'],
                // );
                // const proofOfReserveAdmin = await lendingPoolAddressesProvider.getAddress(
                //   code,
                // );
                _k = (_j = obj['LendingPoolConfigurator'].modifiers).push;
                _29 = {
                    modifier: 'onlyPoolOrProofOfReserveAdmin'
                };
                _30 = {
                    address: poolAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, poolAdmin)];
            case 18:
                _30.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, poolAdmin)];
            case 19:
                _l = [
                    (_30.signersThreshold = _76.sent(),
                        _30)
                ];
                _31 = {
                    address: addressBook.PROOF_OF_RESERVE
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, addressBook.PROOF_OF_RESERVE)];
            case 20:
                _31.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, addressBook.PROOF_OF_RESERVE)];
            case 21:
                // const code = ethers.utils.solidityKeccak256(
                //   ['string'],
                //   ['PROOF_OF_RESERVE_ADMIN'],
                // );
                // const proofOfReserveAdmin = await lendingPoolAddressesProvider.getAddress(
                //   code,
                // );
                _k.apply(_j, [(_29.addresses = _l.concat([
                        (_31.signersThreshold = _76.sent(),
                            _31)
                    ]),
                        _29.functions = roles['LendingPoolConfigurator']['onlyPoolOrProofOfReserveAdmin'],
                        _29)]);
                porExecutorContract = new ethers_1.ethers.Contract(addressBook.PROOF_OF_RESERVE, onlyOwnerAbi, provider);
                return [4 /*yield*/, porExecutorContract.owner()];
            case 22:
                porExecutorOwner = _76.sent();
                _m = obj;
                _o = 'ProofOfReserveExecutorV2';
                _32 = {
                    address: addressBook.PROOF_OF_RESERVE
                };
                _33 = {
                    modifier: 'onlyOwner'
                };
                _34 = {
                    address: porExecutorOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, porExecutorOwner)];
            case 23:
                _34.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, porExecutorOwner)];
            case 24:
                _m[_o] = (_32.modifiers = [
                    (_33.addresses = [
                        (_34.signersThreshold = _76.sent(),
                            _34)
                    ],
                        _33.functions = roles['ProofOfReserveExecutorV2']['onlyOwner'],
                        _33)
                ],
                    _32);
                porAggregatorContract = new ethers_1.ethers.Contract(addressBook.PROOF_OF_RESERVE_AGGREGATOR, onlyOwnerAbi, provider);
                return [4 /*yield*/, porAggregatorContract.owner()];
            case 25:
                porAggregatorOwner = _76.sent();
                _p = obj;
                _q = 'ProofOfReserveAggregatorV2';
                _35 = {
                    address: addressBook.PROOF_OF_RESERVE_AGGREGATOR
                };
                _36 = {
                    modifier: 'onlyOwner'
                };
                _37 = {
                    address: porAggregatorOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, porAggregatorOwner)];
            case 26:
                _37.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, porAggregatorOwner)];
            case 27:
                _p[_q] = (_35.modifiers = [
                    (_36.addresses = [
                        (_37.signersThreshold = _76.sent(),
                            _37)
                    ],
                        _36.functions = roles['ProofOfReserveAggregatorV2']['onlyOwner'],
                        _36)
                ],
                    _35);
                _76.label = 28;
            case 28:
                aaveOracle = new ethers_1.ethers.Contract(addressBook.ORACLE, onlyOwnerAbi, provider);
                return [4 /*yield*/, aaveOracle.owner()];
            case 29:
                aaveOracleOwner = _76.sent();
                _r = obj;
                _s = 'AaveOracle';
                _38 = {
                    address: addressBook.ORACLE
                };
                _39 = {
                    modifier: 'onlyOwner'
                };
                _40 = {
                    address: aaveOracleOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, aaveOracleOwner)];
            case 30:
                _40.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, aaveOracleOwner)];
            case 31:
                _r[_s] = (_38.modifiers = [
                    (_39.addresses = [
                        (_40.signersThreshold = _76.sent(),
                            _40)
                    ],
                        _39.functions = roles['AaveOracle']['onlyOwner'],
                        _39)
                ],
                    _38);
                lendingRateOracle = new ethers_1.ethers.Contract(lendingRateOracleAddress, onlyOwnerAbi, provider);
                return [4 /*yield*/, lendingRateOracle.owner()];
            case 32:
                lendingRateOracleOwner = _76.sent();
                _t = obj;
                _u = 'LendingRateOracle';
                _41 = {
                    address: lendingRateOracleAddress
                };
                _42 = {
                    modifier: 'onlyOwner'
                };
                _43 = {
                    address: lendingRateOracleOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, lendingRateOracleOwner)];
            case 33:
                _43.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, lendingRateOracleOwner)];
            case 34:
                _t[_u] = (_41.modifiers = [
                    (_42.addresses = [
                        (_43.signersThreshold = _76.sent(),
                            _43)
                    ],
                        _42.functions = roles['LendingRateOracle']['onlyOwner'],
                        _42)
                ],
                    _41);
                collector = new ethers_1.ethers.Contract(addressBook.COLLECTOR, collectorAbi, provider);
                return [4 /*yield*/, collector.getFundsAdmin()];
            case 35:
                fundsAdmin = _76.sent();
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(addressBook.COLLECTOR, provider)];
            case 36:
                collectorProxyAdmin = _76.sent();
                _v = obj;
                _w = 'Collector';
                _44 = {
                    address: addressBook.COLLECTOR
                };
                _45 = {
                    modifier: 'onlyFundsAdmin'
                };
                _46 = {
                    address: fundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, fundsAdmin)];
            case 37:
                _46.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, fundsAdmin)];
            case 38:
                _x = [
                    (_45.addresses = [
                        (_46.signersThreshold = _76.sent(),
                            _46)
                    ],
                        _45.functions = roles['Collector']['onlyFundsAdmin'],
                        _45)
                ];
                _47 = {
                    modifier: 'onlyAdminOrRecipient'
                };
                _48 = {
                    address: collectorProxyAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, collectorProxyAdmin)];
            case 39:
                _48.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, collectorProxyAdmin)];
            case 40:
                _y = [
                    (_48.signersThreshold = _76.sent(),
                        _48)
                ];
                _49 = {
                    address: fundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, fundsAdmin)];
            case 41:
                _49.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, fundsAdmin)];
            case 42:
                _v[_w] = (_44.modifiers = _x.concat([
                    (_47.addresses = _y.concat([
                        (_49.signersThreshold = _76.sent(),
                            _49)
                    ]),
                        _47.functions = roles['Collector']['onlyAdminOrRecipient'],
                        _47)
                ]),
                    _44);
                proxyAdminContract = new ethers_1.ethers.Contract(collectorProxyAdmin, onlyOwnerAbi, provider);
                return [4 /*yield*/, proxyAdminContract.owner()];
            case 43:
                proxyAdminOwner = _76.sent();
                _z = obj;
                _0 = 'ProxyAdmin';
                _50 = {
                    address: ethers_1.utils.getAddress(collectorProxyAdmin)
                };
                _51 = {
                    modifier: 'onlyOwner'
                };
                _52 = {
                    address: proxyAdminOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, proxyAdminOwner)];
            case 44:
                _52.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, proxyAdminOwner)];
            case 45:
                _z[_0] = (_50.modifiers = [
                    (_51.addresses = [
                        (_52.signersThreshold = _76.sent(),
                            _52)
                    ],
                        _51.functions = roles['ProxyAdmin']['onlyOwner'],
                        _51)
                ],
                    _50);
                if (!(pool === configs_js_1.Pools.V2_ARC || pool === configs_js_1.Pools.V2_ARC_TENDERLY)) return [3 /*break*/, 55];
                arcTimelock = new ethers_1.ethers.Contract(poolAdmin, arcTimelockAbi, provider);
                return [4 /*yield*/, arcTimelock.getEthereumGovernanceExecutor()];
            case 46:
                governanceExecutor = _76.sent();
                return [4 /*yield*/, arcTimelock.getGuardian()];
            case 47:
                arcTimelockGuardian = _76.sent();
                _1 = obj;
                _2 = 'ArcTimelock';
                _53 = {
                    address: poolAdmin
                };
                _54 = {
                    modifier: 'onlyEthereumGovernanceExecutor'
                };
                _55 = {
                    address: governanceExecutor
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, governanceExecutor)];
            case 48:
                _55.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, governanceExecutor)];
            case 49:
                _3 = [
                    (_54.addresses = [
                        (_55.signersThreshold = _76.sent(),
                            _55)
                    ],
                        _54.functions = roles['ArcTimelock']['onlyEthereumGovernanceExecutor'],
                        _54)
                ];
                _56 = {
                    modifier: 'onlyGuardian'
                };
                _57 = {
                    address: arcTimelockGuardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, arcTimelockGuardian)];
            case 50:
                _57.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, arcTimelockGuardian)];
            case 51:
                _1[_2] = (_53.modifiers = _3.concat([
                    (_56.addresses = [
                        (_57.signersThreshold = _76.sent(),
                            _57)
                    ],
                        _56.functions = roles['ArcTimelock']['onlyGuardian'],
                        _56)
                ]),
                    _53);
                permissionManager = new ethers_1.ethers.Contract(aave_address_book_1.AaveV2EthereumArc.PERMISSION_MANAGER, onlyOwnerAbi, provider);
                return [4 /*yield*/, permissionManager.owner()];
            case 52:
                permissionManagerOwner = _76.sent();
                _4 = obj;
                _5 = 'PermissionManager';
                _58 = {
                    address: aave_address_book_1.AaveV2EthereumArc.PERMISSION_MANAGER
                };
                _59 = {
                    modifier: 'onlyOwner'
                };
                _60 = {
                    address: permissionManagerOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, permissionManagerOwner)];
            case 53:
                _60.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, permissionManagerOwner)];
            case 54:
                _4[_5] = (_58.modifiers = [
                    (_59.addresses = [
                        (_60.signersThreshold = _76.sent(),
                            _60)
                    ],
                        _59.functions = roles['PermissionManager']['onlyOwner'],
                        _59)
                ],
                    _58);
                _76.label = 55;
            case 55:
                if (!(pool !== configs_js_1.Pools.V2_ARC && pool !== configs_js_1.Pools.V2_ARC_TENDERLY)) return [3 /*break*/, 59];
                wethGatewayContract = new ethers_1.ethers.Contract(addressBook.WETH_GATEWAY, onlyOwnerAbi, provider);
                return [4 /*yield*/, wethGatewayContract.owner()];
            case 56:
                wethGatewayOwner = _76.sent();
                _6 = obj;
                _7 = 'WrappedTokenGatewayV2';
                _61 = {
                    address: addressBook.WETH_GATEWAY
                };
                _62 = {
                    modifier: 'onlyOwner'
                };
                _63 = {
                    address: wethGatewayOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, wethGatewayOwner)];
            case 57:
                _63.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, wethGatewayOwner)];
            case 58:
                _6[_7] = (_61.modifiers = [
                    (_62.addresses = [
                        (_63.signersThreshold = _76.sent(),
                            _63)
                    ],
                        _62.functions = roles['WrappedTokenGatewayV2']['onlyOwner'],
                        _62)
                ],
                    _61);
                _76.label = 59;
            case 59:
                if (!(pool !== configs_js_1.Pools.V2_AMM &&
                    pool !== configs_js_1.Pools.V2_ARC &&
                    pool !== configs_js_1.Pools.V2_AMM_TENDERLY &&
                    pool !== configs_js_1.Pools.V2_ARC_TENDERLY)) return [3 /*break*/, 66];
                paraswapLiquiditySwapContract = new ethers_1.ethers.Contract(addressBook.SWAP_COLLATERAL_ADAPTER, onlyOwnerAbi, provider);
                return [4 /*yield*/, paraswapLiquiditySwapContract.owner()];
            case 60:
                liquiditySwapOwner = _76.sent();
                _8 = obj;
                _9 = 'ParaSwapLiquiditySwapAdapter';
                _64 = {
                    address: addressBook.SWAP_COLLATERAL_ADAPTER
                };
                _65 = {
                    modifier: 'onlyOwner'
                };
                _66 = {
                    address: liquiditySwapOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, liquiditySwapOwner)];
            case 61:
                _66.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, liquiditySwapOwner)];
            case 62:
                _8[_9] = (_64.modifiers = [
                    (_65.addresses = [
                        (_66.signersThreshold = _76.sent(),
                            _66)
                    ],
                        _65.functions = roles['ParaSwapLiquiditySwapAdapter']['onlyOwner'],
                        _65)
                ],
                    _64);
                paraswapRepaySwapContract = new ethers_1.ethers.Contract(addressBook.REPAY_WITH_COLLATERAL_ADAPTER, onlyOwnerAbi, provider);
                return [4 /*yield*/, paraswapRepaySwapContract.owner()];
            case 63:
                repaySwapOwner = _76.sent();
                _10 = obj;
                _11 = 'ParaSwapRepayAdapter';
                _67 = {
                    address: addressBook.REPAY_WITH_COLLATERAL_ADAPTER
                };
                _68 = {
                    modifier: 'onlyOwner'
                };
                _69 = {
                    address: repaySwapOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, repaySwapOwner)];
            case 64:
                _69.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, repaySwapOwner)];
            case 65:
                _10[_11] = (_67.modifiers = [
                    (_68.addresses = [
                        (_69.signersThreshold = _76.sent(),
                            _69)
                    ],
                        _68.functions = roles['ParaSwapRepayAdapter']['onlyOwner'],
                        _68)
                ],
                    _67);
                _76.label = 66;
            case 66:
                if (!(pool !== configs_js_1.Pools.V2_ARC && pool !== configs_js_1.Pools.V2_ARC_TENDERLY)) return [3 /*break*/, 70];
                addressesRegistryContract = new ethers_1.ethers.Contract(addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY, onlyOwnerAbi, provider);
                return [4 /*yield*/, addressesRegistryContract.owner()];
            case 67:
                addressRegistryOwner = _76.sent();
                _12 = obj;
                _13 = 'LendingPoolAddressesProviderRegistry';
                _70 = {
                    address: addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY
                };
                _71 = {
                    modifier: 'onlyOwner'
                };
                _72 = {
                    address: addressRegistryOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, addressRegistryOwner)];
            case 68:
                _72.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, addressRegistryOwner)];
            case 69:
                _12[_13] = (_70.modifiers = [
                    (_71.addresses = [
                        (_72.signersThreshold = _76.sent(),
                            _72)
                    ],
                        _71.functions = roles['LendingPoolAddressesProviderRegistry']['onlyOwner'],
                        _71)
                ],
                    _70);
                _76.label = 70;
            case 70:
                if (!(addressBook.DEFAULT_INCENTIVES_CONTROLLER != undefined &&
                    addressBook.DEFAULT_INCENTIVES_CONTROLLER !==
                        '0x0000000000000000000000000000000000000000')) return [3 /*break*/, 73];
                _14 = obj;
                _15 = 'DefaultIncentivesController';
                _73 = {
                    address: addressBook.DEFAULT_INCENTIVES_CONTROLLER
                };
                _74 = {
                    modifier: 'onlyEmissionManager'
                };
                _75 = {
                    address: addressBook.EMISSION_MANAGER
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, addressBook.EMISSION_MANAGER)];
            case 71:
                _75.owners = _76.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, addressBook.EMISSION_MANAGER)];
            case 72:
                _14[_15] = (_73.modifiers = [
                    (_74.addresses = [
                        (_75.signersThreshold = _76.sent(),
                            _75)
                    ],
                        _74.functions = chainId === contract_helpers_1.ChainId.mainnet
                            ? roles['DefaultIncentivesController']['onlyEmissionManager'].filter(function (functionName) { return functionName !== 'setRewardsVault'; })
                            : roles['DefaultIncentivesController']['onlyEmissionManager'],
                        _74)
                ],
                    _73);
                _76.label = 73;
            case 73:
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _76.label = 74;
            case 74:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 77];
                _16 = obj[proxyAdminContracts[i]];
                _17 = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 75:
                _16[_17] = _76.sent();
                _76.label = 76;
            case 76:
                i++;
                return [3 /*break*/, 74];
            case 77: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveV2Modifiers = resolveV2Modifiers;

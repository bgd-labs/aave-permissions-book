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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveV3Modifiers = void 0;
var ethers_1 = require("ethers");
var onlyOwnerAbi = require("../abis/onlyOwnerAbi.json");
var collectorAbi = require("../abis/collectorAbi.json");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var poolAddressProviderAbi = require("../abis/lendingPoolAddressProviderAbi.json");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var guardian_js_1 = require("../helpers/guardian.js");
var contract_helpers_1 = require("@aave/contract-helpers");
var capsPlusRiskStewardABI = require("../abis/capsPlusRiskSteward.json");
var erc20Bridge = require("../abis/Erc20Bridge.json");
var getAddressInfo = function (provider, roleAddress) { return __awaiter(void 0, void 0, void 0, function () {
    var owners;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 1:
                owners = _a.sent();
                return [2 /*return*/, {
                        address: roleAddress,
                        owners: owners,
                    }];
        }
    });
}); };
var uniqueAddresses = function (addressesInfo) {
    var cleanAddresses = [];
    addressesInfo.forEach(function (addressInfo) {
        var found = cleanAddresses.find(function (cleanAddressInfo) { return cleanAddressInfo.address === addressInfo.address; });
        if (!found) {
            cleanAddresses.push(addressInfo);
        }
    });
    return cleanAddresses;
};
var resolveV3Modifiers = function (addressBook, provider, permissionsObject, pool, chainId, adminRoles) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, owners, _i, _a, roleName, _b, _c, roleAddress, _d, _e, _f, _g, _h, poolAddressesProvider, poolAddressesProviderOwner, _j, _k, porExecutorContract, porExecutorOwner, _l, _m, porAggregatorContract, porAggregatorOwner, _o, _p, collector, fundsAdmin, collectorProxyAdmin, _q, _r, _s, _t, _u, _v, wethGatewayContract, wethGatewayOwner, _w, _x, paraswapLiquiditySwapContract, liquiditySwapOwner, _y, _z, paraswapRepaySwapContract, repaySwapOwner, _0, _1, emissionManagerContract, emissionManagerOwner, _2, _3, addressesRegistryContract, addressRegistryOwner, _4, _5, proxyAdminContract, proxyAdminOwner, _6, _7, proxyAdminLongContract, proxyAdminLongOwner, _8, _9, riskStewardContract, riskCouncil, _10, _11, merkleDistributorContract, merkleDistributorOwner, _12, _13, polEthBridgeContract, polEthBridgeOwner, polEthBridgeRescuer, _14, _15, _16, proxyAdminContracts, i, _17, _18;
    var _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71;
    return __generator(this, function (_72) {
        switch (_72.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                owners = {};
                _i = 0, _a = Object.keys(adminRoles);
                _72.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                roleName = _a[_i];
                _b = 0, _c = adminRoles[roleName];
                _72.label = 2;
            case 2:
                if (!(_b < _c.length)) return [3 /*break*/, 9];
                roleAddress = _c[_b];
                if (!!owners[roleName]) return [3 /*break*/, 5];
                _d = owners;
                _e = roleName;
                _19 = {};
                _f = roleAddress;
                _20 = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 3:
                _20.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 4:
                _d[_e] = (_19[_f] = (_20.threshold = _72.sent(),
                    _20),
                    _19);
                return [3 /*break*/, 8];
            case 5:
                if (!(owners[roleName] && !owners[roleName][roleAddress])) return [3 /*break*/, 8];
                _g = owners[roleName];
                _h = roleAddress;
                _21 = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 6:
                _21.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 7:
                _g[_h] = (_21.threshold = _72.sent(),
                    _21);
                _72.label = 8;
            case 8:
                _b++;
                return [3 /*break*/, 2];
            case 9:
                _i++;
                return [3 /*break*/, 1];
            case 10:
                poolAddressesProvider = new ethers_1.ethers.Contract(addressBook.POOL_ADDRESSES_PROVIDER, poolAddressProviderAbi, provider);
                return [4 /*yield*/, poolAddressesProvider.owner()];
            case 11:
                poolAddressesProviderOwner = _72.sent();
                _j = obj;
                _k = 'PoolAddressesProvider';
                _22 = {
                    address: addressBook.POOL_ADDRESSES_PROVIDER
                };
                _23 = {
                    modifier: 'onlyOwner'
                };
                _24 = {
                    address: poolAddressesProviderOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, poolAddressesProviderOwner)];
            case 12:
                _24.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, poolAddressesProviderOwner)];
            case 13:
                _j[_k] = (_22.modifiers = [
                    (_23.addresses = [
                        (_24.signersThreshold = _72.sent(),
                            _24)
                    ],
                        _23.functions = roles['PoolAddressesProvider']['onlyOwner'],
                        _23)
                ],
                    _22);
                obj['Pool'] = {
                    address: addressBook.POOL,
                    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
                    modifiers: [
                        {
                            modifier: 'onlyPoolConfigurator',
                            addresses: [
                                {
                                    address: addressBook.POOL_CONFIGURATOR,
                                    owners: [],
                                },
                            ],
                            functions: roles['Pool']['onlyPoolConfigurator'],
                        },
                        {
                            modifier: 'onlyPoolAdmin',
                            addresses: __spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true),
                            functions: roles['Pool']['onlyPoolAdmin'],
                        },
                        {
                            modifier: 'onlyBridge',
                            addresses: __spreadArray([], adminRoles['BRIDGE'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['BRIDGE'][roleAddress].owners || [],
                                    signersThreshold: owners['BRIDGE'][roleAddress].threshold || 0,
                                };
                            }), true),
                            functions: roles['Pool']['onlyBridge'],
                        },
                    ],
                };
                obj['PoolConfigurator'] = {
                    address: addressBook.POOL_CONFIGURATOR,
                    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER,
                    modifiers: [
                        {
                            modifier: 'onlyPoolAdmin',
                            addresses: __spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true),
                            functions: roles['PoolConfigurator']['onlyPoolAdmin'],
                        },
                        {
                            modifier: 'onlyAssetListingOrPoolAdmins',
                            addresses: uniqueAddresses(__spreadArray(__spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true), adminRoles['ASSET_LISTING_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['ASSET_LISTING_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['ASSET_LISTING_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['PoolConfigurator']['onlyAssetListingOrPoolAdmins'],
                        },
                        {
                            modifier: 'onlyRiskOrPoolAdmins',
                            addresses: uniqueAddresses(__spreadArray(__spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true), adminRoles['RISK_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['RISK_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['RISK_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['PoolConfigurator']['onlyRiskOrPoolAdmins'],
                        },
                        {
                            modifier: 'onlyEmergencyOrPoolAdmin',
                            addresses: uniqueAddresses(__spreadArray(__spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true), adminRoles['EMERGENCY_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['EMERGENCY_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['EMERGENCY_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['PoolConfigurator']['onlyEmergencyOrPoolAdmin'],
                        },
                    ],
                };
                if (chainId === contract_helpers_1.ChainId.mainnet) {
                    obj['GHOFlashMinter'] = {
                        address: '0xb639D208Bcf0589D54FaC24E655C79EC529762B8',
                        modifiers: [
                            {
                                modifier: 'onlyPoolAdmin',
                                addresses: uniqueAddresses(__spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                    return {
                                        address: roleAddress,
                                        owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                        signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                    };
                                }), true)),
                                functions: roles['GHOFlashMinter']['onlyPoolAdmin'],
                            },
                        ],
                    };
                }
                if (!(chainId === contract_helpers_1.ChainId.avalanche)) return [3 /*break*/, 20];
                porExecutorContract = new ethers_1.ethers.Contract(addressBook.PROOF_OF_RESERVE, onlyOwnerAbi, provider);
                return [4 /*yield*/, porExecutorContract.owner()];
            case 14:
                porExecutorOwner = _72.sent();
                _l = obj;
                _m = 'ProofOfReserveExecutorV3';
                _25 = {
                    address: addressBook.PROOF_OF_RESERVE
                };
                _26 = {
                    modifier: 'onlyOwner'
                };
                _27 = {
                    address: porExecutorOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, porExecutorOwner)];
            case 15:
                _27.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, porExecutorOwner)];
            case 16:
                _l[_m] = (_25.modifiers = [
                    (_26.addresses = [
                        (_27.signersThreshold = _72.sent(),
                            _27)
                    ],
                        _26.functions = roles['ProofOfReserveExecutorV3']['onlyOwner'],
                        _26)
                ],
                    _25);
                porAggregatorContract = new ethers_1.ethers.Contract(addressBook.PROOF_OF_RESERVE_AGGREGATOR, onlyOwnerAbi, provider);
                return [4 /*yield*/, porAggregatorContract.owner()];
            case 17:
                porAggregatorOwner = _72.sent();
                _o = obj;
                _p = 'ProofOfReserveAggregatorV3';
                _28 = {
                    address: addressBook.PROOF_OF_RESERVE_AGGREGATOR
                };
                _29 = {
                    modifier: 'onlyOwner'
                };
                _30 = {
                    address: porAggregatorOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, porAggregatorOwner)];
            case 18:
                _30.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, porAggregatorOwner)];
            case 19:
                _o[_p] = (_28.modifiers = [
                    (_29.addresses = [
                        (_30.signersThreshold = _72.sent(),
                            _30)
                    ],
                        _29.functions = roles['ProofOfReserveAggregatorV3']['onlyOwner'],
                        _29)
                ],
                    _28);
                _72.label = 20;
            case 20:
                obj['AaveOracle'] = {
                    address: addressBook.ORACLE,
                    modifiers: [
                        {
                            modifier: 'onlyAssetListingOrPoolAdmins',
                            addresses: uniqueAddresses(__spreadArray(__spreadArray([], adminRoles['POOL_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['POOL_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['POOL_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true), adminRoles['ASSET_LISTING_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['ASSET_LISTING_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['ASSET_LISTING_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['AaveOracle']['onlyAssetListingOrPoolAdmins'],
                        },
                    ],
                };
                collector = new ethers_1.ethers.Contract(addressBook.COLLECTOR, collectorAbi, provider);
                return [4 /*yield*/, collector.getFundsAdmin()];
            case 21:
                fundsAdmin = _72.sent();
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(addressBook.COLLECTOR, provider)];
            case 22:
                collectorProxyAdmin = _72.sent();
                _q = obj;
                _r = 'Collector';
                _31 = {
                    address: addressBook.COLLECTOR
                };
                _32 = {
                    modifier: 'onlyFundsAdmin'
                };
                _33 = {
                    address: fundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, fundsAdmin)];
            case 23:
                _33.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, fundsAdmin)];
            case 24:
                _s = [
                    (_32.addresses = [
                        (_33.signersThreshold = _72.sent(),
                            _33)
                    ],
                        _32.functions = roles['Collector']['onlyFundsAdmin'],
                        _32)
                ];
                _34 = {
                    modifier: 'onlyAdminOrRecipient'
                };
                _35 = {
                    address: collectorProxyAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, collectorProxyAdmin)];
            case 25:
                _35.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, collectorProxyAdmin)];
            case 26:
                _t = [
                    (_35.signersThreshold = _72.sent(),
                        _35)
                ];
                _36 = {
                    address: fundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, fundsAdmin)];
            case 27:
                _36.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, fundsAdmin)];
            case 28:
                _q[_r] = (_31.modifiers = _s.concat([
                    (_34.addresses = _t.concat([
                        (_36.signersThreshold = _72.sent(),
                            _36)
                    ]),
                        _34.functions = roles['Collector']['onlyAdminOrRecipient'],
                        _34)
                ]),
                    _31);
                // for now, we use the same as practically there is only one rewards controller and emission manager
                // but could be that there is one of these for every token
                _u = obj;
                _v = 'RewardsController';
                _37 = {
                    address: addressBook.DEFAULT_INCENTIVES_CONTROLLER,
                    proxyAdmin: addressBook.POOL_ADDRESSES_PROVIDER
                };
                _38 = {
                    modifier: 'onlyEmissionManager'
                };
                _39 = {
                    address: addressBook.EMISSION_MANAGER
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, addressBook.EMISSION_MANAGER)];
            case 29:
                _39.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, addressBook.EMISSION_MANAGER)];
            case 30:
                // for now, we use the same as practically there is only one rewards controller and emission manager
                // but could be that there is one of these for every token
                _u[_v] = (_37.modifiers = [
                    (_38.addresses = [
                        (_39.signersThreshold = _72.sent(),
                            _39)
                    ],
                        _38.functions = roles['RewardsController']['onlyEmissionManager'],
                        _38)
                ],
                    _37);
                if (!addressBook.WETH_GATEWAY) return [3 /*break*/, 34];
                wethGatewayContract = new ethers_1.ethers.Contract(addressBook.WETH_GATEWAY, onlyOwnerAbi, provider);
                return [4 /*yield*/, wethGatewayContract.owner()];
            case 31:
                wethGatewayOwner = _72.sent();
                _w = obj;
                _x = 'WrappedTokenGatewayV3';
                _40 = {
                    address: addressBook.WETH_GATEWAY
                };
                _41 = {
                    modifier: 'onlyOwner'
                };
                _42 = {
                    address: wethGatewayOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, wethGatewayOwner)];
            case 32:
                _42.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, wethGatewayOwner)];
            case 33:
                _w[_x] = (_40.modifiers = [
                    (_41.addresses = [
                        (_42.signersThreshold = _72.sent(),
                            _42)
                    ],
                        _41.functions = roles['WrappedTokenGatewayV3']['onlyOwner'],
                        _41)
                ],
                    _40);
                _72.label = 34;
            case 34:
                if (!addressBook.SWAP_COLLATERAL_ADAPTER) return [3 /*break*/, 38];
                paraswapLiquiditySwapContract = new ethers_1.ethers.Contract(addressBook.SWAP_COLLATERAL_ADAPTER, onlyOwnerAbi, provider);
                return [4 /*yield*/, paraswapLiquiditySwapContract.owner()];
            case 35:
                liquiditySwapOwner = _72.sent();
                _y = obj;
                _z = 'ParaSwapLiquiditySwapAdapter';
                _43 = {
                    address: addressBook.SWAP_COLLATERAL_ADAPTER
                };
                _44 = {
                    modifier: 'onlyOwner'
                };
                _45 = {
                    address: liquiditySwapOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, liquiditySwapOwner)];
            case 36:
                _45.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, liquiditySwapOwner)];
            case 37:
                _y[_z] = (_43.modifiers = [
                    (_44.addresses = [
                        (_45.signersThreshold = _72.sent(),
                            _45)
                    ],
                        _44.functions = roles['ParaSwapLiquiditySwapAdapter']['onlyOwner'],
                        _44)
                ],
                    _43);
                _72.label = 38;
            case 38:
                if (!addressBook.REPAY_WITH_COLLATERAL_ADAPTER) return [3 /*break*/, 42];
                paraswapRepaySwapContract = new ethers_1.ethers.Contract(addressBook.REPAY_WITH_COLLATERAL_ADAPTER, onlyOwnerAbi, provider);
                return [4 /*yield*/, paraswapRepaySwapContract.owner()];
            case 39:
                repaySwapOwner = _72.sent();
                _0 = obj;
                _1 = 'ParaSwapRepayAdapter';
                _46 = {
                    address: addressBook.REPAY_WITH_COLLATERAL_ADAPTER
                };
                _47 = {
                    modifier: 'onlyOwner'
                };
                _48 = {
                    address: repaySwapOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, repaySwapOwner)];
            case 40:
                _48.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, repaySwapOwner)];
            case 41:
                _0[_1] = (_46.modifiers = [
                    (_47.addresses = [
                        (_48.signersThreshold = _72.sent(),
                            _48)
                    ],
                        _47.functions = roles['ParaSwapRepayAdapter']['onlyOwner'],
                        _47)
                ],
                    _46);
                _72.label = 42;
            case 42:
                emissionManagerContract = new ethers_1.ethers.Contract(addressBook.EMISSION_MANAGER, onlyOwnerAbi, provider);
                return [4 /*yield*/, emissionManagerContract.owner()];
            case 43:
                emissionManagerOwner = _72.sent();
                _2 = obj;
                _3 = 'EmissionManager';
                _49 = {
                    address: addressBook.EMISSION_MANAGER
                };
                _50 = {
                    modifier: 'onlyOwner'
                };
                _51 = {
                    address: emissionManagerOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, emissionManagerOwner)];
            case 44:
                _51.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, emissionManagerOwner)];
            case 45:
                _2[_3] = (_49.modifiers = [
                    (_50.addresses = [
                        (_51.signersThreshold = _72.sent(),
                            _51)
                    ],
                        _50.functions = roles['EmissionManager']['onlyOwner'],
                        _50)
                ],
                    _49);
                addressesRegistryContract = new ethers_1.ethers.Contract(addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY, onlyOwnerAbi, provider);
                return [4 /*yield*/, addressesRegistryContract.owner()];
            case 46:
                addressRegistryOwner = _72.sent();
                _4 = obj;
                _5 = 'PoolAddressesProviderRegistry';
                _52 = {
                    address: addressBook.POOL_ADDRESSES_PROVIDER_REGISTRY
                };
                _53 = {
                    modifier: 'onlyOwner'
                };
                _54 = {
                    address: addressRegistryOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, addressRegistryOwner)];
            case 47:
                _54.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, addressRegistryOwner)];
            case 48:
                _4[_5] = (_52.modifiers = [
                    (_53.addresses = [
                        (_54.signersThreshold = _72.sent(),
                            _54)
                    ],
                        _53.functions = roles['PoolAddressesProviderRegistry']['onlyOwner'],
                        _53)
                ],
                    _52);
                if (addressBook.RATES_FACTORY) {
                    obj['RatesFactory'] = {
                        address: addressBook.RATES_FACTORY,
                        modifiers: [],
                    };
                }
                proxyAdminContract = new ethers_1.ethers.Contract(addressBook.PROXY_ADMIN, onlyOwnerAbi, provider);
                return [4 /*yield*/, proxyAdminContract.owner()];
            case 49:
                proxyAdminOwner = _72.sent();
                _6 = obj;
                _7 = 'ProxyAdmin';
                _55 = {
                    address: addressBook.PROXY_ADMIN
                };
                _56 = {
                    modifier: 'onlyOwner'
                };
                _57 = {
                    address: proxyAdminOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, proxyAdminOwner)];
            case 50:
                _57.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, proxyAdminOwner)];
            case 51:
                _6[_7] = (_55.modifiers = [
                    (_56.addresses = [
                        (_57.signersThreshold = _72.sent(),
                            _57)
                    ],
                        _56.functions = roles['ProxyAdmin']['onlyOwner'],
                        _56)
                ],
                    _55);
                if (!addressBook.PROXY_ADMIN_LONG) return [3 /*break*/, 55];
                proxyAdminLongContract = new ethers_1.ethers.Contract(addressBook.PROXY_ADMIN_LONG, onlyOwnerAbi, provider);
                return [4 /*yield*/, proxyAdminLongContract.owner()];
            case 52:
                proxyAdminLongOwner = _72.sent();
                _8 = obj;
                _9 = 'ProxyAdminLong';
                _58 = {
                    address: addressBook.PROXY_ADMIN_LONG
                };
                _59 = {
                    modifier: 'onlyOwner'
                };
                _60 = {
                    address: proxyAdminLongOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, proxyAdminLongOwner)];
            case 53:
                _60.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, proxyAdminLongOwner)];
            case 54:
                _8[_9] = (_58.modifiers = [
                    (_59.addresses = [
                        (_60.signersThreshold = _72.sent(),
                            _60)
                    ],
                        _59.functions = roles['ProxyAdmin']['onlyOwner'],
                        _59)
                ],
                    _58);
                _72.label = 55;
            case 55:
                obj['ACLManager'] = {
                    address: addressBook.ACL_MANAGER,
                    modifiers: [
                        {
                            modifier: 'onlyRole',
                            addresses: __spreadArray([], adminRoles['DEFAULT_ADMIN'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['DEFAULT_ADMIN'][roleAddress].owners || [],
                                    signersThreshold: owners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
                                };
                            }), true),
                            functions: roles['ACLManager']['onlyRole'],
                        },
                    ],
                };
                if (!addressBook.CAPS_PLUS_RISK_STEWARD) return [3 /*break*/, 59];
                riskStewardContract = new ethers_1.ethers.Contract(addressBook.CAPS_PLUS_RISK_STEWARD, capsPlusRiskStewardABI, provider);
                return [4 /*yield*/, riskStewardContract.RISK_COUNCIL()];
            case 56:
                riskCouncil = _72.sent();
                _10 = obj;
                _11 = 'CapPlusRiskSteward';
                _61 = {
                    address: addressBook.CAPS_PLUS_RISK_STEWARD
                };
                _62 = {
                    modifier: 'onlyRiskCouncil'
                };
                _63 = {
                    address: riskCouncil
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, riskCouncil)];
            case 57:
                _63.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, riskCouncil)];
            case 58:
                _10[_11] = (_61.modifiers = [
                    (_62.addresses = [
                        (_63.signersThreshold = _72.sent(),
                            _63)
                    ],
                        _62.functions = roles['CapPlusRiskSteward']['onlyRiskCouncil'],
                        _62)
                ],
                    _61);
                _72.label = 59;
            case 59:
                if (addressBook.FREEZING_STEWARD) {
                    obj['FreezeSteward'] = {
                        address: addressBook.FREEZING_STEWARD,
                        modifiers: [
                            {
                                modifier: 'onlyEmergencyAdmin',
                                addresses: __spreadArray([], adminRoles['EMERGENCY_ADMIN'].map(function (roleAddress) {
                                    return {
                                        address: roleAddress,
                                        owners: owners['EMERGENCY_ADMIN'][roleAddress].owners || [],
                                        signersThreshold: owners['EMERGENCY_ADMIN'][roleAddress].threshold || 0,
                                    };
                                }), true),
                                functions: roles['FreezeSteward']['onlyEmergencyAdmin'],
                            },
                        ],
                    };
                }
                if (!addressBook.AAVE_MERKLE_DISTRIBUTOR) return [3 /*break*/, 63];
                merkleDistributorContract = new ethers_1.ethers.Contract(addressBook.AAVE_MERKLE_DISTRIBUTOR, onlyOwnerAbi, provider);
                return [4 /*yield*/, merkleDistributorContract.owner()];
            case 60:
                merkleDistributorOwner = _72.sent();
                _12 = obj;
                _13 = 'AaveMerkleDistributor';
                _64 = {
                    address: addressBook.AAVE_MERKLE_DISTRIBUTOR
                };
                _65 = {
                    modifier: 'onlyOwner'
                };
                _66 = {
                    address: merkleDistributorOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, merkleDistributorOwner)];
            case 61:
                _66.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, merkleDistributorOwner)];
            case 62:
                _12[_13] = (_64.modifiers = [
                    (_65.addresses = [
                        (_66.signersThreshold = _72.sent(),
                            _66)
                    ],
                        _65.functions = roles['AaveMerkleDistributor']['onlyOwner'],
                        _65)
                ],
                    _64);
                _72.label = 63;
            case 63:
                if (!addressBook.AAVE_POL_ETH_BRIDGE) return [3 /*break*/, 70];
                polEthBridgeContract = new ethers_1.ethers.Contract(addressBook.AAVE_POL_ETH_BRIDGE, erc20Bridge, provider);
                return [4 /*yield*/, polEthBridgeContract.owner()];
            case 64:
                polEthBridgeOwner = _72.sent();
                return [4 /*yield*/, polEthBridgeContract.whoCanRescue()];
            case 65:
                polEthBridgeRescuer = _72.sent();
                _14 = obj;
                _15 = 'AavePolEthBridge';
                _67 = {
                    address: addressBook.AAVE_POL_ETH_BRIDGE
                };
                _68 = {
                    modifier: 'onlyOwner'
                };
                _69 = {
                    address: polEthBridgeOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, polEthBridgeOwner)];
            case 66:
                _69.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, polEthBridgeOwner)];
            case 67:
                _16 = [
                    (_68.addresses = [
                        (_69.signersThreshold = _72.sent(),
                            _69)
                    ],
                        _68.functions = roles['AavePolEthBridge']['onlyOwner'],
                        _68)
                ];
                _70 = {
                    modifier: 'onlyRescueGuardian'
                };
                _71 = {
                    address: polEthBridgeRescuer
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, polEthBridgeRescuer)];
            case 68:
                _71.owners = _72.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, polEthBridgeRescuer)];
            case 69:
                _14[_15] = (_67.modifiers = _16.concat([
                    (_70.addresses = [
                        (_71.signersThreshold = _72.sent(),
                            _71)
                    ],
                        _70.functions = roles['AavePolEthBridge']['onlyRescueGuardian'],
                        _70)
                ]),
                    _67);
                _72.label = 70;
            case 70:
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _72.label = 71;
            case 71:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 74];
                if (!obj[proxyAdminContracts[i]]) return [3 /*break*/, 73];
                _17 = obj[proxyAdminContracts[i]];
                _18 = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 72:
                _17[_18] = _72.sent();
                _72.label = 73;
            case 73:
                i++;
                return [3 /*break*/, 71];
            case 74: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveV3Modifiers = resolveV3Modifiers;

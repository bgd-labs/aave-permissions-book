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
exports.resolveGHOModifiers = void 0;
var ethers_1 = require("ethers");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var guardian_js_1 = require("../helpers/guardian.js");
var ghoABI = require("../abis/ghoABI.json");
var aave_address_book_1 = require("@bgd-labs/aave-address-book");
var ghoStewardV2 = require("../abis/ghoStewardV2.json");
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
var resolveGHOModifiers = function (addressBook, provider, permissionsObject, pool, chainId, adminRoles, gsmAdminRoles) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, owners, _i, _a, roleName, _b, _c, roleAddress, _d, _e, _f, _g, _h, ghoContract, facilitators, facilitatorOwners, _j, facilitators_1, facilitator, _k, _l, _loop_1, i, gsmRegistryContract, gsmRegistryOwner, _m, _o, ghoStewardContract, ghoStewardOwner, riskCouncil, _p, _q, _r;
    var _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    return __generator(this, function (_3) {
        switch (_3.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                owners = {};
                _i = 0, _a = Object.keys(adminRoles);
                _3.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                roleName = _a[_i];
                _b = 0, _c = adminRoles[roleName];
                _3.label = 2;
            case 2:
                if (!(_b < _c.length)) return [3 /*break*/, 9];
                roleAddress = _c[_b];
                if (!!owners[roleName]) return [3 /*break*/, 5];
                _d = owners;
                _e = roleName;
                _s = {};
                _f = roleAddress;
                _t = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 3:
                _t.owners = _3.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 4:
                _d[_e] = (_s[_f] = (_t.threshold = _3.sent(),
                    _t),
                    _s);
                return [3 /*break*/, 8];
            case 5:
                if (!(owners[roleName] && !owners[roleName][roleAddress])) return [3 /*break*/, 8];
                _g = owners[roleName];
                _h = roleAddress;
                _u = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 6:
                _u.owners = _3.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 7:
                _g[_h] = (_u.threshold = _3.sent(),
                    _u);
                _3.label = 8;
            case 8:
                _b++;
                return [3 /*break*/, 2];
            case 9:
                _i++;
                return [3 /*break*/, 1];
            case 10:
                ghoContract = new ethers_1.ethers.Contract(addressBook.GHO_TOKEN, ghoABI, provider);
                return [4 /*yield*/, ghoContract.getFacilitatorsList()];
            case 11:
                facilitators = _3.sent();
                facilitatorOwners = {};
                _j = 0, facilitators_1 = facilitators;
                _3.label = 12;
            case 12:
                if (!(_j < facilitators_1.length)) return [3 /*break*/, 15];
                facilitator = facilitators_1[_j];
                _k = facilitatorOwners;
                _l = facilitator;
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, facilitator)];
            case 13:
                _k[_l] = _3.sent();
                _3.label = 14;
            case 14:
                _j++;
                return [3 /*break*/, 12];
            case 15:
                obj['GHO'] = {
                    address: addressBook.GHO_TOKEN,
                    modifiers: [
                        {
                            modifier: 'onlyFacilitator',
                            addresses: facilitators.map(function (facilitator) {
                                return {
                                    address: facilitator,
                                    owners: facilitatorOwners[facilitator],
                                };
                            }),
                            functions: roles['GHO']['onlyFacilitator'],
                        },
                        {
                            modifier: 'onlyFacilitatorManager',
                            addresses: uniqueAddresses(__spreadArray([], adminRoles['FACILITATOR_MANAGER_ROLE'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['FACILITATOR_MANAGER_ROLE'][roleAddress].owners || [],
                                    signersThreshold: owners['FACILITATOR_MANAGER_ROLE'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['GHO']['onlyFacilitatorManager'],
                        },
                        {
                            modifier: 'onlyBucketManager',
                            addresses: uniqueAddresses(__spreadArray([], adminRoles['BUCKET_MANAGER_ROLE'].map(function (roleAddress) {
                                return {
                                    address: roleAddress,
                                    owners: owners['BUCKET_MANAGER_ROLE'][roleAddress].owners || [],
                                    signersThreshold: owners['BUCKET_MANAGER_ROLE'][roleAddress].threshold || 0,
                                };
                            }), true)),
                            functions: roles['GHO']['onlyBucketManager'],
                        },
                    ],
                };
                _loop_1 = function (i) {
                    var key, gsmRoles, gsmOwners, _4, _5, roleName, _6, _7, roleAddress, _8, _9, _10, _11, _12;
                    var _13, _14, _15;
                    return __generator(this, function (_16) {
                        switch (_16.label) {
                            case 0:
                                key = Object.keys(gsmAdminRoles)[i];
                                gsmRoles = gsmAdminRoles[key].role;
                                gsmOwners = {};
                                _4 = 0, _5 = Object.keys(gsmRoles);
                                _16.label = 1;
                            case 1:
                                if (!(_4 < _5.length)) return [3 /*break*/, 10];
                                roleName = _5[_4];
                                _6 = 0, _7 = gsmRoles[roleName];
                                _16.label = 2;
                            case 2:
                                if (!(_6 < _7.length)) return [3 /*break*/, 9];
                                roleAddress = _7[_6];
                                if (!!gsmOwners[roleName]) return [3 /*break*/, 5];
                                _8 = gsmOwners;
                                _9 = roleName;
                                _13 = {};
                                _10 = roleAddress;
                                _14 = {};
                                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
                            case 3:
                                _14.owners = _16.sent();
                                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
                            case 4:
                                _8[_9] = (_13[_10] = (_14.threshold = _16.sent(),
                                    _14),
                                    _13);
                                return [3 /*break*/, 8];
                            case 5:
                                if (!(gsmOwners[roleName] && !gsmOwners[roleName][roleAddress])) return [3 /*break*/, 8];
                                _11 = gsmOwners[roleName];
                                _12 = roleAddress;
                                _15 = {};
                                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
                            case 6:
                                _15.owners = _16.sent();
                                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
                            case 7:
                                _11[_12] = (_15.threshold = _16.sent(),
                                    _15);
                                _16.label = 8;
                            case 8:
                                _6++;
                                return [3 /*break*/, 2];
                            case 9:
                                _4++;
                                return [3 /*break*/, 1];
                            case 10:
                                obj[key] = {
                                    address: addressBook[key],
                                    modifiers: [
                                        {
                                            modifier: 'onlyRescuer',
                                            addresses: uniqueAddresses(__spreadArray([], gsmRoles['TOKEN_RESCUER_ROLE'].map(function (roleAddress) {
                                                return {
                                                    address: roleAddress,
                                                    owners: gsmOwners['TOKEN_RESCUER_ROLE'][roleAddress].owners || [],
                                                    signersThreshold: gsmOwners['TOKEN_RESCUER_ROLE'][roleAddress].threshold || 0,
                                                };
                                            }), true)),
                                            functions: roles['GSM']['onlyRescuer'],
                                        },
                                        {
                                            modifier: 'onlySwapFreezer',
                                            addresses: uniqueAddresses(__spreadArray([], gsmRoles['SWAP_FREEZER_ROLE'].map(function (roleAddress) {
                                                return {
                                                    address: roleAddress,
                                                    owners: gsmOwners['SWAP_FREEZER_ROLE'][roleAddress].owners || [],
                                                    signersThreshold: gsmOwners['SWAP_FREEZER_ROLE'][roleAddress].threshold || 0,
                                                };
                                            }), true)),
                                            functions: roles['GSM']['onlySwapFreezer'],
                                        },
                                        {
                                            modifier: 'onlyLiquidator',
                                            addresses: uniqueAddresses(__spreadArray([], gsmRoles['LIQUIDATOR_ROLE'].map(function (roleAddress) {
                                                return {
                                                    address: roleAddress,
                                                    owners: gsmOwners['LIQUIDATOR_ROLE'][roleAddress].owners || [],
                                                    signersThreshold: gsmOwners['LIQUIDATOR_ROLE'][roleAddress].threshold || 0,
                                                };
                                            }), true)),
                                            functions: roles['GSM']['onlyLiquidator'],
                                        },
                                        {
                                            modifier: 'onlyConfigurator',
                                            addresses: uniqueAddresses(__spreadArray([], gsmRoles['CONFIGURATOR_ROLE'].map(function (roleAddress) {
                                                return {
                                                    address: roleAddress,
                                                    owners: gsmOwners['CONFIGURATOR_ROLE'][roleAddress].owners || [],
                                                    signersThreshold: gsmOwners['CONFIGURATOR_ROLE'][roleAddress].threshold || 0,
                                                };
                                            }), true)),
                                            functions: roles['GSM']['onlyConfigurator'],
                                        },
                                    ],
                                };
                                return [2 /*return*/];
                        }
                    });
                };
                i = 0;
                _3.label = 16;
            case 16:
                if (!(i < Object.keys(gsmAdminRoles).length)) return [3 /*break*/, 19];
                return [5 /*yield**/, _loop_1(i)];
            case 17:
                _3.sent();
                _3.label = 18;
            case 18:
                i++;
                return [3 /*break*/, 16];
            case 19:
                gsmRegistryContract = new ethers_1.ethers.Contract(addressBook.GSM_REGISTRY, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, gsmRegistryContract.owner()];
            case 20:
                gsmRegistryOwner = _3.sent();
                _m = obj;
                _o = 'GSMRegistry';
                _v = {
                    address: addressBook.GSM_REGISTRY
                };
                _w = {
                    modifier: 'onlyOwner'
                };
                _x = {
                    address: gsmRegistryOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, gsmRegistryOwner)];
            case 21:
                _x.owners = _3.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, gsmRegistryOwner)];
            case 22:
                _m[_o] = (_v.modifiers = [
                    (_w.addresses = [
                        (_x.signersThreshold = _3.sent(),
                            _x)
                    ],
                        _w.functions = roles['GSMRegistry']['onlyOwner'],
                        _w)
                ],
                    _v);
                ghoStewardContract = new ethers_1.ethers.Contract('0x8F2411a538381aae2b464499005F0211e867d84f', ghoStewardV2, provider);
                return [4 /*yield*/, ghoStewardContract.owner()];
            case 23:
                ghoStewardOwner = _3.sent();
                return [4 /*yield*/, ghoStewardContract.RISK_COUNCIL()];
            case 24:
                riskCouncil = _3.sent();
                _p = obj;
                _q = 'GhoStewardV2';
                _y = {
                    address: '0x8F2411a538381aae2b464499005F0211e867d84f'
                };
                _z = {
                    modifier: 'onlyOwner'
                };
                _0 = {
                    address: ghoStewardOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, ghoStewardOwner)];
            case 25:
                _0.owners = _3.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, ghoStewardOwner)];
            case 26:
                _r = [
                    (_z.addresses = [
                        (_0.signersThreshold = _3.sent(),
                            _0)
                    ],
                        _z.functions = roles['GhoStewardV2']['onlyOwner'],
                        _z)
                ];
                _1 = {
                    modifier: 'onlyRiskCouncil'
                };
                _2 = {
                    address: riskCouncil
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, riskCouncil)];
            case 27:
                _2.owners = _3.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, riskCouncil)];
            case 28:
                _p[_q] = (_y.modifiers = _r.concat([
                    (_1.addresses = [
                        (_2.signersThreshold = _3.sent(),
                            _2)
                    ],
                        _1.functions = roles['GhoStewardV2']['onlyRiskCouncil'],
                        _1)
                ]),
                    _y);
                return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveGHOModifiers = resolveGHOModifiers;

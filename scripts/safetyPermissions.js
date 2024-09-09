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
exports.resolveSafetyV2Modifiers = void 0;
var ethers_1 = require("ethers");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var guardian_js_1 = require("../helpers/guardian.js");
var stkToken = require("../abis/stkToken.json");
var abptABI = require("../abis/abptABI.json");
var bptABI = require("../abis/bptABI.json");
var resolveSafetyV2Modifiers = function (addressBook, provider, permissionsObject) { return __awaiter(void 0, void 0, void 0, function () {
    var SLASH_ADMIN_ROLE, COOLDOWN_ADMIN_ROLE, CLAIM_HELPER_ROLE, obj, roles, stkAaveContract, stkAaveEmissionManager, slashAdmin, cooldDownAdmin, claimHelperAdmin, _a, _b, _c, stkABPTContract, stkABPTEmissionManager, abptAddress, stkABPTslashAdmin, stkABPTcooldDownAdmin, stkABPTclaimHelperAdmin, _d, _e, _f, abptContract, bPool, abptController, _g, _h, bptContract, bptController, _j, _k, proxyAdminContracts, i, _l, _m;
    var _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    return __generator(this, function (_12) {
        switch (_12.label) {
            case 0:
                SLASH_ADMIN_ROLE = 0;
                COOLDOWN_ADMIN_ROLE = 1;
                CLAIM_HELPER_ROLE = 2;
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                stkAaveContract = new ethers_1.ethers.Contract(addressBook.STK_AAVE, stkToken, provider);
                return [4 /*yield*/, stkAaveContract.EMISSION_MANAGER()];
            case 1:
                stkAaveEmissionManager = _12.sent();
                return [4 /*yield*/, stkAaveContract.getAdmin(SLASH_ADMIN_ROLE)];
            case 2:
                slashAdmin = _12.sent();
                return [4 /*yield*/, stkAaveContract.getAdmin(COOLDOWN_ADMIN_ROLE)];
            case 3:
                cooldDownAdmin = _12.sent();
                return [4 /*yield*/, stkAaveContract.getAdmin(CLAIM_HELPER_ROLE)];
            case 4:
                claimHelperAdmin = _12.sent();
                _a = obj;
                _b = 'stkAave';
                _o = {
                    address: addressBook.STK_AAVE
                };
                _p = {
                    modifier: 'onlyEmissionManager'
                };
                _q = {
                    address: stkAaveEmissionManager
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, stkAaveEmissionManager)];
            case 5:
                _q.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, stkAaveEmissionManager)];
            case 6:
                _c = [
                    (_p.addresses = [
                        (_q.signersThreshold = _12.sent(),
                            _q)
                    ],
                        _p.functions = roles['stkAave']['onlyEmissionManager'],
                        _p)
                ];
                _r = {
                    modifier: 'onlySlashingAdmin'
                };
                _s = {
                    address: slashAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, slashAdmin)];
            case 7:
                _s.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, slashAdmin)];
            case 8:
                _c = _c.concat([
                    (_r.addresses = [
                        (_s.signersThreshold = _12.sent(),
                            _s)
                    ],
                        _r.functions = roles['stkAave']['onlySlashingAdmin'],
                        _r)
                ]);
                _t = {
                    modifier: 'onlyCooldownAdmin'
                };
                _u = {
                    address: cooldDownAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, cooldDownAdmin)];
            case 9:
                _u.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, cooldDownAdmin)];
            case 10:
                _c = _c.concat([
                    (_t.addresses = [
                        (_u.signersThreshold = _12.sent(),
                            _u)
                    ],
                        _t.functions = roles['stkAave']['onlyCooldownAdmin'],
                        _t)
                ]);
                _v = {
                    modifier: 'onlyClaimHelper'
                };
                _w = {
                    address: claimHelperAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, claimHelperAdmin)];
            case 11:
                _w.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, claimHelperAdmin)];
            case 12:
                _a[_b] = (_o.modifiers = _c.concat([
                    (_v.addresses = [
                        (_w.signersThreshold = _12.sent(),
                            _w)
                    ],
                        _v.functions = roles['stkAave']['onlyClaimHelper'],
                        _v)
                ]),
                    _o);
                stkABPTContract = new ethers_1.ethers.Contract(addressBook.STK_ABPT, stkToken, provider);
                return [4 /*yield*/, stkABPTContract.EMISSION_MANAGER()];
            case 13:
                stkABPTEmissionManager = _12.sent();
                return [4 /*yield*/, stkABPTContract.STAKED_TOKEN()];
            case 14:
                abptAddress = _12.sent();
                return [4 /*yield*/, stkABPTContract.getAdmin(SLASH_ADMIN_ROLE)];
            case 15:
                stkABPTslashAdmin = _12.sent();
                return [4 /*yield*/, stkABPTContract.getAdmin(COOLDOWN_ADMIN_ROLE)];
            case 16:
                stkABPTcooldDownAdmin = _12.sent();
                return [4 /*yield*/, stkABPTContract.getAdmin(CLAIM_HELPER_ROLE)];
            case 17:
                stkABPTclaimHelperAdmin = _12.sent();
                _d = obj;
                _e = 'stkABPT';
                _x = {
                    address: addressBook.STK_ABPT
                };
                _y = {
                    modifier: 'onlyEmissionManager'
                };
                _z = {
                    address: stkABPTEmissionManager
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, stkABPTEmissionManager)];
            case 18:
                _z.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, stkABPTEmissionManager)];
            case 19:
                _f = [
                    (_y.addresses = [
                        (_z.signersThreshold = _12.sent(),
                            _z)
                    ],
                        _y.functions = roles['stkABPT']['onlyEmissionManager'],
                        _y)
                ];
                _0 = {
                    modifier: 'onlySlashingAdmin'
                };
                _1 = {
                    address: stkABPTslashAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, stkABPTslashAdmin)];
            case 20:
                _1.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, stkABPTslashAdmin)];
            case 21:
                _f = _f.concat([
                    (_0.addresses = [
                        (_1.signersThreshold = _12.sent(),
                            _1)
                    ],
                        _0.functions = roles['stkAave']['onlySlashingAdmin'],
                        _0)
                ]);
                _2 = {
                    modifier: 'onlyCooldownAdmin'
                };
                _3 = {
                    address: stkABPTcooldDownAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, stkABPTcooldDownAdmin)];
            case 22:
                _3.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, stkABPTcooldDownAdmin)];
            case 23:
                _f = _f.concat([
                    (_2.addresses = [
                        (_3.signersThreshold = _12.sent(),
                            _3)
                    ],
                        _2.functions = roles['stkAave']['onlyCooldownAdmin'],
                        _2)
                ]);
                _4 = {
                    modifier: 'onlyClaimHelper'
                };
                _5 = {
                    address: stkABPTclaimHelperAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, stkABPTclaimHelperAdmin)];
            case 24:
                _5.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, stkABPTclaimHelperAdmin)];
            case 25:
                _d[_e] = (_x.modifiers = _f.concat([
                    (_4.addresses = [
                        (_5.signersThreshold = _12.sent(),
                            _5)
                    ],
                        _4.functions = roles['stkAave']['onlyClaimHelper'],
                        _4)
                ]),
                    _x);
                abptContract = new ethers_1.ethers.Contract(abptAddress, abptABI, provider);
                return [4 /*yield*/, abptContract.bPool()];
            case 26:
                bPool = _12.sent();
                return [4 /*yield*/, abptContract.getController()];
            case 27:
                abptController = _12.sent();
                _g = obj;
                _h = 'ABPT';
                _6 = {
                    address: abptAddress
                };
                _7 = {
                    modifier: 'onlyOwner'
                };
                _8 = {
                    address: abptController
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, abptController)];
            case 28:
                _8.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, abptController)];
            case 29:
                _g[_h] = (_6.modifiers = [
                    (_7.addresses = [
                        (_8.signersThreshold = _12.sent(),
                            _8)
                    ],
                        _7.functions = roles['ABPT']['onlyOwner'],
                        _7)
                ],
                    _6);
                bptContract = new ethers_1.ethers.Contract(bPool, bptABI, provider);
                return [4 /*yield*/, bptContract.getController()];
            case 30:
                bptController = _12.sent();
                _j = obj;
                _k = 'BPT';
                _9 = {
                    address: bPool
                };
                _10 = {
                    modifier: 'onlyController'
                };
                _11 = {
                    address: bptController
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, bptController)];
            case 31:
                _11.owners = _12.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, bptController)];
            case 32:
                _j[_k] = (_9.modifiers = [
                    (_10.addresses = [
                        (_11.signersThreshold = _12.sent(),
                            _11)
                    ],
                        _10.functions = roles['BPT']['onlyController'],
                        _10)
                ],
                    _9);
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _12.label = 33;
            case 33:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 36];
                _l = obj[proxyAdminContracts[i]];
                _m = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 34:
                _l[_m] = _12.sent();
                _12.label = 35;
            case 35:
                i++;
                return [3 /*break*/, 33];
            case 36: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveSafetyV2Modifiers = resolveSafetyV2Modifiers;

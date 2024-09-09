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
exports.resolveGovV2Modifiers = void 0;
var ethers_1 = require("ethers");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var guardian_js_1 = require("../helpers/guardian.js");
var AaveGovernanceV2ABI = require("../abis/AaveGovernanceV2.json");
var executorWithTimelockAbi = require("../abis/executorWithTimelockAbi.json");
var resolveGovV2Modifiers = function (addressBook, provider, permissionsObject) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, govContract, guardian, govOwner, _a, _b, _c, shortExecutor, pendingAdmin, admin, _d, _e, _f, longExecutor, longPendingAdmin, longAdmin, _g, _h, _j, proxyAdminContracts, i, _k, _l;
    var _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    return __generator(this, function (_2) {
        switch (_2.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                govContract = new ethers_1.ethers.Contract('0xec568fffba86c094cf06b22134b23074dfe2252c', AaveGovernanceV2ABI, provider);
                return [4 /*yield*/, govContract.getGuardian()];
            case 1:
                guardian = _2.sent();
                return [4 /*yield*/, govContract.owner()];
            case 2:
                govOwner = _2.sent();
                _a = obj;
                _b = 'AaveGovernanceV2';
                _m = {
                    address: '0xEC568fffba86c094cf06b22134B23074DFE2252c'
                };
                _o = {
                    modifier: 'onlyGuardian'
                };
                _p = {
                    address: guardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, guardian)];
            case 3:
                _p.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, guardian)];
            case 4:
                _c = [
                    (_o.addresses = [
                        (_p.signersThreshold = _2.sent(),
                            _p)
                    ],
                        _o.functions = roles['AaveGovernanceV2']['onlyGuardian'],
                        _o)
                ];
                _q = {
                    modifier: 'onlyOwner'
                };
                _r = {
                    address: govOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, govOwner)];
            case 5:
                _r.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, govOwner)];
            case 6:
                _a[_b] = (_m.modifiers = _c.concat([
                    (_q.addresses = [
                        (_r.signersThreshold = _2.sent(),
                            _r)
                    ],
                        _q.functions = roles['AaveGovernanceV2']['onlyOwner'],
                        _q)
                ]),
                    _m);
                shortExecutor = new ethers_1.ethers.Contract(addressBook.SHORT_EXECUTOR, executorWithTimelockAbi, provider);
                return [4 /*yield*/, shortExecutor.getPendingAdmin()];
            case 7:
                pendingAdmin = _2.sent();
                return [4 /*yield*/, shortExecutor.getAdmin()];
            case 8:
                admin = _2.sent();
                _d = obj;
                _e = 'ShortExecutor';
                _s = {
                    address: addressBook.SHORT_EXECUTOR
                };
                _f = [{
                        modifier: 'onlyTimelock',
                        addresses: [
                            {
                                address: shortExecutor.address,
                                owners: [],
                            },
                        ],
                        functions: roles['ExecutorWithTimelock']['onlyTimelock'],
                    }];
                _t = {
                    modifier: 'onlyPendingAdmin'
                };
                _u = {
                    address: pendingAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, pendingAdmin)];
            case 9:
                _u.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, pendingAdmin)];
            case 10:
                _f = _f.concat([
                    (_t.addresses = [
                        (_u.signersThreshold = _2.sent(),
                            _u)
                    ],
                        _t.functions = roles['ExecutorWithTimelock']['onlyPendingAdmin'],
                        _t)
                ]);
                _v = {
                    modifier: 'onlyAdmin'
                };
                _w = {
                    address: admin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, admin)];
            case 11:
                _w.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, admin)];
            case 12:
                _d[_e] = (_s.modifiers = _f.concat([
                    (_v.addresses = [
                        (_w.signersThreshold = _2.sent(),
                            _w)
                    ],
                        _v.functions = roles['ExecutorWithTimelock']['onlyAdmin'],
                        _v)
                ]),
                    _s);
                longExecutor = new ethers_1.ethers.Contract(addressBook.LONG_EXECUTOR, executorWithTimelockAbi, provider);
                return [4 /*yield*/, longExecutor.getPendingAdmin()];
            case 13:
                longPendingAdmin = _2.sent();
                return [4 /*yield*/, longExecutor.getAdmin()];
            case 14:
                longAdmin = _2.sent();
                _g = obj;
                _h = 'LongExecutor';
                _x = {
                    address: addressBook.LONG_EXECUTOR
                };
                _j = [{
                        modifier: 'onlyTimelock',
                        addresses: [
                            {
                                address: longExecutor.address,
                                owners: [],
                            },
                        ],
                        functions: roles['ExecutorWithTimelock']['onlyTimelock'],
                    }];
                _y = {
                    modifier: 'onlyPendingAdmin'
                };
                _z = {
                    address: longPendingAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, longPendingAdmin)];
            case 15:
                _z.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, longPendingAdmin)];
            case 16:
                _j = _j.concat([
                    (_y.addresses = [
                        (_z.signersThreshold = _2.sent(),
                            _z)
                    ],
                        _y.functions = roles['ExecutorWithTimelock']['onlyPendingAdmin'],
                        _y)
                ]);
                _0 = {
                    modifier: 'onlyAdmin'
                };
                _1 = {
                    address: longAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, longAdmin)];
            case 17:
                _1.owners = _2.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, longAdmin)];
            case 18:
                _g[_h] = (_x.modifiers = _j.concat([
                    (_0.addresses = [
                        (_1.signersThreshold = _2.sent(),
                            _1)
                    ],
                        _0.functions = roles['ExecutorWithTimelock']['onlyAdmin'],
                        _0)
                ]),
                    _x);
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _2.label = 19;
            case 19:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 22];
                _k = obj[proxyAdminContracts[i]];
                _l = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 20:
                _k[_l] = _2.sent();
                _2.label = 21;
            case 21:
                i++;
                return [3 /*break*/, 19];
            case 22: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveGovV2Modifiers = resolveGovV2Modifiers;

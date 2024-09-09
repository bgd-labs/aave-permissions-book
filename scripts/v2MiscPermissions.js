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
exports.resolveV2MiscModifiers = void 0;
var ethers_1 = require("ethers");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var guardian_js_1 = require("../helpers/guardian.js");
var onlyOwnerAbi = require("../abis/onlyOwnerAbi.json");
var aave_address_book_1 = require("@bgd-labs/aave-address-book");
var erABI = require("../abis/EcosystemReserve.json");
var resolveV2MiscModifiers = function (addressBook, addresses, provider, permissionsObject) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, ecosystemReserveContract, erFundsAdmin, _a, _b, _c, ecosystemReserveControllerContract, erControllerOwner, _d, _e, proxyAdminContracts, i, _f, _g;
    var _h, _j, _k, _l, _m, _o, _p, _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                obj['LendToAaveMigrator'] = {
                    address: addresses.LEND_TO_AAVE_MIGRATOR,
                    modifiers: [],
                };
                ecosystemReserveContract = new ethers_1.ethers.Contract(aave_address_book_1.MiscEthereum.ECOSYSTEM_RESERVE, erABI, provider);
                return [4 /*yield*/, ecosystemReserveContract.getFundsAdmin()];
            case 1:
                erFundsAdmin = _r.sent();
                _a = obj;
                _b = 'EcosystemReserve';
                _h = {
                    address: aave_address_book_1.MiscEthereum.ECOSYSTEM_RESERVE
                };
                _j = {
                    modifier: 'onlyFundsAdmin'
                };
                _k = {
                    address: erFundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, erFundsAdmin)];
            case 2:
                _k.owners = _r.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, erFundsAdmin)];
            case 3:
                _c = [
                    (_j.addresses = [
                        (_k.signersThreshold = _r.sent(),
                            _k)
                    ],
                        _j.functions = roles['EcosystemReserve']['onlyFundsAdmin'],
                        _j)
                ];
                _l = {
                    modifier: 'onlyAdminOrRecipient'
                };
                _m = {
                    address: erFundsAdmin
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, erFundsAdmin)];
            case 4:
                _m.owners = _r.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, erFundsAdmin)];
            case 5:
                _a[_b] = (_h.modifiers = _c.concat([
                    (_l.addresses = [
                        (_m.signersThreshold = _r.sent(),
                            _m)
                    ],
                        _l.functions = roles['EcosystemReserve']['onlyAdminOrRecipient'],
                        _l)
                ]),
                    _h);
                ecosystemReserveControllerContract = new ethers_1.ethers.Contract(aave_address_book_1.MiscEthereum.AAVE_ECOSYSTEM_RESERVE_CONTROLLER, onlyOwnerAbi, provider);
                return [4 /*yield*/, ecosystemReserveControllerContract.owner()];
            case 6:
                erControllerOwner = _r.sent();
                _d = obj;
                _e = 'EcosystemReserveController';
                _o = {
                    address: aave_address_book_1.MiscEthereum.AAVE_ECOSYSTEM_RESERVE_CONTROLLER
                };
                _p = {
                    modifier: 'onlyOwner'
                };
                _q = {
                    address: erControllerOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, erControllerOwner)];
            case 7:
                _q.owners = _r.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, erControllerOwner)];
            case 8:
                _d[_e] = (_o.modifiers = [
                    (_p.addresses = [
                        (_q.signersThreshold = _r.sent(),
                            _q)
                    ],
                        _p.functions = roles['EcosystemReserveController']['onlyOwner'],
                        _p)
                ],
                    _o);
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _r.label = 9;
            case 9:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 12];
                _f = obj[proxyAdminContracts[i]];
                _g = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 10:
                _f[_g] = _r.sent();
                _r.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 9];
            case 12: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveV2MiscModifiers = resolveV2MiscModifiers;

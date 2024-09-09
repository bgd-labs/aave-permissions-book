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
exports.resolveGovV3Modifiers = void 0;
var ethers_1 = require("ethers");
var contract_helpers_1 = require("@aave/contract-helpers");
var proxyAdmin_js_1 = require("../helpers/proxyAdmin.js");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var guardian_js_1 = require("../helpers/guardian.js");
var aave_address_book_1 = require("@bgd-labs/aave-address-book");
var baseAdapter = require("../abis/BaseAdapter.json");
var resolveGovV3Modifiers = function (addressBook, provider, permissionsObject, chainId, senders, tenderly, ggAdminRoles, addressNames) { return __awaiter(void 0, void 0, void 0, function () {
    var obj, roles, owners, _i, _a, roleName, _b, _c, roleAddress, _d, _e, _f, _g, _h, govContractGuardian, govContractOwner, govGuardian, govOwner, _j, _k, _l, _m, pcContractGuardian, pcContractOwner, pcContractRescue, pcGuardian, pcOwner, rescuer, _o, _p, _q, _r, vmContract, owner, _s, _t, vpContract, owner, _u, _v, vpContract, owner, _w, _x, vpContract, owner, _y, _z, executorContract, owner, _0, _1, executorContract, owner, _2, _3, emergencyRegistryContract, owner, _4, _5, cccContract, cccContractOwner, cccContractGuardian, cccContractRescue, owner, guardian, rescuer, supportedChains, receiverBridges_1, i, bridges, receiverBridgesArray, i, trustedRemotes, i_1, bridgeAdapterContract, trustedRemote, bridgeAdapterName, bridgeAdapterContract, error_1, _6, _7, _8, _9, _10, _11, proxyAdminContracts, i, _12, _13;
    var _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65;
    return __generator(this, function (_66) {
        switch (_66.label) {
            case 0:
                obj = {};
                roles = (0, jsonParsers_js_1.generateRoles)(permissionsObject);
                owners = {};
                _i = 0, _a = Object.keys(ggAdminRoles);
                _66.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                roleName = _a[_i];
                _b = 0, _c = ggAdminRoles[roleName];
                _66.label = 2;
            case 2:
                if (!(_b < _c.length)) return [3 /*break*/, 9];
                roleAddress = _c[_b];
                if (!!owners[roleName]) return [3 /*break*/, 5];
                _d = owners;
                _e = roleName;
                _14 = {};
                _f = roleAddress;
                _15 = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 3:
                _15.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 4:
                _d[_e] = (_14[_f] = (_15.threshold = _66.sent(),
                    _15),
                    _14);
                return [3 /*break*/, 8];
            case 5:
                if (!(owners[roleName] && !owners[roleName][roleAddress])) return [3 /*break*/, 8];
                _g = owners[roleName];
                _h = roleAddress;
                _16 = {};
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, roleAddress)];
            case 6:
                _16.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, roleAddress)];
            case 7:
                _g[_h] = (_16.threshold = _66.sent(),
                    _16);
                _66.label = 8;
            case 8:
                _b++;
                return [3 /*break*/, 2];
            case 9:
                _i++;
                return [3 /*break*/, 1];
            case 10:
                if (addressBook.GRANULAR_GUARDIAN &&
                    addressBook.GRANULAR_GUARDIAN !== ethers_1.constants.AddressZero) {
                    obj['GranularGuardian'] = {
                        address: addressBook.GRANULAR_GUARDIAN,
                        modifiers: [
                            {
                                modifier: 'onlyRetryGuardian',
                                addresses: __spreadArray([], ggAdminRoles['RETRY_ROLE'].map(function (roleAddress) {
                                    return {
                                        address: roleAddress,
                                        owners: owners['RETRY_ROLE'][roleAddress].owners || [],
                                        signersThreshold: owners['RETRY_ROLE'][roleAddress].threshold || 0,
                                    };
                                }), true),
                                functions: roles['GranularGuardian']['onlyRetryGuardian'],
                            },
                            {
                                modifier: 'onlyEmergencyGuardian',
                                addresses: __spreadArray([], ggAdminRoles['SOLVE_EMERGENCY_ROLE'].map(function (roleAddress) {
                                    return {
                                        address: roleAddress,
                                        owners: owners['SOLVE_EMERGENCY_ROLE'][roleAddress].owners || [],
                                        signersThreshold: owners['SOLVE_EMERGENCY_ROLE'][roleAddress].threshold || 0,
                                    };
                                }), true),
                                functions: roles['GranularGuardian']['onlyEmergencyGuardian'],
                            },
                            {
                                modifier: 'onlyDefaultAdmin',
                                addresses: __spreadArray([], ggAdminRoles['DEFAULT_ADMIN'].map(function (roleAddress) {
                                    return {
                                        address: roleAddress,
                                        owners: owners['DEFAULT_ADMIN'][roleAddress].owners || [],
                                        signersThreshold: owners['DEFAULT_ADMIN'][roleAddress].threshold || 0,
                                    };
                                }), true),
                                functions: roles['GranularGuardian']['onlyDefaultAdmin'],
                            },
                        ],
                    };
                }
                if (!(addressBook.GOVERNANCE &&
                    addressBook.GOVERNANCE !== ethers_1.constants.AddressZero)) return [3 /*break*/, 21];
                govContractGuardian = new ethers_1.ethers.Contract(addressBook.GOVERNANCE, aave_address_book_1.IWithGuardian_ABI, provider);
                govContractOwner = new ethers_1.ethers.Contract(addressBook.GOVERNANCE, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, govContractGuardian.guardian()];
            case 11:
                govGuardian = _66.sent();
                return [4 /*yield*/, govContractOwner.owner()];
            case 12:
                govOwner = _66.sent();
                _j = obj;
                _k = 'AaveGovernanceV3';
                _17 = {
                    address: addressBook.GOVERNANCE
                };
                _18 = {
                    modifier: 'onlyOwner'
                };
                _19 = {
                    address: govOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, govOwner)];
            case 13:
                _19.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, govOwner)];
            case 14:
                _l = [
                    (_18.addresses = [
                        (_19.signersThreshold = _66.sent(),
                            _19)
                    ],
                        _18.functions = roles['AaveGovernanceV3']['onlyOwner'],
                        _18)
                ];
                _20 = {
                    modifier: 'onlyGuardian'
                };
                _21 = {
                    address: govGuardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, govGuardian)];
            case 15:
                _21.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, govGuardian)];
            case 16:
                _l = _l.concat([
                    (_20.addresses = [
                        (_21.signersThreshold = _66.sent(),
                            _21)
                    ],
                        _20.functions = roles['AaveGovernanceV3']['onlyGuardian'],
                        _20)
                ]);
                _22 = {
                    modifier: 'onlyOwnerOrGuardian'
                };
                _23 = {
                    address: govGuardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, govGuardian)];
            case 17:
                _23.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, govGuardian)];
            case 18:
                _m = [
                    (_23.signersThreshold = _66.sent(),
                        _23)
                ];
                _24 = {
                    address: govOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, govOwner)];
            case 19:
                _24.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, govOwner)];
            case 20:
                _j[_k] = (_17.modifiers = _l.concat([
                    (_22.addresses = _m.concat([
                        (_24.signersThreshold = _66.sent(),
                            _24)
                    ]),
                        _22.functions = roles['AaveGovernanceV3']['onlyOwnerOrGuardian'],
                        _22)
                ]),
                    _17);
                _66.label = 21;
            case 21:
                if (!(addressBook.PAYLOADS_CONTROLLER &&
                    addressBook.PAYLOADS_CONTROLLER !== ethers_1.constants.AddressZero)) return [3 /*break*/, 35];
                pcContractGuardian = new ethers_1.ethers.Contract(addressBook.PAYLOADS_CONTROLLER, aave_address_book_1.IWithGuardian_ABI, provider);
                pcContractOwner = new ethers_1.ethers.Contract(addressBook.PAYLOADS_CONTROLLER, aave_address_book_1.IOwnable_ABI, provider);
                pcContractRescue = new ethers_1.ethers.Contract(addressBook.PAYLOADS_CONTROLLER, aave_address_book_1.IRescuable_ABI, provider);
                return [4 /*yield*/, pcContractGuardian.guardian()];
            case 22:
                pcGuardian = _66.sent();
                return [4 /*yield*/, pcContractOwner.owner()];
            case 23:
                pcOwner = _66.sent();
                return [4 /*yield*/, pcContractRescue.whoCanRescue()];
            case 24:
                rescuer = _66.sent();
                _o = obj;
                _p = 'PayloadsController';
                _25 = {
                    address: addressBook.PAYLOADS_CONTROLLER
                };
                _26 = {
                    modifier: 'onlyOwner'
                };
                _27 = {
                    address: pcOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, pcOwner)];
            case 25:
                _27.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, pcOwner)];
            case 26:
                _q = [
                    (_26.addresses = [
                        (_27.signersThreshold = _66.sent(),
                            _27)
                    ],
                        _26.functions = roles['PayloadsController']['onlyOwner'],
                        _26)
                ];
                _28 = {
                    modifier: 'onlyGuardian'
                };
                _29 = {
                    address: pcGuardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, pcGuardian)];
            case 27:
                _29.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, pcGuardian)];
            case 28:
                _q = _q.concat([
                    (_28.addresses = [
                        (_29.signersThreshold = _66.sent(),
                            _29)
                    ],
                        _28.functions = roles['PayloadsController']['onlyGuardian'],
                        _28)
                ]);
                _30 = {
                    modifier: 'onlyOwnerOrGuardian'
                };
                _31 = {
                    address: pcGuardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, pcGuardian)];
            case 29:
                _31.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, pcGuardian)];
            case 30:
                _r = [
                    (_31.signersThreshold = _66.sent(),
                        _31)
                ];
                _32 = {
                    address: pcOwner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, pcOwner)];
            case 31:
                _32.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, pcOwner)];
            case 32:
                _q = _q.concat([
                    (_30.addresses = _r.concat([
                        (_32.signersThreshold = _66.sent(),
                            _32)
                    ]),
                        _30.functions = roles['PayloadsController']['onlyOwnerOrGuardian'],
                        _30)
                ]);
                _33 = {
                    modifier: 'onlyRescueGuardian'
                };
                _34 = {
                    address: rescuer
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, rescuer)];
            case 33:
                _34.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, rescuer)];
            case 34:
                _o[_p] = (_25.modifiers = _q.concat([
                    (_33.addresses = [
                        (_34.signersThreshold = _66.sent(),
                            _34)
                    ],
                        _33.functions = roles['PayloadsController']['onlyRescueGuardian'],
                        _33)
                ]),
                    _25);
                _66.label = 35;
            case 35:
                if (!(addressBook.VOTING_MACHINE &&
                    addressBook.VOTING_MACHINE !== ethers_1.constants.AddressZero)) return [3 /*break*/, 39];
                vmContract = new ethers_1.ethers.Contract(addressBook.VOTING_MACHINE, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, vmContract.owner()];
            case 36:
                owner = _66.sent();
                _s = obj;
                _t = 'VotingMachine';
                _35 = {
                    address: addressBook.VOTING_MACHINE
                };
                _36 = {
                    modifier: 'onlyOwner'
                };
                _37 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 37:
                _37.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 38:
                _s[_t] = (_35.modifiers = [
                    (_36.addresses = [
                        (_37.signersThreshold = _66.sent(),
                            _37)
                    ],
                        _36.functions = roles['VotingMachine']['onlyOwner'],
                        _36)
                ],
                    _35);
                _66.label = 39;
            case 39:
                if (!(addressBook.VOTING_PORTAL_ETH_ETH &&
                    addressBook.VOTING_PORTAL_ETH_ETH !== ethers_1.constants.AddressZero)) return [3 /*break*/, 43];
                vpContract = new ethers_1.ethers.Contract(addressBook.VOTING_PORTAL_ETH_ETH, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, vpContract.owner()];
            case 40:
                owner = _66.sent();
                _u = obj;
                _v = 'VotingPortal_Eth_Eth';
                _38 = {
                    address: addressBook.VOTING_PORTAL_ETH_ETH
                };
                _39 = {
                    modifier: 'onlyOwner'
                };
                _40 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 41:
                _40.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 42:
                _u[_v] = (_38.modifiers = [
                    (_39.addresses = [
                        (_40.signersThreshold = _66.sent(),
                            _40)
                    ],
                        _39.functions = roles['VotingPortal']['onlyOwner'],
                        _39)
                ],
                    _38);
                _66.label = 43;
            case 43:
                if (!(addressBook.VOTING_PORTAL_ETH_AVAX &&
                    addressBook.VOTING_PORTAL_ETH_AVAX !== ethers_1.constants.AddressZero)) return [3 /*break*/, 47];
                vpContract = new ethers_1.ethers.Contract(addressBook.VOTING_PORTAL_ETH_AVAX, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, vpContract.owner()];
            case 44:
                owner = _66.sent();
                _w = obj;
                _x = 'VotingPortal_Eth_Avax';
                _41 = {
                    address: addressBook.VOTING_PORTAL_ETH_AVAX
                };
                _42 = {
                    modifier: 'onlyOwner'
                };
                _43 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 45:
                _43.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 46:
                _w[_x] = (_41.modifiers = [
                    (_42.addresses = [
                        (_43.signersThreshold = _66.sent(),
                            _43)
                    ],
                        _42.functions = roles['VotingPortal']['onlyOwner'],
                        _42)
                ],
                    _41);
                _66.label = 47;
            case 47:
                if (!(addressBook.VOTING_PORTAL_ETH_POL &&
                    addressBook.VOTING_PORTAL_ETH_POL !== ethers_1.constants.AddressZero)) return [3 /*break*/, 51];
                vpContract = new ethers_1.ethers.Contract(addressBook.VOTING_PORTAL_ETH_POL, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, vpContract.owner()];
            case 48:
                owner = _66.sent();
                _y = obj;
                _z = 'VotingPortal_Eth_Pol';
                _44 = {
                    address: addressBook.VOTING_PORTAL_ETH_POL
                };
                _45 = {
                    modifier: 'onlyOwner'
                };
                _46 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 49:
                _46.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 50:
                _y[_z] = (_44.modifiers = [
                    (_45.addresses = [
                        (_46.signersThreshold = _66.sent(),
                            _46)
                    ],
                        _45.functions = roles['VotingPortal']['onlyOwner'],
                        _45)
                ],
                    _44);
                _66.label = 51;
            case 51:
                if (!(addressBook.EXECUTOR_LVL_1 &&
                    addressBook.EXECUTOR_LVL_1 !== ethers_1.constants.AddressZero)) return [3 /*break*/, 55];
                executorContract = new ethers_1.ethers.Contract(addressBook.EXECUTOR_LVL_1, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, executorContract.owner()];
            case 52:
                owner = _66.sent();
                _0 = obj;
                _1 = 'Executor_lvl1';
                _47 = {
                    address: addressBook.EXECUTOR_LVL_1
                };
                _48 = {
                    modifier: 'onlyOwner'
                };
                _49 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 53:
                _49.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 54:
                _0[_1] = (_47.modifiers = [
                    (_48.addresses = [
                        (_49.signersThreshold = _66.sent(),
                            _49)
                    ],
                        _48.functions = roles['Executor']['onlyOwner'],
                        _48)
                ],
                    _47);
                _66.label = 55;
            case 55:
                if (!(addressBook.EXECUTOR_LVL_2 &&
                    addressBook.EXECUTOR_LVL_2 !== ethers_1.constants.AddressZero)) return [3 /*break*/, 59];
                executorContract = new ethers_1.ethers.Contract(addressBook.EXECUTOR_LVL_2, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, executorContract.owner()];
            case 56:
                owner = _66.sent();
                _2 = obj;
                _3 = 'Executor_lvl2';
                _50 = {
                    address: addressBook.EXECUTOR_LVL_2
                };
                _51 = {
                    modifier: 'onlyOwner'
                };
                _52 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 57:
                _52.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 58:
                _2[_3] = (_50.modifiers = [
                    (_51.addresses = [
                        (_52.signersThreshold = _66.sent(),
                            _52)
                    ],
                        _51.functions = roles['Executor']['onlyOwner'],
                        _51)
                ],
                    _50);
                _66.label = 59;
            case 59:
                if (!(addressBook.EMERGENCY_REGISTRY &&
                    addressBook.EMERGENCY_REGISTRY !== ethers_1.constants.AddressZero)) return [3 /*break*/, 63];
                emergencyRegistryContract = new ethers_1.ethers.Contract(addressBook.EMERGENCY_REGISTRY, aave_address_book_1.IOwnable_ABI, provider);
                return [4 /*yield*/, emergencyRegistryContract.owner()];
            case 60:
                owner = _66.sent();
                _4 = obj;
                _5 = 'EmergencyRegistry';
                _53 = {
                    address: addressBook.EMERGENCY_REGISTRY
                };
                _54 = {
                    modifier: 'onlyOwner'
                };
                _55 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 61:
                _55.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 62:
                _4[_5] = (_53.modifiers = [
                    (_54.addresses = [
                        (_55.signersThreshold = _66.sent(),
                            _55)
                    ],
                        _54.functions = roles['EmergencyRegistry']['onlyOwner'],
                        _54)
                ],
                    _53);
                _66.label = 63;
            case 63:
                if (!(addressBook.CROSS_CHAIN_CONTROLLER &&
                    addressBook.CROSS_CHAIN_CONTROLLER !== ethers_1.constants.AddressZero)) return [3 /*break*/, 93];
                cccContract = new ethers_1.ethers.Contract(addressBook.CROSS_CHAIN_CONTROLLER, aave_address_book_1.ICrossChainController_ABI, provider);
                cccContractOwner = new ethers_1.ethers.Contract(addressBook.CROSS_CHAIN_CONTROLLER, aave_address_book_1.IOwnable_ABI, provider);
                cccContractGuardian = new ethers_1.ethers.Contract(addressBook.CROSS_CHAIN_CONTROLLER, aave_address_book_1.IWithGuardian_ABI, provider);
                cccContractRescue = new ethers_1.ethers.Contract(addressBook.CROSS_CHAIN_CONTROLLER, aave_address_book_1.IRescuable_ABI, provider);
                return [4 /*yield*/, cccContractOwner.owner()];
            case 64:
                owner = _66.sent();
                return [4 /*yield*/, cccContractGuardian.guardian()];
            case 65:
                guardian = _66.sent();
                return [4 /*yield*/, cccContractRescue.whoCanRescue()];
            case 66:
                rescuer = _66.sent();
                return [4 /*yield*/, cccContract.getSupportedChains()];
            case 67:
                supportedChains = _66.sent();
                receiverBridges_1 = new Set();
                i = 0;
                _66.label = 68;
            case 68:
                if (!(i < supportedChains.length)) return [3 /*break*/, 71];
                return [4 /*yield*/, cccContract.getReceiverBridgeAdaptersByChain(supportedChains[i])];
            case 69:
                bridges = _66.sent();
                bridges.map(function (bridge) { return receiverBridges_1.add(bridge); });
                _66.label = 70;
            case 70:
                i++;
                return [3 /*break*/, 68];
            case 71:
                receiverBridgesArray = Array.from(receiverBridges_1);
                i = 0;
                _66.label = 72;
            case 72:
                if (!(i < receiverBridgesArray.length)) return [3 /*break*/, 82];
                trustedRemotes = [];
                i_1 = 0;
                _66.label = 73;
            case 73:
                if (!(i_1 < supportedChains.length)) return [3 /*break*/, 76];
                bridgeAdapterContract = new ethers_1.ethers.Contract(receiverBridgesArray[i_1], baseAdapter, provider);
                return [4 /*yield*/, bridgeAdapterContract.getTrustedRemoteByChainId(supportedChains[i_1])];
            case 74:
                trustedRemote = _66.sent();
                trustedRemotes.push({
                    address: trustedRemote,
                    chain: supportedChains[i_1],
                });
                _66.label = 75;
            case 75:
                i_1++;
                return [3 /*break*/, 73];
            case 76:
                bridgeAdapterName = "BridgeAdapter".concat(i);
                _66.label = 77;
            case 77:
                _66.trys.push([77, 79, , 80]);
                bridgeAdapterContract = new ethers_1.ethers.Contract(receiverBridgesArray[i], baseAdapter, provider);
                return [4 /*yield*/, bridgeAdapterContract.adapterName()];
            case 78:
                bridgeAdapterName = _66.sent();
                return [3 /*break*/, 80];
            case 79:
                error_1 = _66.sent();
                if (addressNames && addressNames[receiverBridgesArray[i]] !== '') {
                    bridgeAdapterName = addressNames[receiverBridgesArray[i]];
                }
                return [3 /*break*/, 80];
            case 80:
                obj[bridgeAdapterName] = {
                    address: receiverBridgesArray[i],
                    modifiers: [
                        {
                            modifier: 'trustedRemote',
                            addresses: __spreadArray([], Array.from(trustedRemotes).map(function (trustedRemote) {
                                return {
                                    address: trustedRemote.address,
                                    owners: [],
                                    chain: trustedRemote.chain.toString(),
                                };
                            }), true),
                            functions: ['receiveMessage'],
                        },
                    ],
                };
                _66.label = 81;
            case 81:
                i++;
                return [3 /*break*/, 72];
            case 82:
                _6 = obj;
                _7 = 'CrossChainController';
                _56 = {
                    address: addressBook.CROSS_CHAIN_CONTROLLER
                };
                _57 = {
                    modifier: 'onlyOwner'
                };
                _58 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 83:
                _58.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 84:
                _8 = [
                    (_57.addresses = [
                        (_58.signersThreshold = _66.sent(),
                            _58)
                    ],
                        _57.functions = roles['CrossChainController']['onlyOwner'],
                        _57)
                ];
                _59 = {
                    modifier: 'onlyOwnerOrGuardian'
                };
                _60 = {
                    address: guardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, guardian)];
            case 85:
                _60.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, guardian)];
            case 86:
                _9 = [
                    (_60.signersThreshold = _66.sent(),
                        _60)
                ];
                _61 = {
                    address: owner
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, owner)];
            case 87:
                _61.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, owner)];
            case 88:
                _8 = _8.concat([
                    (_59.addresses = _9.concat([
                        (_61.signersThreshold = _66.sent(),
                            _61)
                    ]),
                        _59.functions = roles['CrossChainController']['onlyOwnerOrGuardian'],
                        _59)
                ]);
                _62 = {
                    modifier: 'onlyRescueGuardian'
                };
                _63 = {
                    address: rescuer
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, rescuer)];
            case 89:
                _63.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, rescuer)];
            case 90:
                _6[_7] = (_56.modifiers = _8.concat([
                    (_62.addresses = [
                        (_63.signersThreshold = _66.sent(),
                            _63)
                    ],
                        _62.functions = roles['CrossChainController']['onlyRescueGuardian'],
                        _62),
                    {
                        modifier: 'onlyApprovedSenders',
                        addresses: __spreadArray([], senders.map(function (sender) {
                            return {
                                address: sender,
                                owners: [],
                            };
                        }), true),
                        functions: roles['CrossChainController']['onlyApprovedSenders'],
                    },
                    {
                        modifier: 'onlyApprovedBridges',
                        addresses: __spreadArray([], Array.from(receiverBridges_1).map(function (approvedBridge) {
                            return {
                                address: approvedBridge,
                                owners: [],
                            };
                        }), true),
                        functions: roles['CrossChainController']['onlyApprovedBridges'],
                    }
                ]),
                    _56);
                if (!(chainId === contract_helpers_1.ChainId.polygon ||
                    chainId === contract_helpers_1.ChainId.avalanche ||
                    chainId === 56 ||
                    chainId === 100)) return [3 /*break*/, 93];
                _11 = (_10 = obj['CrossChainController'].modifiers).push;
                _64 = {
                    modifier: 'onlyGuardian'
                };
                _65 = {
                    address: guardian
                };
                return [4 /*yield*/, (0, guardian_js_1.getSafeOwners)(provider, guardian)];
            case 91:
                _65.owners = _66.sent();
                return [4 /*yield*/, (0, guardian_js_1.getSafeThreshold)(provider, guardian)];
            case 92:
                _11.apply(_10, [(_64.addresses = [
                        (_65.signersThreshold = _66.sent(),
                            _65)
                    ],
                        _64.functions = roles['CrossChainController']['onlyGuardian'],
                        _64)]);
                _66.label = 93;
            case 93:
                proxyAdminContracts = permissionsObject
                    .filter(function (contract) { return contract.proxyAdmin; })
                    .map(function (contract) { return contract.contract; });
                i = 0;
                _66.label = 94;
            case 94:
                if (!(i < proxyAdminContracts.length)) return [3 /*break*/, 97];
                if (!obj[proxyAdminContracts[i]]) return [3 /*break*/, 96];
                _12 = obj[proxyAdminContracts[i]];
                _13 = 'proxyAdmin';
                return [4 /*yield*/, (0, proxyAdmin_js_1.getProxyAdmin)(obj[proxyAdminContracts[i]].address, provider)];
            case 95:
                _12[_13] = _66.sent();
                _66.label = 96;
            case 96:
                i++;
                return [3 /*break*/, 94];
            case 97: return [2 /*return*/, obj];
        }
    });
}); };
exports.resolveGovV3Modifiers = resolveGovV3Modifiers;

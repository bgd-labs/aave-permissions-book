"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getCurrentRoleAdmins = exports.parseLog = exports.defaultRolesAdmin = exports.roleRevokedEventABI = exports.roleGrantedEventABI = void 0;
var ethers_1 = require("ethers");
var eventLogs_js_1 = require("./eventLogs.js");
var configs_js_1 = require("./configs.js");
var limits_js_1 = require("./limits.js");
exports.roleGrantedEventABI = [
    'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
];
exports.roleRevokedEventABI = [
    'event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)',
];
exports.defaultRolesAdmin = '0x0000000000000000000000000000000000000000000000000000000000000000';
function initializeRoleCodeMap(roleNames) {
    var roleCodeMap = new Map([
        [
            '0x0000000000000000000000000000000000000000000000000000000000000000',
            'DEFAULT_ADMIN',
        ],
    ]);
    for (var _i = 0, roleNames_1 = roleNames; _i < roleNames_1.length; _i++) {
        var roleName = roleNames_1[_i];
        var code = ethers_1.ethers.utils.solidityKeccak256(['string'], [roleName]);
        roleCodeMap.set(code, roleName);
    }
    return roleCodeMap;
}
var parseLog = function (abi, eventLog) {
    var iface = new ethers_1.ethers.utils.Interface(abi);
    var parsedEvent = iface.parseLog(eventLog);
    var _a = parsedEvent.args, role = _a.role, account = _a.account;
    return { account: account, role: role };
};
exports.parseLog = parseLog;
var getCurrentRoleAdmins = function (provider, oldRoles, fromBlock, chainId, pool, roleNames, contract) { return __awaiter(void 0, void 0, void 0, function () {
    var roleHexToNameMap, limit, timeout, eventLogs, finalBlock, networkLogs, tenderlyProvider, tenderlyBlock, tenderlyLogs, logs, logs, roleGrantedTopic0, roleRevokedTopic0, roles, _loop_1, _i, eventLogs_1, eventLog;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                roleHexToNameMap = initializeRoleCodeMap(roleNames);
                limit = (0, limits_js_1.getLimit)(chainId);
                timeout = undefined;
                eventLogs = [];
                finalBlock = 0;
                if (!(pool === configs_js_1.Pools.TENDERLY || pool === configs_js_1.Pools.GHO_TENDERLY)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                        provider: provider,
                        address: contract,
                        fromBlock: fromBlock,
                        logs: [],
                        limit: limit,
                        timeout: timeout,
                        maxBlock: configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyBlock,
                        chainId: chainId,
                    })];
            case 1:
                networkLogs = _a.sent();
                tenderlyProvider = new ethers_1.providers.StaticJsonRpcProvider(configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyRpcUrl);
                limit = 999;
                timeout = 10000;
                tenderlyBlock = configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyBlock ||
                    networkLogs.finalBlock;
                return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                        provider: tenderlyProvider,
                        address: contract,
                        fromBlock: tenderlyBlock,
                        logs: [],
                        limit: limit,
                        timeout: timeout,
                        tenderly: true,
                        chainId: chainId,
                    })];
            case 2:
                tenderlyLogs = _a.sent();
                logs = __spreadArray(__spreadArray([], networkLogs.eventLogs, true), tenderlyLogs.eventLogs, true);
                eventLogs = logs;
                finalBlock = networkLogs.finalBlock;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                    provider: provider,
                    address: contract,
                    fromBlock: fromBlock,
                    logs: [],
                    limit: limit,
                    timeout: timeout,
                    chainId: chainId,
                })];
            case 4:
                logs = _a.sent();
                eventLogs = logs.eventLogs;
                finalBlock = logs.finalBlock;
                _a.label = 5;
            case 5:
                roleGrantedTopic0 = ethers_1.utils.id('RoleGranted(bytes32,address,address)');
                roleRevokedTopic0 = ethers_1.utils.id('RoleRevoked(bytes32,address,address)');
                roles = __assign({}, oldRoles);
                _loop_1 = function (eventLog) {
                    // eventLogs.forEach((eventLog) => {
                    if (eventLog.topics[0] === roleGrantedTopic0) {
                        var _b = (0, exports.parseLog)(exports.roleGrantedEventABI, eventLog), role = _b.role, account_1 = _b.account;
                        var roleName = roleHexToNameMap.get(role);
                        // console.log(`role granted
                        //   topic0: ${eventLog.topics[0]}
                        //   grant : ${roleGrantedTopic0}
                        //   revoke: ${roleRevokedTopic0}
                        //   address: ${account}
                        //   rawRole: ${role}
                        //   role: ${roleName}
                        // `);
                        if (roleName && !roles[roleName]) {
                            roles[roleName] = [];
                        }
                        if (roleName && roles[roleName]) {
                            var accountFound = roles[roleName].find(function (roleAddress) { return roleAddress === account_1; });
                            if (!accountFound) {
                                roles[roleName].push(account_1);
                            }
                        }
                    }
                    else if (eventLog.topics[0] === roleRevokedTopic0) {
                        var _c = (0, exports.parseLog)(exports.roleRevokedEventABI, eventLog), role = _c.role, account_2 = _c.account;
                        var roleName = roleHexToNameMap.get(role);
                        // console.log(`role revoked
                        //   topic0: ${eventLog.topics[0]}
                        //   grant : ${roleGrantedTopic0}
                        //   revoke: ${roleRevokedTopic0}
                        //   address: ${account}
                        //   rawRole: ${role}
                        //   role: ${roleName}
                        // `);
                        if (roleName) {
                            roles[roleName] = roles[roleName].filter(function (role) { return role !== account_2; });
                        }
                    }
                    else {
                        // console.log(`
                        //   topic0: ${eventLog}
                        // `);
                    }
                };
                // save or remove admins
                for (_i = 0, eventLogs_1 = eventLogs; _i < eventLogs_1.length; _i++) {
                    eventLog = eventLogs_1[_i];
                    _loop_1(eventLog);
                }
                roleNames.forEach(function (roleName) {
                    if (!roles[roleName])
                        roles[roleName] = [];
                });
                // console.log('roes: ', roles);
                // console.log('-------------------------------');
                return [2 /*return*/, { role: roles, latestBlockNumber: finalBlock }];
        }
    });
}); };
exports.getCurrentRoleAdmins = getCurrentRoleAdmins;

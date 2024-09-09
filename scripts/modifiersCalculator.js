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
var ethers_1 = require("ethers");
var configs_js_1 = require("../helpers/configs.js");
var fileSystem_js_1 = require("../helpers/fileSystem.js");
var adminRoles_js_1 = require("../helpers/adminRoles.js");
var v2Permissions_js_1 = require("./v2Permissions.js");
var v3Permissions_js_1 = require("./v3Permissions.js");
var governancePermissions_js_1 = require("./governancePermissions.js");
var safetyPermissions_js_1 = require("./safetyPermissions.js");
var v2MiscPermissions_js_1 = require("./v2MiscPermissions.js");
var crossChainControllerLogs_js_1 = require("../helpers/crossChainControllerLogs.js");
var govV3Permissions_js_1 = require("./govV3Permissions.js");
var ghoPermissions_js_1 = require("./ghoPermissions.js");
var jsonParsers_js_1 = require("../helpers/jsonParsers.js");
var generateNetworkPermissions = function (network) { return __awaiter(void 0, void 0, void 0, function () {
    var fullJson, provider, pools, poolsKeys, i, poolKey, pool, permissionsJson, poolPermissions, admins, gsmAdmins, govV3, fromBlock, gsmBlock, i_1, key, gsmBlock_1, _a, _b, fromBlock, cccFromBlock, _c, senders, latestCCCBlockNumber, ggFromBlock, ggRoles, permissionsGovV3Json, _d;
    var _e;
    var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    return __generator(this, function (_2) {
        switch (_2.label) {
            case 0:
                fullJson = (0, fileSystem_js_1.getPermissionsByNetwork)(network);
                provider = new ethers_1.ethers.providers.JsonRpcProvider(configs_js_1.networkConfigs[network].rpcUrl);
                pools = configs_js_1.networkConfigs[network].pools;
                poolsKeys = Object.keys(pools).map(function (pool) { return pool; });
                i = 0;
                _2.label = 1;
            case 1:
                if (!(i < poolsKeys.length)) return [3 /*break*/, 36];
                poolKey = poolsKeys[i];
                if ((!process.env.TENDERLY || process.env.TENDERLY === 'false') &&
                    poolKey.toLowerCase().indexOf('tenderly') > -1) {
                    return [3 /*break*/, 35];
                }
                pool = pools[poolKey];
                permissionsJson = (0, fileSystem_js_1.getStaticPermissionsJson)(pool.permissionsJson);
                poolPermissions = {};
                admins = {};
                gsmAdmins = {};
                govV3 = {};
                govV3.ggRoles = {};
                if (!(poolKey !== configs_js_1.Pools.GOV_V2 &&
                    poolKey !== configs_js_1.Pools.GOV_V2_TENDERLY &&
                    poolKey !== configs_js_1.Pools.SAFETY_MODULE &&
                    poolKey !== configs_js_1.Pools.SAFETY_MODULE_TENDERLY &&
                    poolKey !== configs_js_1.Pools.V2_MISC_TENDERLY &&
                    poolKey !== configs_js_1.Pools.V2_MISC &&
                    poolKey !== configs_js_1.Pools.TENDERLY &&
                    poolKey !== configs_js_1.Pools.GHO_TENDERLY &&
                    poolKey !== configs_js_1.Pools.GHO &&
                    !pool.aclBlock)) return [3 /*break*/, 4];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n          ------------------------------------\n          "));
                if (!(Object.keys(pool.addressBook).length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, v2Permissions_js_1.resolveV2Modifiers)(pool.addressBook, poolKey === configs_js_1.Pools.V2_TENDERLY ||
                        poolKey === configs_js_1.Pools.V2_AMM_TENDERLY ||
                        poolKey === configs_js_1.Pools.V2_ARC_TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsJson, configs_js_1.Pools[poolKey], Number(network))];
            case 2:
                poolPermissions = _2.sent();
                _2.label = 3;
            case 3: return [3 /*break*/, 34];
            case 4:
                if (!(poolKey === configs_js_1.Pools.GOV_V2 || poolKey === configs_js_1.Pools.GOV_V2_TENDERLY)) return [3 /*break*/, 6];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n          ------------------------------------\n          "));
                return [4 /*yield*/, (0, governancePermissions_js_1.resolveGovV2Modifiers)(pool.addressBook, poolKey === configs_js_1.Pools.GOV_V2_TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsJson)];
            case 5:
                poolPermissions = _2.sent();
                return [3 /*break*/, 34];
            case 6:
                if (!(poolKey === configs_js_1.Pools.SAFETY_MODULE ||
                    poolKey === configs_js_1.Pools.SAFETY_MODULE_TENDERLY)) return [3 /*break*/, 8];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n          ------------------------------------\n          "));
                return [4 /*yield*/, (0, safetyPermissions_js_1.resolveSafetyV2Modifiers)(pool.addressBook, poolKey === configs_js_1.Pools.SAFETY_MODULE_TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsJson)];
            case 7:
                poolPermissions = _2.sent();
                return [3 /*break*/, 34];
            case 8:
                if (!(poolKey === configs_js_1.Pools.V2_MISC ||
                    poolKey === configs_js_1.Pools.V2_MISC_TENDERLY)) return [3 /*break*/, 10];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n          ------------------------------------\n          "));
                return [4 /*yield*/, (0, v2MiscPermissions_js_1.resolveV2MiscModifiers)(pool.addressBook, pool.addresses || {}, poolKey === configs_js_1.Pools.V2_MISC_TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsJson)];
            case 9:
                poolPermissions = _2.sent();
                return [3 /*break*/, 34];
            case 10:
                if (!(poolKey === configs_js_1.Pools.GHO || poolKey === configs_js_1.Pools.GHO_TENDERLY)) return [3 /*break*/, 21];
                fromBlock = void 0;
                gsmBlock = void 0;
                if (!pool.tenderlyBasePool) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, jsonParsers_js_1.overwriteBaseTenderlyPool)(poolKey, network, pool.tenderlyBasePool)];
            case 11:
                _2.sent();
                // get current permissions
                fullJson = (0, fileSystem_js_1.getPermissionsByNetwork)(network);
                fromBlock = pool.tenderlyBlock;
                gsmBlock = pool.tenderlyBlock;
                return [3 /*break*/, 13];
            case 12:
                fromBlock =
                    ((_g = (_f = fullJson[poolKey]) === null || _f === void 0 ? void 0 : _f.roles) === null || _g === void 0 ? void 0 : _g.latestBlockNumber) || pool.ghoBlock;
                _2.label = 13;
            case 13:
                if (!fromBlock) return [3 /*break*/, 20];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n            fromBlock: ").concat(fromBlock, "\n          ------------------------------------\n          "));
                if (!(Object.keys(pool.addressBook).length > 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, (0, adminRoles_js_1.getCurrentRoleAdmins)(provider, (fullJson[poolKey] && ((_j = (_h = fullJson[poolKey]) === null || _h === void 0 ? void 0 : _h.roles) === null || _j === void 0 ? void 0 : _j.role)) ||
                        {}, fromBlock, Number(network), configs_js_1.Pools[poolKey], configs_js_1.ghoRoleNames, pool.addressBook.GHO_TOKEN)];
            case 14:
                admins = _2.sent();
                if (!pool.gsmBlocks) return [3 /*break*/, 18];
                i_1 = 0;
                _2.label = 15;
            case 15:
                if (!(i_1 < Object.keys(pool.gsmBlocks).length)) return [3 /*break*/, 18];
                key = Object.keys(pool.gsmBlocks)[i_1];
                gsmBlock_1 = pool.gsmBlocks[key];
                if (fullJson[poolKey] &&
                    // @ts-ignore
                    Object.keys(fullJson[poolKey].gsmRoles).length > 0 &&
                    !pool.tenderlyBasePool) {
                    gsmBlock_1 =
                        ((_k = fullJson[poolKey].gsmRoles) === null || _k === void 0 ? void 0 : _k[key].latestBlockNumber) || 0;
                }
                _a = gsmAdmins;
                _b = key;
                return [4 /*yield*/, (0, adminRoles_js_1.getCurrentRoleAdmins)(provider, (fullJson[poolKey] &&
                        // @ts-ignore
                        Object.keys(fullJson[poolKey].gsmRoles).length > 0 &&
                        ((_m = (_l = fullJson[poolKey]) === null || _l === void 0 ? void 0 : _l.gsmRoles) === null || _m === void 0 ? void 0 : _m[key].role)) ||
                        {}, gsmBlock_1, Number(network), configs_js_1.Pools[poolKey], configs_js_1.ghoGSMRoleNames, pool.addressBook[key])];
            case 16:
                _a[_b] = _2.sent();
                _2.label = 17;
            case 17:
                i_1++;
                return [3 /*break*/, 15];
            case 18: return [4 /*yield*/, (0, ghoPermissions_js_1.resolveGHOModifiers)(pool.addressBook, poolKey === configs_js_1.Pools.GHO_TENDERLY
                    ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                    : provider, permissionsJson, configs_js_1.Pools[poolKey], Number(network), admins.role, gsmAdmins)];
            case 19:
                poolPermissions = _2.sent();
                _2.label = 20;
            case 20: return [3 /*break*/, 34];
            case 21:
                if (!pool.aclBlock) return [3 /*break*/, 33];
                fromBlock = void 0;
                if (!pool.tenderlyBasePool) return [3 /*break*/, 23];
                return [4 /*yield*/, (0, jsonParsers_js_1.overwriteBaseTenderlyPool)(poolKey, network, pool.tenderlyBasePool)];
            case 22:
                _2.sent();
                // get current permissions
                fullJson = (0, fileSystem_js_1.getPermissionsByNetwork)(network);
                fromBlock = pool.tenderlyBlock;
                return [3 /*break*/, 24];
            case 23:
                fromBlock =
                    ((_p = (_o = fullJson[poolKey]) === null || _o === void 0 ? void 0 : _o.roles) === null || _p === void 0 ? void 0 : _p.latestBlockNumber) || pool.aclBlock;
                _2.label = 24;
            case 24:
                if (!fromBlock) return [3 /*break*/, 32];
                console.log("\n          ------------------------------------\n            network: ".concat(network, "\n            pool: ").concat(poolKey, "\n            fromBlock: ").concat(fromBlock, "\n          ------------------------------------\n          "));
                if (!(Object.keys(pool.addressBook).length > 0)) return [3 /*break*/, 27];
                return [4 /*yield*/, (0, adminRoles_js_1.getCurrentRoleAdmins)(provider, (fullJson[poolKey] && ((_r = (_q = fullJson[poolKey]) === null || _q === void 0 ? void 0 : _q.roles) === null || _r === void 0 ? void 0 : _r.role)) ||
                        {}, fromBlock, Number(network), configs_js_1.Pools[poolKey], configs_js_1.protocolRoleNames, pool.addressBook.ACL_MANAGER)];
            case 25:
                admins = _2.sent();
                return [4 /*yield*/, (0, v3Permissions_js_1.resolveV3Modifiers)(pool.addressBook, poolKey === configs_js_1.Pools.TENDERLY || poolKey === configs_js_1.Pools.V2_TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsJson, configs_js_1.Pools[poolKey], Number(network), admins.role)];
            case 26:
                poolPermissions = _2.sent();
                _2.label = 27;
            case 27:
                if (!(pool.crossChainControllerBlock &&
                    pool.crossChainPermissionsJson &&
                    pool.governanceAddressBook)) return [3 /*break*/, 32];
                cccFromBlock = void 0;
                if (pool.tenderlyBasePool) {
                    cccFromBlock = pool.tenderlyBlock;
                }
                else {
                    cccFromBlock =
                        ((_t = (_s = fullJson[poolKey]) === null || _s === void 0 ? void 0 : _s.govV3) === null || _t === void 0 ? void 0 : _t.latestCCCBlockNumber) ||
                            pool.crossChainControllerBlock;
                }
                if (!cccFromBlock) return [3 /*break*/, 32];
                return [4 /*yield*/, (0, crossChainControllerLogs_js_1.getCCCSendersAndAdapters)(provider, (fullJson[poolKey] && ((_v = (_u = fullJson[poolKey]) === null || _u === void 0 ? void 0 : _u.govV3) === null || _v === void 0 ? void 0 : _v.senders)) || [], cccFromBlock, pool.governanceAddressBook, Number(network), configs_js_1.Pools[poolKey])];
            case 28:
                _c = _2.sent(), senders = _c.senders, latestCCCBlockNumber = _c.latestCCCBlockNumber;
                if (!pool.granularGuardianBlock) return [3 /*break*/, 30];
                ggFromBlock = void 0;
                if (pool.tenderlyBasePool) {
                    ggFromBlock = pool.tenderlyBlock;
                }
                else {
                    ggFromBlock =
                        ((_y = (_x = (_w = fullJson[poolKey]) === null || _w === void 0 ? void 0 : _w.govV3) === null || _x === void 0 ? void 0 : _x.ggRoles) === null || _y === void 0 ? void 0 : _y.latestBlockNumber) ||
                            pool.granularGuardianBlock;
                }
                if (!ggFromBlock) return [3 /*break*/, 30];
                return [4 /*yield*/, (0, adminRoles_js_1.getCurrentRoleAdmins)(provider, (fullJson[poolKey] &&
                        ((_1 = (_0 = (_z = fullJson[poolKey]) === null || _z === void 0 ? void 0 : _z.govV3) === null || _0 === void 0 ? void 0 : _0.ggRoles) === null || _1 === void 0 ? void 0 : _1.role)) ||
                        {}, ggFromBlock, Number(network), configs_js_1.Pools[poolKey], configs_js_1.granularGuardianRoleNames, pool.governanceAddressBook.GRANULAR_GUARDIAN)];
            case 29:
                ggRoles = _2.sent();
                govV3.ggRoles.role = ggRoles.role;
                govV3.ggRoles.latestBlockNumber = ggRoles.latestBlockNumber;
                _2.label = 30;
            case 30:
                permissionsGovV3Json = (0, fileSystem_js_1.getStaticPermissionsJson)(pool.crossChainPermissionsJson);
                _d = govV3;
                return [4 /*yield*/, (0, govV3Permissions_js_1.resolveGovV3Modifiers)(pool.governanceAddressBook, poolKey === configs_js_1.Pools.TENDERLY
                        ? new ethers_1.providers.StaticJsonRpcProvider(pool.tenderlyRpcUrl)
                        : provider, permissionsGovV3Json, Number(network), senders, poolKey === configs_js_1.Pools.TENDERLY, govV3.ggRoles.role || {}, pool.addresses)];
            case 31:
                _d.contracts = _2.sent();
                govV3.senders = senders;
                govV3.latestCCCBlockNumber = latestCCCBlockNumber;
                _2.label = 32;
            case 32: return [3 /*break*/, 34];
            case 33:
                console.log("pool not supported: ".concat(poolKey));
                _2.label = 34;
            case 34:
                if (Object.keys(fullJson).length === 0) {
                    fullJson = (_e = {},
                        _e[poolKey] = {
                            contracts: poolPermissions,
                            roles: admins,
                            gsmRoles: gsmAdmins,
                            govV3: govV3,
                        },
                        _e);
                }
                else {
                    // if (!fullJson[network][poolKey]) {
                    fullJson[poolKey] = {
                        contracts: poolPermissions,
                        roles: admins,
                        gsmRoles: gsmAdmins,
                        govV3: govV3,
                    };
                }
                _2.label = 35;
            case 35:
                i++;
                return [3 /*break*/, 1];
            case 36:
                // save permissions in json object
                console.log("-----------".concat(network, " : ------------------SAVE JSON-----------------------------------"));
                (0, fileSystem_js_1.saveJson)("out/permissions/".concat(network, "-permissions.json"), JSON.stringify(fullJson, null, 2));
                return [2 /*return*/];
        }
    });
}); };
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var networks, permissions, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    networks = Object.keys(configs_js_1.networkConfigs).map(function (network) { return network; });
                    permissions = networks.map(function (network) {
                        return generateNetworkPermissions(network);
                    });
                    return [4 /*yield*/, Promise.allSettled(permissions)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();

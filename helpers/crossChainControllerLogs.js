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
exports.getCCCSendersAndAdapters = exports.parseLog = exports.senderUpdatedABI = void 0;
var ethers_1 = require("ethers");
var configs_js_1 = require("./configs.js");
var eventLogs_js_1 = require("./eventLogs.js");
var limits_js_1 = require("./limits.js");
exports.senderUpdatedABI = [
    'event SenderUpdated(address indexed sender, bool indexed isApproved)',
    // 'event ReceiverBridgeAdaptersUpdated(address indexed bridgeAdapter, bool indexed allowed, uint256 indexed chainId)',
];
var parseLog = function (abi, eventLog) {
    var iface = new ethers_1.ethers.utils.Interface(abi);
    var parsedEvent = iface.parseLog(eventLog);
    return parsedEvent.args;
};
exports.parseLog = parseLog;
var getCCCSendersAndAdapters = function (provider, oldSenders, 
// oldBridgeAdapters: string[],
fromBlock, addressBook, chainId, pool) { return __awaiter(void 0, void 0, void 0, function () {
    var timeout, limit, eventLogs, finalBlock, senderUpdatedTopic0, networkLogs, tenderlyProvider, tenderlyBlock, tenderlyLogs, logs, logs, senders, _i, eventLogs_1, eventLog, _a, sender, isApproved;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                timeout = undefined;
                limit = (0, limits_js_1.getLimit)(chainId);
                eventLogs = [];
                finalBlock = 0;
                senderUpdatedTopic0 = ethers_1.utils.id('SenderUpdated(address,bool)');
                if (!(pool === configs_js_1.Pools.TENDERLY || pool === configs_js_1.Pools.GHO_TENDERLY)) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                        provider: provider,
                        address: addressBook.CROSS_CHAIN_CONTROLLER,
                        fromBlock: fromBlock,
                        logs: [],
                        limit: limit,
                        timeout: timeout,
                        maxBlock: configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyBlock,
                        topic0: senderUpdatedTopic0,
                        chainId: chainId,
                    })];
            case 1:
                networkLogs = _b.sent();
                tenderlyProvider = new ethers_1.providers.StaticJsonRpcProvider(configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyRpcUrl);
                limit = 999;
                timeout = 10000;
                tenderlyBlock = configs_js_1.networkConfigs[Number(chainId)].pools[pool].tenderlyBlock ||
                    networkLogs.finalBlock;
                return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                        provider: tenderlyProvider,
                        address: addressBook.CROSS_CHAIN_CONTROLLER,
                        fromBlock: tenderlyBlock,
                        logs: [],
                        limit: limit,
                        timeout: timeout,
                        tenderly: true,
                        topic0: senderUpdatedTopic0,
                        chainId: chainId,
                    })];
            case 2:
                tenderlyLogs = _b.sent();
                logs = __spreadArray(__spreadArray([], networkLogs.eventLogs, true), tenderlyLogs.eventLogs, true);
                eventLogs = logs;
                finalBlock = networkLogs.finalBlock;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, eventLogs_js_1.getLogs)({
                    provider: provider,
                    address: addressBook.CROSS_CHAIN_CONTROLLER,
                    fromBlock: fromBlock,
                    logs: [],
                    limit: limit,
                    timeout: timeout,
                    topic0: senderUpdatedTopic0,
                    chainId: chainId,
                })];
            case 4:
                logs = _b.sent();
                eventLogs = logs.eventLogs;
                finalBlock = logs.finalBlock;
                _b.label = 5;
            case 5:
                senders = new Set(oldSenders);
                // const bridgeAdapters = new Set<string>(oldBridgeAdapters);
                // save or remove senders
                for (_i = 0, eventLogs_1 = eventLogs; _i < eventLogs_1.length; _i++) {
                    eventLog = eventLogs_1[_i];
                    if (eventLog.topics[0] === senderUpdatedTopic0) {
                        _a = (0, exports.parseLog)(exports.senderUpdatedABI, eventLog), sender = _a.sender, isApproved = _a.isApproved;
                        // console.log(`sender
                        //   topic0: ${eventLog.topics[0]}
                        //   sender : ${sender}
                        //   isApproved: ${isApproved}
                        // `);
                        if (isApproved) {
                            senders.add(sender);
                        }
                        else {
                            senders.delete(sender);
                        }
                    }
                    else {
                        console.error(new Error('some error parsing logs'));
                        return [2 /*return*/, {
                                senders: Array.from(senders),
                                // bridgeAdapters: Array.from(bridgeAdapters),
                                latestCCCBlockNumber: finalBlock,
                            }];
                    }
                }
                return [2 /*return*/, {
                        senders: Array.from(senders),
                        // bridgeAdapters: Array.from(bridgeAdapters),
                        latestCCCBlockNumber: finalBlock,
                    }];
        }
    });
}); };
exports.getCCCSendersAndAdapters = getCCCSendersAndAdapters;

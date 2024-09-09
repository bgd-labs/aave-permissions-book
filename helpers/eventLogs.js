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
exports.getLogs = void 0;
var delay = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
var MAX_RETRIES = 5;
var getLogs = function (_a) {
    var provider = _a.provider, address = _a.address, fromBlock = _a.fromBlock, logs = _a.logs, limit = _a.limit, timeout = _a.timeout, maxBlock = _a.maxBlock, retries = _a.retries, topic0 = _a.topic0, topic1 = _a.topic1, topic2 = _a.topic2, topic3 = _a.topic3, tenderly = _a.tenderly, chainId = _a.chainId;
    return __awaiter(void 0, void 0, void 0, function () {
        var currentBlock, toBlock, topics, logEventFilter, logEvents, error_1, midBlock, arr1, arr2, allLogs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, provider.getBlockNumber()];
                case 1:
                    currentBlock = _b.sent();
                    // TODO: for now i have put a margin, but should maybe be comparision between from and current
                    if (!tenderly && fromBlock + 10 >= (maxBlock !== null && maxBlock !== void 0 ? maxBlock : currentBlock)) {
                        return [2 /*return*/, { eventLogs: logs, finalBlock: fromBlock }];
                    }
                    else if (tenderly && fromBlock >= (maxBlock !== null && maxBlock !== void 0 ? maxBlock : currentBlock)) {
                        return [2 /*return*/, { eventLogs: logs, finalBlock: fromBlock }];
                    }
                    toBlock = 0;
                    if (limit) {
                        if (maxBlock) {
                            toBlock = fromBlock + limit > maxBlock ? maxBlock : fromBlock + limit;
                        }
                        else {
                            toBlock =
                                fromBlock + limit > currentBlock ? currentBlock : fromBlock + limit;
                        }
                    }
                    else {
                        if (maxBlock) {
                            toBlock = currentBlock > maxBlock ? maxBlock : currentBlock;
                        }
                        else {
                            toBlock = currentBlock;
                        }
                    }
                    topics = [];
                    if (topic0) {
                        topics.push(topic0);
                    }
                    if (topic1) {
                        topics.push(topic1);
                    }
                    if (topic2) {
                        topics.push(topic2);
                    }
                    if (topic3) {
                        topics.push(topic3);
                    }
                    logEventFilter = {
                        address: address,
                        topics: topics,
                        fromBlock: fromBlock,
                        toBlock: toBlock,
                    };
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 15]);
                    return [4 /*yield*/, provider.getLogs(logEventFilter)];
                case 3:
                    logEvents = _b.sent();
                    logs.push.apply(logs, logEvents);
                    console.log("".concat(chainId ? chainId : '', " | ").concat(tenderly ? 'tenderly' : '', " | from: ").concat(fromBlock, " to: ").concat(toBlock, " logs: ").concat(logEvents.length));
                    return [4 /*yield*/, (0, exports.getLogs)({
                            provider: provider,
                            address: address,
                            fromBlock: toBlock,
                            logs: logs,
                            limit: limit,
                            timeout: timeout,
                            maxBlock: maxBlock,
                            retries: 0,
                            topic0: topic0,
                            topic1: topic1,
                            topic2: topic2,
                            topic3: topic3,
                            chainId: chainId,
                        })];
                case 4: return [2 /*return*/, _b.sent()];
                case 5:
                    error_1 = _b.sent();
                    if (!(!retries || retries < MAX_RETRIES)) return [3 /*break*/, 13];
                    console.error("".concat(chainId ? chainId : '', " | Error => retry: ").concat(retries));
                    if (!(error_1.code === 'TIMEOUT')) return [3 /*break*/, 9];
                    if (!timeout) return [3 /*break*/, 7];
                    console.log("".concat(chainId ? chainId : '', " | awaiting tiemout ").concat(timeout));
                    return [4 /*yield*/, delay(timeout)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [4 /*yield*/, (0, exports.getLogs)({
                        provider: provider,
                        address: address,
                        fromBlock: toBlock,
                        logs: logs,
                        limit: limit,
                        timeout: timeout,
                        maxBlock: maxBlock,
                        retries: (retries !== null && retries !== void 0 ? retries : 0) + 1,
                        topic0: topic0,
                        topic1: topic1,
                        topic2: topic2,
                        topic3: topic3,
                        chainId: chainId,
                    })];
                case 8: return [2 /*return*/, _b.sent()];
                case 9:
                    console.log("".concat(chainId ? chainId : '', " | To many blocks ").concat(error_1));
                    midBlock = (fromBlock + toBlock) >> 1;
                    return [4 /*yield*/, (0, exports.getLogs)({
                            provider: provider,
                            address: address,
                            fromBlock: fromBlock,
                            logs: [],
                            limit: limit,
                            timeout: timeout,
                            maxBlock: midBlock,
                            retries: (retries !== null && retries !== void 0 ? retries : 0) + 1,
                            topic0: topic0,
                            topic1: topic1,
                            topic2: topic2,
                            topic3: topic3,
                            chainId: chainId,
                        })];
                case 10:
                    arr1 = _b.sent();
                    return [4 /*yield*/, (0, exports.getLogs)({
                            provider: provider,
                            address: address,
                            fromBlock: midBlock + 1,
                            logs: [],
                            limit: limit,
                            timeout: timeout,
                            maxBlock: toBlock,
                            retries: (retries !== null && retries !== void 0 ? retries : 0) + 1,
                            topic0: topic0,
                            topic1: topic1,
                            topic2: topic2,
                            topic3: topic3,
                            chainId: chainId,
                        })];
                case 11:
                    arr2 = _b.sent();
                    allLogs = __spreadArray(__spreadArray(__spreadArray([], logs, true), arr1.eventLogs, true), arr2.eventLogs, true);
                    return [2 /*return*/, { eventLogs: allLogs, finalBlock: toBlock }];
                case 12: return [3 /*break*/, 14];
                case 13:
                    // @ts-ignore
                    console.log("".concat(chainId ? chainId : '', " | ").concat(error_1.code));
                    return [2 /*return*/, { eventLogs: logs, finalBlock: fromBlock }];
                case 14: return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
};
exports.getLogs = getLogs;

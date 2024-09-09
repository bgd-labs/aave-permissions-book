"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLimit = void 0;
var contract_helpers_1 = require("@aave/contract-helpers");
var getLimit = function (chainId) {
    var limit = undefined;
    // if (chainId === ChainId.avalanche) {
    //   limit = 3000;
    // }
    if (chainId === contract_helpers_1.ChainId.harmony) {
        limit = 1000;
    }
    else if (chainId === contract_helpers_1.ChainId.fantom) {
        limit = 99999;
    }
    // else if (chainId === ChainId.metis_andromeda) {
    //   limit = 3000;
    // } else if (Number(chainId) === 8453) {
    //   limit = 1000;
    // } else if (Number(chainId) === 56) {
    //   limit = 10000;
    // } else if (Number(chainId) === 1101) {
    //   limit = 9999;
    // }
    return limit;
};
exports.getLimit = getLimit;

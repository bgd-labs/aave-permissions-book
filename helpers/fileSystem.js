"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticPermissionsJson = exports.getPermissionsByNetwork = exports.getAllPermissionsJson = exports.saveJson = void 0;
var fs = require("fs");
var saveJson = function (filePath, stringifiedJson) {
    fs.writeFileSync(filePath, stringifiedJson);
};
exports.saveJson = saveJson;
var getAllPermissionsJson = function () {
    try {
        var file = fs.readFileSync('out/aavePermissionList.json');
        // @ts-ignore
        return JSON.parse(file);
    }
    catch (error) {
        return {};
    }
};
exports.getAllPermissionsJson = getAllPermissionsJson;
var getPermissionsByNetwork = function (network) {
    try {
        var file = fs.readFileSync("out/permissions/".concat(network, "-permissions.json"));
        // @ts-ignore
        return JSON.parse(file);
    }
    catch (error) {
        return {};
    }
};
exports.getPermissionsByNetwork = getPermissionsByNetwork;
var getStaticPermissionsJson = function (path) {
    try {
        var file = fs.readFileSync(path);
        // @ts-ignore
        return JSON.parse(file);
    }
    catch (error) {
        console.error(new Error("unable to fetch ".concat(path, " with error: ").concat(error)));
        return [];
    }
};
exports.getStaticPermissionsJson = getStaticPermissionsJson;

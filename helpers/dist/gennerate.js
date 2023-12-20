"use strict";
exports.__esModule = true;
exports.generateRandomNumber = exports.generateRandomString = void 0;
// Random String
exports.generateRandomString = function (length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
// Random Number
exports.generateRandomNumber = function (length) {
    var characters = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    fullName: String,
    email: String,
    password: String,
    token: String,
    deleted: {
        type: Boolean,
        "default": false
    },
    deletedAt: Date
}, {
    timestamps: true
});
var User = mongoose_1["default"].model("User", userSchema, "users");
exports["default"] = User;

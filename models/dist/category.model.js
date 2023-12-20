"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1["default"].Schema({
    title: String,
    avatar: String,
    deleted: {
        type: Boolean,
        "default": false
    },
    deletedAt: Date
}, {
    timestamps: true
});
var Category = mongoose_1["default"].model("Category", categorySchema, "categories");
exports["default"] = Category;

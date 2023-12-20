"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var articleSchema = new mongoose_1["default"].Schema({
    title: String,
    avatar: String,
    description: String,
    categoryId: String,
    deleted: {
        type: Boolean,
        "default": false
    },
    deletedAt: Date
}, {
    timestamps: true
});
var Article = mongoose_1["default"].model("Article", articleSchema, "articles");
exports["default"] = Article;

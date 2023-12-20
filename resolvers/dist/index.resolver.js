"use strict";
exports.__esModule = true;
exports.resolvers = void 0;
var article_resolver_1 = require("./article.resolver");
var category_resolver_1 = require("./category.resolver");
exports.resolvers = [
    article_resolver_1.resolversArticle,
    category_resolver_1.resolversCategory
];

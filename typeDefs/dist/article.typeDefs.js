"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.typeDefsArticle = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsArticle = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Article {\n    id: ID,\n    title: String,\n    avatar: String,\n    description: String,\n    category: Category\n  }\n\n  type Query {\n    getListArticle(\n      sortKey: String,\n      sortValue: String\n    ): [Article],\n    getArticle(id: ID): Article,\n  }\n  input ArticleInput {\n    title: String,\n    avatar: String,\n    description: String,\n    categoryId: String\n  }\n\n  type Mutation {\n    createArticle(article: ArticleInput): Article,\n    updateArticle(id: ID, article: ArticleInput): Article,\n    deleteArticle(id: ID): String,\n  }\n"], ["\n  type Article {\n    id: ID,\n    title: String,\n    avatar: String,\n    description: String,\n    category: Category\n  }\n\n  type Query {\n    getListArticle(\n      sortKey: String,\n      sortValue: String\n    ): [Article],\n    getArticle(id: ID): Article,\n  }\n  input ArticleInput {\n    title: String,\n    avatar: String,\n    description: String,\n    categoryId: String\n  }\n\n  type Mutation {\n    createArticle(article: ArticleInput): Article,\n    updateArticle(id: ID, article: ArticleInput): Article,\n    deleteArticle(id: ID): String,\n  }\n"])));
var templateObject_1;

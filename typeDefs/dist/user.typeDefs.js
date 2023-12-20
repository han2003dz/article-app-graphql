"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.typeDefsUser = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsUser = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID\n    fullName: String\n    email: String\n    token: String\n    code: Int\n    message: String\n  }\n  input RegisterUserInput {\n    fullName: String\n    email: String\n    password: String\n  }\n\n  input LoginUserInput {\n    email: String\n    password: String\n  }\n\n  type Mutation {\n    registerUser(user: RegisterUserInput): User\n    loginUser(user: LoginUserInput): User\n  }\n"], ["\n  type User {\n    id: ID\n    fullName: String\n    email: String\n    token: String\n    code: Int\n    message: String\n  }\n  input RegisterUserInput {\n    fullName: String\n    email: String\n    password: String\n  }\n\n  input LoginUserInput {\n    email: String\n    password: String\n  }\n\n  type Mutation {\n    registerUser(user: RegisterUserInput): User\n    loginUser(user: LoginUserInput): User\n  }\n"])));
var templateObject_1;

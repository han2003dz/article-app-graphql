"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
  }
  type Query {
    hello: String
    getListArticle: [Article]
    getArticle(id: ID): Article
  }

  input ArticleInput {
    title: String
    avatar: String
    description: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
  }
`;

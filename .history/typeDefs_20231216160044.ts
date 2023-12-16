import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    i
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    id: ID,
    title: String,
    avatar: String,
    d
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

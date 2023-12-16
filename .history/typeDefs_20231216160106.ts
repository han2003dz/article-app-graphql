import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    id: 
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

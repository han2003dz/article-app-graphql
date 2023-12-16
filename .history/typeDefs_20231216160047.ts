import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    id: ID,
    
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

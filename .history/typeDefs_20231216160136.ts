import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type Article {
    id: ID,
    title: 
  }
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

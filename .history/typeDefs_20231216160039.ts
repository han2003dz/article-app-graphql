import { gql } from "apollo-server-express";
export const typeDefs = gql`
  typ
  type Query {
    hello: String,
    getListArticle: [],
  }
`;

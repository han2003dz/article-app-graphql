import { gql } from "apollo-server-express";
export const typeDefs = gql`
  
  type Article {
    id: ID,
    title: String,
    avatar: String,
    description: String
  }
  type Query {
    hello: String,
    getListArticle: [Article],
    getArticle(id: ID): Article
  }


  
  type Mutation {
    createArticle(article: ArticleInput)
  }
`;

import { gql } from "apollo-server-express";

export const typeDefsArticle = gql`
  type Article {
    id: ID,
    title: String,
    avatar: String,
    description: String,
    category: Category
  }

  type Query {
    getListArticle: [Article],
    getArticle(id: ID): Article,
  }
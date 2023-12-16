import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer, gql } from "apollo-server-express";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

//Graphql
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.start()



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

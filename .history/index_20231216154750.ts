import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer } from "apollo-server-express";



const StartServer = async () => {
  dotenv.config();

  database.connect();

  const app: Express = express();
  const port: number | string = process.env.PORT || 3000;

  //Graphql
  

  const resolvers = {
    Query: {
      hello: () => {
        return "Hello world";
      },
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

StartServer();

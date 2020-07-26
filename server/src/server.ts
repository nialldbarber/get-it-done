import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './schema/resolvers';
import { typeDefs } from './schema/type-defs';
import { runDb } from './db';

(function startServer(): void {
  runDb();
  const app = express();
  const port = process.env.PORT || 4000;

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app });

  app.use(cors(), bodyParser.json());

  app.listen(port, () =>
    console.log(
      `🚀  Schema is ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
})();

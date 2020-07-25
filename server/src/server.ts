const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./schema/resolvers');
const { typeDefs } = require('./schema/type-defs');
const { runDb } = require('./db');

(function startServer() {
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

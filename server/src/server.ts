const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server');
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

  server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
})();

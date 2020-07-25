const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    name: String!
    todos: [Todo]
  }

  type Todo {
    id: ID!
    content: String!
    createdAt: String!
    deadline: String!
    author: User!
  }

  type Query {
    getTodo(id: ID!): Todo
    getAllTodos(id: ID!): [Todo]
  }

  input PublishTodoInput {
    content: String!
  }

  type Mutation {
    publishTodo(input: PublishTodoInput!): Todo!
  }
`;

export { typeDefs };

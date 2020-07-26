const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getTodo(id: ID!): Todo
    getAllTodos: [Todo]
    greeting: String
  }

  type Mutation {
    addTodo(input: AddTodoInput!): Todo!
    removeTodo(_id: ID!): String!
    registerUser(registerInput: RegisterInput): User
    userLogin(username: String!, password: String!): User!
  }

  type User {
    id: ID
    username: String
    email: String
    todos: [Todo]
  }

  type Todo {
    id: ID!
    content: String!
    createdAt: String!
    deadline: String!
    author: User!
  }

  input AddTodoInput {
    content: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;

export { typeDefs };

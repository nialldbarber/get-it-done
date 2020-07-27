import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllTodos(id: ID!): [Todo]
  }

  type Mutation {
    addTodo(content: String!, deadline: String!): Todo
    removeTodo(_id: ID!): String
    registerUser(registerInput: RegisterInput): User
    userLogin(email: String!, password: String!): User
  }

  type User {
    id: ID
    username: String
    email: String
    todos: [Todo]
  }

  type Todo {
    content: String!
    createdAt: String!
    deadline: String!
    username: String!
    email: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;

export { typeDefs };

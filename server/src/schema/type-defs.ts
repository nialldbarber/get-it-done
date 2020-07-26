import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllTodos(id: ID!): [Todo]
  }

  type Mutation {
    addTodo(input: AddTodoInput): Todo
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
    id: ID!
    content: String!
    createdAt: String!
    deadline: String!
    author: User!
  }

  input AddTodoInput {
    content: String!
    deadline: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
`;

export { typeDefs };

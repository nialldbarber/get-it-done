import { UserInputError } from 'apollo-server-express';
import { Todos } from '../../models/Todo';
import { checkValidAuth } from '../../utils/auth/user';
import { validateTodoInput } from '../../utils/validation/todo';

const todoResolver = {
  // Queries
  Query: {},
  // get all todos

  // Mutations
  Mutation: {
    addTodo: async (_: any, { input: { content } }, context) => {
      // Check if user has token, so they can create a todo
      const user = checkValidAuth(context);
      const { valid, errors } = validateTodoInput(content);

      if (!valid) {
        console.log('NOPE!');
        throw new UserInputError('Errors', { errors });
      }
    },

    // delete a todo
    // must be authenticated
  },
};

export { todoResolver };

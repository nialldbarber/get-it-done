import { UserInputError } from 'apollo-server-express';
import { Todos } from '../../models/Todo';
import { checkValidAuth } from '../../utils/auth/user';
import { validateInput } from '../../utils/validation';

const todoResolver = {
  // Queries
  Query: {},
  // get all todos

  // Mutations
  Mutation: {
    addTodo: async (_: any, { input: { content } }, context) => {
      // Check if user has token, so they can create a todo
      const user = checkValidAuth(context);

      const { valid, errors } = validateInput({
        [content]: 'Please add an item!',
      });

      if (!valid) {
        console.log('It is NOT valid');
        throw new UserInputError('Errors', { errors });
      } else {
        console.log('It is valid');
      }
    },

    // delete a todo
    // must be authenticated
  },
};

export { todoResolver };

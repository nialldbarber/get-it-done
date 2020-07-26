import { UserInputError } from 'apollo-server-express';
import { Todo } from '../../models/Todo';
import { checkValidAuth } from '../../utils/auth/user';
import { validateTodoInput } from '../../utils/validation/todo';

const todoResolver = {
  // Queries
  Query: {},
  // get all todos

  // Mutations
  Mutation: {
    addTodo: async (_: any, { input: { content, deadline } }, context) => {
      // Check if user has token, so they can create a todo
      const user = checkValidAuth(context);
      // Validate the registration attempt
      const { valid, errors } = validateTodoInput(content);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // Create todo
      const newTodo = new Todo({
        id: user.id,
        content,
        createdAt: new Date().toISOString(),
        deadline,
        author: user.username,
      });

      console.log(newTodo);
    },

    // delete a todo
    // must be authenticated
  },
};

export { todoResolver };

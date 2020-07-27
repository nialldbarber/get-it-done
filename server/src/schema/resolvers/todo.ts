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
    addTodo: async (
      _: any,
      { input: { content, deadline, author } },
      context
    ) => {
      // Check if user has token, so they can create a todo
      const user = checkValidAuth(context);
      // Validate the registration attempt
      const { valid, errors } = validateTodoInput(content);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // Create todo
      const newTodo = new Todo({
        _id: user._id,
        content,
        createdAt: new Date().toISOString(),
        deadline,
        author,
      });

      console.log(newTodo);
    },

    // delete a todo
    // must be authenticated
  },
};

export { todoResolver };

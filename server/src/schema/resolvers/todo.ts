import { UserInputError } from 'apollo-server-express';
import { Todo } from '../../models/Todo';
import { User } from '../../models/User';
import { checkValidAuth } from '../../utils/auth/user';
import { validateTodoInput } from '../../utils/validation/todo';

const todoResolver = {
  // Queries
  Query: {},
  // get all todos

  // Mutations
  Mutation: {
    addTodo: async (_: any, { content, deadline }, context) => {
      // Check if user has token, so they can create a todo
      const user = checkValidAuth(context);
      // Validate the registration attempt
      const { valid, errors } = validateTodoInput(content);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // Create todo
      const newTodo = new Todo({
        content,
        deadline,
        username: user.username,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      // Find user by email & add todo to their schema
      const currentUser = await User.findOne({ email: user.email });
      currentUser?.todos.unshift(newTodo);

      await currentUser.save();
      await newTodo.save();

      return newTodo;
    },

    // delete a todo
    // must be authenticated
  },
};

export { todoResolver };

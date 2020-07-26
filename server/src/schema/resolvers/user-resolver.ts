import { UserInputError } from 'apollo-server-express';
import { hash, compare } from 'bcryptjs';
import { User } from '../../models/User';
import { validateRegisterInput } from '../../utils/validation/user';
import { generateUserToken } from '../../utils/validation/token';

const userResolver = {
  Query: {
    greeting: async () => 'hello world!',
  },
  Mutation: {
    registerUser: async (
      _: any,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      // Validate the registration attempt
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      // If attempt fails, throw error
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Check if user exists in db
      const userLookUp = await User.findOne({ email });

      if (userLookUp) {
        throw new UserInputError('Email already exists', {
          errors: {
            username: 'This email already exists',
          },
        });
      }

      // Hash password so I can't see nuffin! 👀
      password = await hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      // Save new user and assign them a json web token
      const registeredUser = await newUser.save();
      const token = generateUserToken(registeredUser);

      return {
        ...registeredUser._doc,
        id: registeredUser._id,
        token,
      };
    },
  },
};

export { userResolver };

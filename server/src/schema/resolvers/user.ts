import { UserInputError } from 'apollo-server-express';
import { hash, compare } from 'bcryptjs';
import { User } from '../../models/User';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../../utils/validation/user';
import { generateUserToken } from '../../utils/validation/token';

const userResolver = {
  Query: {},
  Mutation: {
    userLogin: async (_: any, { email, password }) => {
      const { valid, errors } = validateLoginInput(email, password);

      // Validate login attempt
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Check if user exists in db
      const user = await User.findOne({ email });

      // If they don't, throw error
      if (!user) {
        const error: string = 'User not found';
        errors.general = error;
        throw new UserInputError(error, { errors });
      }

      // If they exists, match password against hashed one
      const match = await compare(password, user.password);

      // If not, throw anuva error!
      if (!match) {
        const error: string = 'Email or password is incorrect';
        errors.general = error;
        throw new UserInputError(error, { errors });
      }

      // But if they do exist, give em a nice lil token 🏅
      const token = generateUserToken(user);
      console.log(token);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
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
        const error: string = 'Email already exists';
        throw new UserInputError(error, {
          errors: { username: error },
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

      // Save new user and assign them a token
      const registeredUser = await newUser.save();
      const token = generateUserToken(registeredUser);

      console.log(newUser);
      console.log(token);

      return {
        ...registeredUser._doc,
        id: registeredUser._id,
        token,
      };
    },
  },
};

export { userResolver };

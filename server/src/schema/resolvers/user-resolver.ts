import { User } from '../../models/User';

const userResolver = {
  Query: {
    greeting: async () => 'hello world!',
  },
  Mutation: {
    registerUser: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      console.log(newUser);
      const res = await newUser.save();

      return res;
    },
  },
};

export { userResolver };

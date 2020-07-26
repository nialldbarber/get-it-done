import { userResolver } from './user';
import { todoResolver } from './todo';

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...todoResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...todoResolver.Mutation,
  },
};

export { resolvers };

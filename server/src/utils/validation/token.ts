import { sign } from 'jsonwebtoken';
import { IUser } from '../../models/User';

function generateUserToken(user: IUser) {
  return sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

export { generateUserToken };

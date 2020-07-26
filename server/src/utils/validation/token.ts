import { sign } from 'jsonwebtoken';

function generateUserToken(user) {
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

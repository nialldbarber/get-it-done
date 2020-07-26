import { regEx } from '../../constants/user';

interface IError {
  [key: string]: string;
}

function validateRegisterInput(
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  const errors = <IError>{};

  if (username.trim() === '') {
    errors.username = 'Username must not be empty';
  }

  if (email.trim() === '') {
    errors.email = 'Email must not be empty';
  } else {
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address';
    }
  }

  if (password === '') {
    errors.password = 'Password must not empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  } else if (password.length < 8) {
    errors.password = 'Password must be more than 8 characters';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export { validateRegisterInput };

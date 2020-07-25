import { title } from 'process';
import React, { FC } from 'react';

interface ButtonProps {
  text?: string;
  action?: () => void;
}

const Button: FC<ButtonProps> = ({ text, action }) => {
  return (
    <button onClick={action}>
      <>
        <p>{text}</p>
      </>
    </button>
  );
};

export default Button;

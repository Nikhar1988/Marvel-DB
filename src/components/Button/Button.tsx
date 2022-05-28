import { FC } from 'react';

import { ButtonProps } from './Button.props';
import './Button.scss';

const Button:FC<ButtonProps> = ({title, className, ...props}):JSX.Element => {
  return (
    <button
      className="button button__main button__long"
      {...props}
    >
      <div className="inner">{title}</div>
    </button>
  );
};

export default Button;
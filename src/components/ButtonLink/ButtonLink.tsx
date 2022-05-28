import { FC } from 'react';
import cn from 'classnames';

import { ButtonLinkProps } from './ButtonLink.props';

import './ButtonLink.scss';


const ButtonLink:FC<ButtonLinkProps> = ({color, title, className, ...props}):JSX.Element => {
  return (
    <a
      className={cn('button', className, {
        'button__main':color === 'red',
        'button__secondary':color === 'gray',
      })}
      {...props}
    >
                 
      <div className="inner">{title}</div>
    </a>
  );
};

export default ButtonLink;
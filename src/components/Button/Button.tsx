import { FC } from 'react';
import { ButtonProps } from './Button.props';
import './Button.scss';
import cn from 'classnames';

const Button:FC<ButtonProps> = ({color, title, className, ...props}):JSX.Element => {
    return (
            <a
                className={cn('button', className, {
                    'button__main':color === 'red',
                    'button__secondary':color === 'gray',
                })}
                {...props}
                >
                 
                <div className='inner'>{title}</div>
            </a>
  )
}

export default Button;
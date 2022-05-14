import cn from 'classnames'
import {FC } from 'react'
import { CharItemProps } from './CharItem.props'
import './CharItem.scss';

const CharItem:FC<CharItemProps> = ({name, src, selected, ...props}) => {
  return (
    <li 
        className={cn('char__item',{
            'char__item_selected':selected 
        })}
        {...props}
    >
        <img src={src} alt={name}/>
        <div className="char__name">{name}</div>
    </li>
  )
}

export default CharItem;
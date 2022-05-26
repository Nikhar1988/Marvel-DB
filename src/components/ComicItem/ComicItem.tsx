import React, { FC } from 'react'
import { ComicItemProps } from './ComicItem.props';
import './ComicItem.scss'

const ComicItem:FC<ComicItemProps> = ({title, src, selected, liRef, comicId, price, ...props}) => {
  return (
    <li className="comics__item"
    {...props}
    >
        <a href="#">
            <img src={src} alt={title} className="comics__item-img"/>
            <div className="comics__item-name">{title}</div>
            <div className="comics__item-price">{price}$</div>
        </a>
    </li>
  )
}

export default ComicItem;
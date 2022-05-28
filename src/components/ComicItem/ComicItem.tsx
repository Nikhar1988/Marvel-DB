import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ComicItemProps } from './ComicItem.props';
import './ComicItem.scss';

const ComicItem:FC<ComicItemProps> = ({title, src, liRef, comicId, price,  ...props}) => {
  return (
    <li className="comics__item"
      {...props}
    >
      <Link to={`/comics/${comicId}`}>
        <img src={src} alt={title} className="comics__item-img"/>
        <div className="comics__item-name">{title}</div>
        <div className="comics__item-price">{price}$</div>
      </Link>
    </li>
  );
};

export default ComicItem;
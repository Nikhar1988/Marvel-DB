import cn from 'classnames';
import {FC } from 'react';

import { CharItemProps } from './CharItem.props';

import './CharItem.scss';
import CSS from 'csstype';

const CharItem:FC<CharItemProps> = ({name, src, selected, charId, imageNotFound, liRef, ...props}) => {
  let imgStyle: CSS.Properties = {'objectFit' : 'cover'};
  if(imageNotFound === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'unset'};
  }

  

  return (
    <li 
      className={cn('char__item', {
        'char__item_selected':selected, 
      })}
      {...props}
      ref={liRef}
    >
      <img src={src} alt={name} style={imgStyle} />
      <div className="char__name">{name}</div>
    </li>
  );
};

export default CharItem;
import './CharInfo.scss';
import { FC, useEffect, useState } from 'react';

import CSS from 'csstype';

import useMarvelService from '../../services/MarvelService';
import { Char } from '../RandomChar/RandomChar.types';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import { ComicsItem } from '../../services/types/character';
import Skeleton from '../Skeleton/Skeleton';
import ButtonLink from '../ButtonLink/ButtonLink';

import { CharInfoProps, ViewProps } from './CharInfo.props';

const CharInfo:FC<CharInfoProps> =({charId}) => {
    
  const [char, setChar] = useState<Char>({} as Char);
    
  const {error, loading, getCharacter, clearError} = useMarvelService();
 
  useEffect(()=> {
    if(charId === 0) {
      return;
    }
         
    updateChar(charId);
  },[charId]);
 
  const onCharLoaded = (char: Char ) => {
    setChar(char);
  };
 
  const updateChar = (charId: number  ) => {
    clearError();
    getCharacter(charId) 
      .then(onCharLoaded);             
  };

  const comicsLoader = (arr:Array<ComicsItem> = []) => {
    const shortArr = arr.slice(10);
    const items = shortArr.map((item,i) => {
      return <li 
        className="char__comics-item"
        key={i}
      >
        {item.name}
      </li>;
    });
    return items;
  };
        
  const viewComics = comicsLoader(char.comics); 
        

  const viewContent = loading ? <Spinner/> : 
    error ? <Error/> : charId === 0 ? <Skeleton/> : 
    <View char={char} comicsList={viewComics}/>;

        
        
  return (
    <div className="char__info">
      {viewContent}
    </div>
  );
       
};

const View:FC<ViewProps> = (props) => {
    
  let {char:{name, description, homepage, thumbnail, wiki  }, comicsList} = props;

  let imgStyle: CSS.Properties = {'objectFit' : 'cover'};
  if(thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'contain'};
  }
  if(description === '') {
    description = 'There is no description for this character';
  } 
        
  return ( 
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle}/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <ButtonLink color="red" title="homepage" href={homepage}  />
            <ButtonLink color="gray" title="wiki" href={wiki}/>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {!description ? 'There is no description for this character': description }
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {!comicsList[0] ? 'There is no comics': comicsList}
      </ul>
    </>
        
  );
};

export default CharInfo;
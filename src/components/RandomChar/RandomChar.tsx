import './RandomChar.scss';
import CSS from 'csstype';

import { useEffect, useState } from 'react';

import mjolnir from '../../resources/img/mjolnir.png';
import ButtonLink from '../ButtonLink/ButtonLink';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

import { Char } from './RandomChar.types';

const RandomChar = () => {
    
  const [char, setChar] = useState<Char>({} as Char);
    
  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(()=> {
    updateChar();
    const timerId: NodeJS.Timeout = setInterval(() => updateChar(), 600000);
    return ()=> {
      clearInterval(timerId);
    };    
  },[]);

  const onCharLoaded = (char: Char ) => {
    setChar(char);
  };
    
    

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400-1011000)+1011000);
    getCharacter(id) 
      .then(onCharLoaded);
            
        
  };
        
  const {name, description = '', homepage, thumbnail, wiki} = char;
  const viewDescription = description === '' ? 'There is no description for this character' 
    : description.length > 170 ? description.slice(0, 170) + '...' : null;
        
  const imageNotFound = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  const objFitStyles: CSS.Properties = {objectFit: 'contain'}; 
  const viewThumbnail = thumbnail === imageNotFound ?  objFitStyles : {};
        
  const viewContent = loading ? <Spinner/> : 
    error ? <Error/> : 
    <div className="randomchar__block">
      <img 
        style={viewThumbnail}
        src={thumbnail} 
        alt={name} 
        className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">
          {name}
        </p>
        <p className="randomchar__descr">
          {viewDescription}
        </p>
        <div className="randomchar__btns">
          <ButtonLink color="red" title="homepage" href={homepage}/>
          <ButtonLink color="gray" title="wiki" href={wiki}/>
        </div>
      </div>
    </div>;                 

  return (
    <div className="randomchar">
      {viewContent}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!<br/>
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">
          Or choose another one
        </p>
        <button 
          className="button button__main"
          onClick={updateChar}
        >
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
      </div>
    </div>
  );   
};

export default RandomChar;
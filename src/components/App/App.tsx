import React, { FC } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Button from '../Button/Button';
import CharInfo from '../CharInfo/CharInfo';
import CharList from '../CharList/CharLis';
import RandomChar from '../RandomChar/RandomChar';
import './App.scss';

import decoration from '../../resources/img/vision.png';
import MarvelService from '../../services/MarvelService';

const App:FC<{}>  = () => {
  
    const primer = new MarvelService();
    const dataMarvel = primer.getCharacter(1011052);
    dataMarvel.then(i => console.log(i.data.results));
    

  return (
    <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}


export default App;

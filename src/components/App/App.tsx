import { FC, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader';
import CharInfo from '../CharInfo/CharInfo';
import RandomChar from '../RandomChar/RandomChar';
import './App.scss';
import CharList from '../CharList/CharList' 

import decoration from '../../resources/img/vision.png';
 
import ErrorBoundry from '../ErrorBoumdry/ErrorBoumdry';
import AppBanner from '../AppBanner/AppBanner';
import ComicsList from '../ComicsList/ComicsList';

const App:FC =() => {
   
  
  const [idChar, setIdChar] = useState<number >(0)
  
  const updateIdCard = (id:number) => {
    setIdChar(id)
  }

    
    return (
       <Router>
            <div className="app">
                <AppHeader/>
                <main>
                   <Switch>
                    <Route exact path="/">
                            <ErrorBoundry>
                                <RandomChar/>
                            </ErrorBoundry>
                            
                            <div className="char__content">
                                <ErrorBoundry>
                                    <CharList 
                                        updateIdCard = {updateIdCard}
                                        idChar={idChar}    
                                    />

                                </ErrorBoundry>
                                
                                <ErrorBoundry>
                                    <CharInfo charId={idChar}/>
                                </ErrorBoundry>
                                
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision"/>
                        </Route>
                        <Route exact path="/comics">
                            <AppBanner/>
                                <ComicsList 
                                    updateIdCard = {updateIdCard}
                                    idComic={idChar} 
                                />
                        </Route>
                   </Switch>
                </main>
            </div>
       </Router>
        )
  
    
    

 
}


export default App;

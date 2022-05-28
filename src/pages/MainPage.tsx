 
import { useState } from 'react';

import CharInfo from '../components/CharInfo/CharInfo';
import CharList from '../components/CharList/CharList';
import ErrorBoundry from '../components/ErrorBoumdry/ErrorBoumdry';
import RandomChar from '../components/RandomChar/RandomChar';
import decoration from '../resources/img/vision.png';


const MainPage = () => {

  const [idChar, setIdChar] = useState<number>(0);
  
  const updateIdCard = (id:number) => {
    setIdChar(id);
  };


  return (
    <>
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
    </>
  );
};

export default MainPage;
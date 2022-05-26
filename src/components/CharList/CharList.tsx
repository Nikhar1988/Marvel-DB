import './CharList.scss';
import CharItem from '../CharItem/CharItem';
import { FC, useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import { CharListProps } from './CharList.props';
import { Char } from '../RandomChar/RandomChar.types';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import Button from '../Button/Button';

const CharList:FC<CharListProps>=({updateIdCard, idChar})=> {
    
    const [charList, setCharList] = useState<Array<Char>>([]);
    const [newCharLoading, setNewCharLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    
    let liElement:HTMLLIElement
     
    const {error,loading, getAllCharacters}= useMarvelService();
 
    useEffect(()=> {
        onRequest(offset, true)
    },[])
    
      const onAddCharList = (newCharList: Array<Char>) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }    
        
        setNewCharLoading(false);
        setCharList(charList => [...charList, ...newCharList]);
        setOffset(offset => offset + 9)
        setCharEnded(ended)
            
      }
       
    const onRequest = (offset: number, initial: boolean) => {    
        initial ?setNewCharLoading(false) : setNewCharLoading(true)
            getAllCharacters(offset) 
            .then(onAddCharList)                   
    }
    
    

    const focusFirstTI = () => {
        onRequest(offset,false)
        if(liElement) {
           liElement.focus();
        }   
    }
 

    const viewCharItem =(charList:Array<Char>):JSX.Element => {
          const charItems = charList.map(char => {
            const { id, name, thumbnail} = char;

           
            return <CharItem 
                src={thumbnail} 
                name={name} selected={idChar === id} 
                key={id} 
                charId={id}
                imageNotFound={thumbnail} 
                tabIndex={0}
                onFocus={()=> updateIdCard(id)} 
                liRef = {el => liElement = el}
                /> 
         }) 
        return (
             <ul  className="char__grid">
                {charItems} 
             </ul>
         )
      } 

     
        
        const items = viewCharItem(charList);
        
        const viewContent = loading && !setNewCharLoading ? <Spinner/> : 
        error ? <Error/> : items;
        return (
            <div className="char__list">
                {viewContent}               
                <Button 
                    onClick={()=> onRequest(offset,false)}
                    onKeyDown={(event) => {
                        if(event.key === 'Enter' || event.key === 'Space') {
                           event.preventDefault(); 
                            focusFirstTI()     
                        }
                    }} 
                    disabled = {newCharLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    title="load more"
                >
                </Button>
            </div>
        )
    
}

 export default CharList;
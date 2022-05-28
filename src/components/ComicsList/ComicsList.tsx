import { FC, useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import Button from '../Button/Button';
import ComicItem from '../ComicItem/ComicItem';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import { Comic,  } from './ComicsList.props';
import './ComicsList.scss';
 

const ComicsList:FC = () => {
    
    const {error, loading, getAllComics}= useMarvelService();
    
    
    const [comicList, setComicList]= useState<Array<Comic>>([]);
    const [newComicLoading, setNewComicLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [comicEnded, setComicEnded] = useState(false);

    let liElement:HTMLLIElement
     
    useEffect(()=> {
        onRequest(offset, true)
    },[])
    
      const onAddComicList = (newComicList: Array<Comic>) => {
        let ended = false;
        if (newComicList.length < 8) {
            ended = true;
        }    
        
        setNewComicLoading(false);
        setComicList(comicList => [...comicList, ...newComicList]);
        setOffset(offset => offset + 8)
        setComicEnded(ended)
            
      }
       
    const onRequest = (offset: number, initial: boolean) => {    
        initial ?setNewComicLoading(false) : setNewComicLoading(true)
            getAllComics(offset) 
            .then(onAddComicList)                   
    }


    const viewComicItem =(comicList:Array<Comic>):JSX.Element => {
        const charItems = comicList.map((comic, i) => {
          const { id, title, thumbnail, price} = comic;

         
          return <ComicItem
              src={thumbnail} 
              title={title}  
              price={price}
              key={id+i} 
              comicId={id}       
              liRef = {el => liElement = el}
              /> 
       }) 
      return (
           <ul  className="comics__grid">
              {charItems} 
           </ul>
       )
    } 

    const focusFirstTI = () => {
        onRequest(offset,false)
        if(liElement) {
           liElement.focus();
        }   
    }

    const items = viewComicItem(comicList);
        
        const viewContent = loading && !setNewComicLoading ? <Spinner/> : 
        error ? <Error/> : items;

    return (
        <div className="comics__list">
           {viewContent}
            <Button 
                onClick={()=> onRequest(offset, false)}
                onKeyDown={(event) => {
                    if(event.key === 'Enter' || event.key === 'Space') {
                    event.preventDefault(); 
                        focusFirstTI()     
                    }
                }} 
                disabled = {newComicLoading}
                style={{'display': comicEnded ? 'none' : 'block'}}
                title='load more'
            />
        </div>
    )
}

export default ComicsList;
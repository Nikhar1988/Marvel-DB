import './SingleComicPage.scss';
import { useParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import useMarvelService from '../services/MarvelService';
import { Comic } from '../components/ComicsList/ComicsList.props';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Error from '../components/Error/Error';

const SingleComicPage = () => { 
    let {comicId}= useParams();
    const [comic, setComic] = useState<Comic>({
        description: '""',
        id: 0,
        language: '',
        pageCount: '',
        price: 0,
        thumbnail: '',
        title:''
})
     
    const {error, getComic, loading, clearError} = useMarvelService();


    const onRequest = (comic: Comic) => {
       
        clearError()
        setComic(comic);
    }

     
    useEffect(()=> {
        if(comicId) 
        getComic(comicId)
        .then(onRequest)
    },[comicId])

    const viewContent = loading ? <Spinner/> : 
        error ? <Error/> : <ViewComic comic={comic} />;

    
      
    return (
            <>
                {viewContent}
            </>
        )
        
}



const ViewComic:FC<{comic:Comic}> = ({comic:{description, language, pageCount, price, thumbnail, title}}):JSX.Element =>{
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;
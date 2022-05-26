import { Comic } from '../components/ComicsList/ComicsList.props';
import { Char } from '../components/RandomChar/RandomChar.types';
import { useHttp } from '../hooks/http.hook';
import { CharItemData } from './types/character';
import { ComicItemData } from './types/comics';

const useMarvelService =() => {
   const {loading, error, request, clearError} = useHttp();

    const getAllCharacters = async (offset:number) => {
        const responce = await request(`${process.env.REACT_APP_GET_ALL_CHARACTERS}${offset}&${process.env.REACT_APP_API_KEY_PUBLIC}`)
        return responce.data.results.map(_transformCharacter);
    }

    const  getCharacter = async (id:number) => {
        const responce =  await request(`${process.env.REACT_APP_GET_ONE_CHARACTER}${id}?${process.env.REACT_APP_API_KEY_PUBLIC}`);       
        return _transformCharacter(responce.data.results[0]);
    }

    const _transformCharacter = (character: CharItemData ):Char => {
            const {id, name, description, thumbnail:{path, extension}, urls, comics } = character;
            return {
                id,
                name,
                description,
                thumbnail: `${path}.${extension}`,
                homepage: urls[0].url,
                wiki: urls[1].url,
                comics: comics.items
            }   
    }  

    const getAllComics = async (offset:number) => {
        const responce = await request(`${process.env.REACT_APP_GET_ALL_COMICS}${offset}&${process.env.REACT_APP_API_KEY_PUBLIC}`)
        return responce.data.results.map(_transformComic);
    }

    const _transformComic = (comic: ComicItemData ): Comic => {
        const {id, title, prices:[{price}], thumbnail:{path, extension} } = comic;
        return {
            id,
            title,
            price,
            thumbnail: `${path}.${extension}`,
        }   
}



     return {loading, error, clearError, getCharacter, getAllCharacters, getAllComics}
}

export default useMarvelService;
import { Char } from '../RandomChar/RandomChar.types';

export interface CharInfoProps {
    charId: number  
}


export interface ViewProps {
    char: Char,
    comicsList: Array<JSX.Element> 
}
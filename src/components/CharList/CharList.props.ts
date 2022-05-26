import { Char } from '../RandomChar/RandomChar.types';

export interface CharListState {
    charList: Array<Char> | [],
    loading: boolean,
    error: boolean,
    newCharLoading: boolean,
    offset:number, 
    charEnded: boolean  
}

export interface CharListProps {
    updateIdCard: (id: number) => void,
    idChar: number  
}; 
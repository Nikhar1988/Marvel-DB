import { ComicsItem } from '../../services/types/character';
export interface  Char  {
        id: number,
        name: string,
        description: string,
        thumbnail: string,
        homepage: string,
        wiki: string,
        comics: Array<ComicsItem>
} 
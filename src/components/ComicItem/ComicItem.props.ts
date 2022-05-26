import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
 


export interface ComicItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>,HTMLLIElement> {
    src:string,
    title: string,
    selected: boolean,
    price: number,
    comicId: number,
    liRef: (el:HTMLLIElement)=> void,  
}
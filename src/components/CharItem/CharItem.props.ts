import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
 


export interface CharItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>,HTMLLIElement> {
    src:string,
    name: string,
    selected: boolean,
    imageNotFound: string,
    charId: number,
    liRef: (el:HTMLLIElement)=> void,  
    
} 
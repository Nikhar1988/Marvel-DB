import { AnchorHTMLAttributes} from 'react';
import { DetailedHTMLProps } from 'react';


export interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color: 'red' | 'gray';
    title: string;
}
import { AnchorHTMLAttributes} from 'react';
import { DetailedHTMLProps } from 'react';


export interface ButtonLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color: 'red' | 'gray';
    title: string;
}
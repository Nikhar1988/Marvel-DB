import { ButtonHTMLAttributes} from 'react';
import { DetailedHTMLProps } from 'react';


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
}
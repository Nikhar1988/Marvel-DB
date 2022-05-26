import { useState, useCallback } from 'react';
import { ItemCharacter } from '../services/types/character';


export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


    const request = useCallback( async (url:string, method='GET', body = null, headers= {'Content-Type': 'application/json'}) => {
        
        setLoading(true)
        
        try {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            
            const data = await response.json();
            
            setLoading(false);
            
            return data;
            
        } catch (error ) {
            setLoading(false);
            setError(true);
            throw error;
        }   
        
    }
    ,[])
    
    const clearError = useCallback(() => setError(false),[]);

    return {loading, error, request, clearError}
} 
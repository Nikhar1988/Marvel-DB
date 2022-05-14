class MarvelService {
    getResourse = async (url:string ) => {
        let res = await fetch(`${url}${process.env.REACT_APP_API_KEY_PUBLIC}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResourse(`${process.env.REACT_APP_GET_ALL_CHARACTERS}`)
    }

    getCharacter =(id:number) => {
        console.log(`${process.env.REACT_APP_GET_ONE_CHARACTER}${id}?`)
        return this.getResourse(`${process.env.REACT_APP_GET_ONE_CHARACTER}${id}?`)
    }

}


export default MarvelService;
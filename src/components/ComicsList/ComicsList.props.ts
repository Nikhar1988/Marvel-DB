export interface Comic {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

export interface ComicListProps {
    updateIdCard: (id: number) => void,
    idComic: number  
}; 
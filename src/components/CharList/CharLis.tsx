import './CharList.scss';
import abyss from '../../resources/img/abyss.jpg';
import CharItem from '../CharItem/CharItem';

const CharList = () => {
    return (
        <div className="char__list">
            <ul className="char__grid">
                <CharItem src={abyss} name='Abyss' selected={true} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} />
                <CharItem src={abyss} name='Abyss' selected={false} /> 
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;
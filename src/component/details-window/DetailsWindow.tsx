// Styles
import './style.scss';

// React components
import React, { useContext } from 'react';

// Contexts
import { useDetailsWindowContext } from '../../context/DetailsWindowContext';
import { ThemeContext } from './../../context/ThemeContext'

// Others
import placholder_black from '../../image/details/placeholder_black.png';
import placholder_white from '../../image/details/placeholder_white.png';

export const DetailsWindow = () => {
    const { pokemon } = useDetailsWindowContext();
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`details details_${theme}`}>
            {pokemon.id == -1 && 
                <div className="whos_that_pokemon">
                    <div className="title">Who's that pokemon?</div>
                    <div className="sprite"><img src={ theme === 'light' ? placholder_black : placholder_white }/></div>
                    <div className="description">
                        Pick one from the list on the left to get some details!
                    </div>
                </div>
            }
            {
                pokemon.id > 0 && 
                <>
                <div className="name">{ pokemon.name }</div>
                <div className="types">{
                    pokemon.types.map((type: string) => (
                        <span key={type}>{ type }</span>
                    ))}
                </div>
                <div className="sprite"><img src={ pokemon.sprite }/></div>
                <div className="height">
                    <span>Height:</span>
                    <span>{ pokemon.height }</span>
                </div>
                <div className="weight">
                    <span>Weight:</span>
                    <span>{ pokemon.weight }</span>
                </div>
                <div className="base_expirience">
                    <span>Base Expirience:</span>
                    <span>{ pokemon.base_expirience }</span>
                </div>
                <div className="abilities">
                    <span>Abilities:</span>
                    { pokemon.abilities.map((ability: string) => (
                        <span key={ability}>{ ability }</span>
                    ))}
                </div>
                </>
            }
        </div>
    );
}

export default DetailsWindow;
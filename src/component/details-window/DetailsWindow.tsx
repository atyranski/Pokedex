import './style.scss';

import React from 'react';

import { useDetailsWindowContext } from '../../context/DetailsWindowContext';

export const DetailsWindow = () => {
    const { pokemon } = useDetailsWindowContext();

    return (
        <div className="details">
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
        </div>
    );
}

export default DetailsWindow;
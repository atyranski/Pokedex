import './style.scss';

import React from 'react';

import { Pokemon } from '../../interface/Pokemon';
import usePokemonService from '../../service/usePokemonService';

import { useDetailsWindowContext } from '../../context/DetailsWindowContext';

import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext'
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

type Props = {
    pokemon: Pokemon;
};

export const ListElement = ( { pokemon }: Props) => {
    const service = usePokemonService( pokemon );
    const { setPokemon } = useDetailsWindowContext(); 
    const { theme } = useContext(ThemeContext);

    function onClick() {
        if(service.status === 'loaded') setPokemon(service.payload);
    }

    return (
        <div 
            onClick={() => onClick()}
            className={`list_element list_element_${theme}`}>
            {service.status === 'loading' && <LoadingIndicator />}
            {service.status === 'loaded' &&
                <div className='pokemon'>
                    <div className="name">{ service.payload.name }</div>
                    <div className="types"> {
                        service.payload.types.map((type: string) => (
                            <span key={type}> { type } </span>
                        ))}    
                    </div>
                    <div className="sprite">
                        <img src={ service.payload.sprite }/>
                    </div>
                </div>            
            }
            {service.status === 'error' && (
            <div>Error, this pokemon don't want to show up :/</div>)}
      </div>
    );
}

export default ListElement;
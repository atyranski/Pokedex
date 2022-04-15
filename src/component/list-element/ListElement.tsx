import './style.scss';

import React from 'react';

import { Pokemon } from '../../interface/Pokemon';
import usePokemonService from '../../service/usePokemonService';

import { useDetailsWindowContext } from '../../context/DetailsWindowContext';

type Props = {
    pokemon: Pokemon;
};

export const ListElement = ( { pokemon }: Props) => {
    const service = usePokemonService( pokemon );
    const { setPokemon } = useDetailsWindowContext(); 

    function onClick() {
        if(service.status === 'loaded') setPokemon(service.payload);
    }

    return (
        <div onClick={() => onClick()} className="list_element">
        {service.status === 'loading' && <div>Loading...</div>}
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
          <div>Error, the backend moved to the dark side.</div>)}
      </div>
    );
}

export default ListElement;
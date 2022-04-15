import './style.scss';

import React from 'react';

import { Pokemon } from '../../interface/Pokemon';
import usePokemonService from '../../service/usePokemonService';

type Props = {
    pokemon: Pokemon;
};

export const ListElement = ( { pokemon }: Props) => {
    const service = usePokemonService( pokemon );

    return (
        <div className="list_element">
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
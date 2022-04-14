import './style.scss';
import React from 'react';
import { Pokemon } from '../../interface/Pokemon';
import usePokemonsService from '../../service/usePokemonsService';

import ListElement from '../list-element/ListElement';

const Pokemons: React.FC<{}> = () => {
  const service = usePokemonsService();

  return (
    <div className="pokemon_list">
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map((pokemon: Pokemon) => (
          <ListElement key={pokemon.name} pokemon={ pokemon }/>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>)}
    </div>
  );
};

export default Pokemons;
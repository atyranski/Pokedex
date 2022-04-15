import './style.scss';
import React, { useState }from 'react';
import { Pokemon } from '../../interface/Pokemon';
import usePokemonsService from '../../service/usePokemonsService';

import ListElement from '../list-element/ListElement';

const Pokemons: React.FC<{}> = () => {
  const limit = 20;
  let range = 20;
  let service = usePokemonsService({ offset: 0, limit: range });

  return (
    <>
      <div className="pokemon_list">
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' &&
          service.payload.results.map((pokemon: Pokemon) => (
            <ListElement key={pokemon.name} pokemon={ pokemon }/>
          ))}
        {service.status === 'error' && (
          <div>Error, the backend moved to the dark side.</div>)}
      </div>
      <button
        type="button"
        className="load_more">Load more</button>
    </>
  );
};

export default Pokemons;
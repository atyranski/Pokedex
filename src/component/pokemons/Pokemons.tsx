import './style.scss';
import React, { useState }from 'react';
import { Pokemon } from '../../interface/Pokemon';
import usePokemonsService from '../../service/usePokemonsService';

import ListElement from '../list-element/ListElement';

const Pokemons: React.FC<{}> = () => {
  const range = 20;
  const [limit, setLimit ] = useState(range);
  const service = usePokemonsService({ offset: 0, limit: limit });

  function onClick(){
    setLimit(limit + range);
  }

  return (
    <>
      <div className="pokemon_list">
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' &&
          service.payload.results.map((pokemon: Pokemon) => (
            <ListElement key={pokemon.name} pokemon={ pokemon }/>
          ))}
        {service.status === 'error' && (
          <div>Error, currently pokemons don't want to show up ://</div>)}
      </div>
      <button
        type="button"
        className="load_more"
        onClick={onClick}>Load more</button>
    </>
  );
};

export default Pokemons;
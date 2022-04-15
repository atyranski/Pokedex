// Styles
import './style.scss';

// React components
import React, { useState, useContext }from 'react';

// Components
import ListElement from '../list-element/ListElement';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

// Interfaces
import { Pokemon } from '../../interface/Pokemon';

// Services
import usePokemonsService from '../../service/usePokemonsService';

// Contexts
import { ThemeContext } from './../../context/ThemeContext'

const Pokemons: React.FC<{}> = () => {
  const range = 20;
  const [limit, setLimit ] = useState(range);
  const service = usePokemonsService({ offset: 0, limit: limit });
  const { theme } = useContext(ThemeContext);

  function onClick(){
    setLimit(limit + range);
  }

  return (
    <>
      <div className="pokemon_list">
        {service.status === 'loading' && <LoadingIndicator />}
        {service.status === 'loaded' &&
          service.payload.results.map((pokemon: Pokemon) => (
            <ListElement key={pokemon.name} pokemon={ pokemon }/>
          ))}
        {service.status === 'error' && (
          <div>Error, currently pokemons don't want to show up ://</div>)}
      </div>
      <button
        type="button"
        className={`load_more load_more_${theme}`}
        onClick={onClick}>Load more</button>
    </>
  );
};

export default Pokemons;
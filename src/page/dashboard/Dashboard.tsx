import './style.scss';

import React, { useState } from 'react';
import Pokemons from '../../component/pokemons/Pokemons';
import Filters from '../../component/filters/Filters';
import DetailsWindow from '../../component/details-window/DetailsWindow';

import { DetailsWindowContext } from '../../context/DetailsWindowContext';
import { Pokemon } from '../../interface/Pokemon';


export default function Dashboard() {
  const initial_pokemon = {
    abilities: [],
    base_expirience: 0,
    height: 0,
    id: -1,
    name: "",
    sprite: "",
    types: [],
    weight: 0,
  }
  const [pokemon, setPokemon] = useState<Pokemon>(initial_pokemon)

  return (
    <DetailsWindowContext.Provider value={{ pokemon, setPokemon }}>
      <Filters />
      <div className="dashboard">
        <div className="container">
          <div className="list">
            <Pokemons />
          </div>
          <DetailsWindow />
        </div>
      </div>
    </DetailsWindowContext.Provider>
  );
}
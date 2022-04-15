import './style.scss';

import React, { useState } from 'react';
import Pokemons from '../../component/pokemons/Pokemons';
import Filters from '../../component/filters/Filters';
import DetailsWindow from '../../component/details-window/DetailsWindow';

import { DetailsWindowContext } from '../../context/DetailsWindowContext';
import { Pokemon } from '../../interface/Pokemon';


export default function Dashboard() {
  const initial_pokemon = {
    abilities: [ "overgrow", "chlorophyll" ],
    base_expirience: 64,
    height: 7,
    id: 1,
    name: "bulbasaur",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [ "grass", "poison" ],
    weight: 69,
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
// Styles
import './style.scss';

// React components
import React, { useState, useContext } from 'react';

// Components
import Pokemons from '../../component/pokemons/Pokemons';
import DetailsWindow from '../../component/details-window/DetailsWindow';

// Interfaces
import { Pokemon } from '../../interface/Pokemon';

// Contexts
import { DetailsWindowContext } from '../../context/DetailsWindowContext';
import { ThemeContext } from './../../context/ThemeContext'

// Actuall function
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
  const { theme } = useContext(ThemeContext);

  return (
    <DetailsWindowContext.Provider value={{ pokemon, setPokemon }}>
      <div className={`dashboard dashboard_${theme}`}>
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
import './style.scss';

import React from 'react';
import Pokemons from '../../component/pokemons/Pokemons';
import Filters from '../../component/filters/Filters';
import DetailsWindow from '../../component/details-window/DetailsWindow';

export default function Dashboard() {

  return (
    <>
      <Filters />
      <div className="dashboard">
        <div className="container">
          <div className="list">
            <Pokemons />
          </div>
          <DetailsWindow />
        </div>
      </div>
    </>
  );
}
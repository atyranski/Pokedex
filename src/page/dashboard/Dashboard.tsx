import './style.scss';

import React from 'react';
import Pokemons from '../../component/pokemons/Pokemons';
import Filters from '../../component/filters/Filters';

export default function Dashboard() {
  return (
    <>
      <Filters />
      <div className="dashboard">
        <div className="container">
          <div className="list">
            <Pokemons />
            <button className="load_more">Load more</button>
          </div>
          <div className="details">

          </div>
        </div>
      </div>
    </>
  );
}
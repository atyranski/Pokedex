import './style.scss';

import React from 'react';
import Pokemons from '../../component/pokemons/Pokemons';

export default function Dashboard() {
  // const [data, setData] = useState(null);
  // async function componentDidMount() {
  //   try {
  //     const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  //     const printer = await res.json();
  //     setData(printer.brand);
  //     console.log(data);
  //     return printer;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // componentDidMount();




  return (
    <div className="dashboard_container">
      <div className="page_container">
        <div className="main">
            Dashboard
            <Pokemons />
        </div>
      </div>
    </div>
  );
}
import './style.scss';

// import avatar from '../../image/avatar/avatar.jpg';
import logo from '../../image/logo/icon_64.png';

import { Link } from "react-router-dom"
import React from 'react';

export default function Navbar() {

  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img src={logo} />
        <Link to="/">Pokedex</Link>
      </div>

    </div>
  );
}
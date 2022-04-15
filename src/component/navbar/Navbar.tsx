import './style.scss';

import logo from '../../image/logo/icon_64.png';

import React from 'react';
import { Link } from "react-router-dom"

import { ThemeToggle } from './../theme-toggle/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext';

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div  className={`navbar navbar_${theme}`}>
      <div className="container">
        <div className="logo_container">
          <img src={logo} />
          <Link to="/">Pokedex</Link>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
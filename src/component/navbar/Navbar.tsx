// Styles
import './style.scss';

// React components
import React, { useContext }  from 'react';
import { Link } from "react-router-dom"

// Components
import { ThemeToggle } from './../theme-toggle/ThemeToggle';

// Contexts
import { ThemeContext } from './../../context/ThemeContext';

// Others
import logo from '../../image/logo/icon_64.png';

// Actuall function
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
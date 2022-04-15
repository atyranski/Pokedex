// Styles
import './style.scss';

// React components
import React, { useContext } from 'react';

// Contexts
import { ThemeContext } from './../../context/ThemeContext'

// Others
import surprised_pikatchu from '../../image/utils/surprised_pikatchu.jpg';

// Actuall function
export default function PageNotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`page_not_found page_not_found_${theme}`}>
      <div className="container">
        <img src={ surprised_pikatchu }/>
        <div className="description">
          <h1><span>Error 404:</span> Page not found</h1>
          <h4>You won't find any Pokemon there...</h4>
        </div>
      </div>
    </div>
  );
}
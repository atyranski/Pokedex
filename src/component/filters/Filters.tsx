import './style.scss';

import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext'

export default function Filters() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="filters">
            Type
        </div>
    );
}
import './style.scss';

import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from './../../context/ThemeContext'

import indicator_black from '../../image/utils/indicator_black.png';
import indicator_white from '../../image/utils/indicator_white.png';

export const LoadingIndicator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`loading_indicator loading_indicator_${theme}`}>
            <div className="image">
                <img src={theme == 'light' ? indicator_black : indicator_white} />
            </div>
            <div className="title">Loading</div>
        </div>
    );
}

export default LoadingIndicator;
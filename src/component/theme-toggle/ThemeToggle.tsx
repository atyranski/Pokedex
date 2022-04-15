// Styles
import './style.scss';

// React components
import React from 'react';

// Contexts
import { useThemeContext } from '../../context/ThemeContext';

// Others
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const ThemeToggle = () => {
    const { theme, setTheme } = useThemeContext();
    const cookies = new Cookies();

    function onToggle(){
        if(theme === 'light') {
            cookies.set('theme', 'dark');
            setTheme('dark');
        } else {
            cookies.set('theme', 'light');
            setTheme('light');
        }
    }

    return (
        <div onClick={onToggle} 
            className={`theme_toggle theme_toggle_${theme}`}>
            <div className="switch">
                <FontAwesomeIcon icon={ theme === 'light' ? faSun : faMoon } />  
            </div>
        </div>
    );
}

export default ThemeToggle;
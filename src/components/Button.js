import React, { useState } from 'react';
import '../styles/Button.scss';

const Button = ({ text, closeMenu }) => {
    const handleCloseMenu = () => {
        if (text === 'Powrót') closeMenu();
    }

    return ( 
            <button 
            onClick={handleCloseMenu}>
            {text}
            </button>
     );
}
 
export default Button;
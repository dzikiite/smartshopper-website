import React from 'react';
import '../styles/Button.scss';

const Button = ({ text, closeMenu }) => {
    const handleButtonClick = () => {
        if (text === 'Powrót') closeMenu();
        else if (text === 'Logowanie') alert('Apka będzie podpięta wkrótce...');
    }

    return ( 
            <button 
            onClick={handleButtonClick}>
            {text}
            </button>
     );
}
 
export default Button;
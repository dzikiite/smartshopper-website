import React, { useRef } from 'react';
import { loginButtonAnimation } from '../utils/animation';
import '../styles/Button.scss';

const Button = ({ text, closeMenu }) => {
    const buttonRef = useRef();

    const handleCloseMenu = () => {
        if (text == 'Powrót') closeMenu();
    }

    return ( 
        <button 
        ref={buttonRef}
        id={text}
        onMouseEnter={() => loginButtonAnimation(buttonRef.current, text)}
        onClick={handleCloseMenu}>
        {text}
        </button>
     );
}
 
export default Button;
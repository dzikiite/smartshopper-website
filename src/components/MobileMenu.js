import React from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';
import '../styles/MobileMenu.scss';



const MobileMenu = ({ closeMenu}) => {
    return (
        <div className="mobile-menu-container">
            <img src={Logo} alt="logo-smartshopper"/>
            <Button 
            text='Logowanie'/>
            <Button 
            text='Powrót'
            closeMenu={closeMenu}/>
        </div>
    );
}

export default MobileMenu;
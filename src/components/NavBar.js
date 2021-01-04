import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';
import MobileMenu from './MobileMenu';
import '../styles/NavBar.scss';
import mobileMenuIcon from '../assets/mobile-menu-icon.svg';
import useIsMobile from '../utils/useIsMobile';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuIconClick = () => setIsMenuOpen(!isMenuOpen);

    const navButton = useIsMobile()
    ? <img 
        src={mobileMenuIcon} 
        alt="mobile-menu-icon"
        className='menu-icon'
        onClick={handleMenuIconClick}/>
    : <Button text='Logowanie' />;

    const mobileMenu = isMenuOpen
    ?  <MobileMenu 
        closeMenu={handleMenuIconClick}
        isMenuOpen={isMenuOpen}/> 
    : null;

    return ( 
        <header className='header-container'>
            <div className="header">
                <img src={Logo} alt="logo-smartshopper"/>
                {navButton}
            </div>
            {mobileMenu}
        </header>
     );
}
 
export default NavBar;
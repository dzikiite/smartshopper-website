import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';
import MobileMenu from './MobileMenu';
import '../styles/NavBar.scss';
import mobileMenuIcon from '../assets/mobile-menu-icon.svg';
import useIsMobile from '../utils/useIsMobile';
import { useSpring, animated } from 'react-spring';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuIconClick = () => setIsMenuOpen(!isMenuOpen);

    const mobileMenuAnimation = useSpring({
        config: {
            duration: 150,
        },
        opacity: isMenuOpen ? 1 : 0,
    })

    const navButton = useIsMobile()
    ? <img 
        src={mobileMenuIcon} 
        alt="mobile-menu-icon"
        className='menu-icon'
        onClick={handleMenuIconClick}/>
    : <Button text='Logowanie' />;

    const mobileMenu = isMenuOpen
    ?   <animated.div style={mobileMenuAnimation}>
            <MobileMenu 
            closeMenu={handleMenuIconClick}
            isMenuOpen={isMenuOpen}/> 
        </animated.div>
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
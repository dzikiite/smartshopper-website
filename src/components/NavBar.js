import React from 'react';
import Logo from '../assets/logo.svg';

import '../styles/NavBar.scss';

const NavBar = () => {
    return ( 
        <header className='header-container'>
            <div className="header">
                <img src={Logo} alt="logo-smartshopper"/>
                <button>Logowanie</button>
            </div>
        </header>
     );
}
 
export default NavBar;
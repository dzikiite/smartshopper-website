import React, {useEffect} from 'react';
import Logo from '../assets/logo.svg';
import Button from './Button';
import '../styles/MobileMenu.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MobileMenu = ({ closeMenu}) => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 400,
        });
    }, []);

    return (
        <div className="mobile-menu-container" data-aos="fade-up">
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
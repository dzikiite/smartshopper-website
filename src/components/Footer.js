import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/logo-white.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import dribble from '../assets/dribble.svg';
import youtube from '../assets/youtube.svg';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer">
                <img src={logo} alt="logo-smartshopper"/>
                <p>&copy; 2020 smartShopper. All rights reserved.</p>
                <div className="social-media">
                    <img src={instagram} alt="social-instagram"/>
                    <img src={dribble} alt="social-dribble"/>
                    <img src={twitter} alt="social-twitter"/>
                    <img src={youtube} alt="social-youtube"/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
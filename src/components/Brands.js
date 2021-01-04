import React, {useEffect} from 'react';
import '../styles/Brands.scss';
import hm from '../assets/hm-logo.svg';
import pull from '../assets/pull-logo.svg';
import bershka from '../assets/bershka-logo.svg';
import house from '../assets/house-logo.svg';
import sinsay from '../assets/sinsay-logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
        });
    }, []);

    return ( 
        <div className="brands-container" data-aos="fade-up">
            <div className="brands">
                <img src={hm} alt="hm-logo"/>
                <img src={sinsay} alt="sinsay-logo"/>
                <img src={house} alt="house-logo"/>
                <img src={bershka} alt="bershka-logo"/>
                <img src={pull} alt="pull-logo"/>
            </div>
        </div>
     );
}
 
export default Brands;
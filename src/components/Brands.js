import React from 'react';
import '../styles/Brands.scss';
import hm from '../assets/hm-logo.svg';
import pull from '../assets/pull-logo.svg';
import bershka from '../assets/bershka-logo.svg';
import house from '../assets/house-logo.svg';
import sinsay from '../assets/sinsay-logo.svg';

const Brands = () => {
    return ( 
        <div className="brands-container">
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
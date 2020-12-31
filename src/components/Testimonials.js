import React from 'react';
import '../styles/Testimonials.scss';

import avatar from '../assets/testimonial-avatar.svg';

const Testimonials = () => {
    return ( 
        <div className="testimonials-container">
            <h2>Korzystają z aplikacji</h2>
            <p>Oni już robią inteligentne zakupy, Twoja kolej!</p>
            <div className="testimonials">
                <div className="testimonials--item">
                    <span>
                        <h3>Przydatna aplikacja</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                    </span>
                    <img src={avatar} alt="avatar"/>
                    <p className="sign">Jane Cooper</p>
                    <p className="subsign">CEO at ABC Corporation</p>
                </div>
                <div className="testimonials--item">
                    <span>
                        <h3>Intuicyjny design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                    </span>
                    <img src={avatar} alt="avatar"/>
                    <p className="sign">Jane Cooper</p>
                    <p className="subsign">CEO at ABC Corporation</p>
                </div>
                <div className="testimonials--item">
                    <span>
                        <h3>Super sprawa!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                    </span>
                    <img src={avatar} alt="avatar"/>
                    <p className="sign">Jane Cooper</p>
                    <p className="subsign">CEO at ABC Corporation</p>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;
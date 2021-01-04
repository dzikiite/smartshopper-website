import React, {useEffect} from 'react';
import '../styles/Testimonials.scss';
import avatar from '../assets/testimonial-avatar.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
        });
    }, []);

    return ( 
        <div className="testimonials-container" data-aos="fade-up">
            <h2>Korzystają z aplikacji</h2>
            <p>Oni już robią inteligentne zakupy, Twoja kolej!</p>
            <div className="testimonials">
                <div className="testimonials--item">
                    <span>
                        <h3>Super sprawa!</h3>
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
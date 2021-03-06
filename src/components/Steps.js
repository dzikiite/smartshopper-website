import React, {useEffect} from 'react';
import '../styles/Steps.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Steps = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 600,
        });
    }, []);

    return ( 
        <section className="steps-container" data-aos="fade-up">
                <h2>Jak to działa?</h2>
                <p>Pomagamy zakupowiczom uporządkować zakupy.</p>
                <div className="steps">
                    <div className="steps--item">
                        <h4>Dodawaj</h4>
                        <p>Dodawaj interesujące produkty ze sklepów online</p>
                    </div>
                    <div className="steps--item turqoise">
                        <h4>Przeglądaj</h4>
                        <p>Jedna wielka wishlista Twoich sklepów</p>
                    </div>
                    <div className="steps--item">
                        <h4>Zyskuj</h4>
                        <p>Aplikacja pokaże Ci dostępne kody rabatowe</p>
                    </div>
                    <div className="steps--item">
                        <h4>Kupuj</h4>
                        <p>Po porównaniu produktów - kupuj te najfajniejsze!</p>
                    </div>
                </div>
        </section>
     );
}
 
export default Steps;
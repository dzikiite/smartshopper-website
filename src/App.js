import React from 'react';
import './App.scss';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Steps from './components/Steps';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <Steps />
      <Brands />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

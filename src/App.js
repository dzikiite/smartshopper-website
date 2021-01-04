import React, { useEffect } from 'react';
import './App.scss';
import { titleAnimation } from './utils/animation';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Steps from './components/Steps';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  useEffect(() => titleAnimation()
  ,[]);

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

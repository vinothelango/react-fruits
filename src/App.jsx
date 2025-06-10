import React, { useRef } from 'react';
import Navbar from './Companent/Navbar/Navbar';
import Hero from './hero/Hero';
import List from './List/List';
import TestimonialSlider from './Msg/Msg';
import View from './view/View';
import Contact from './Contacts/Contact';

const App = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        onHomeClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onAboutClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onServiceClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div ref={homeRef}><Hero /></div>
      
      <div ref={servicesRef}><List /></div>
      <div ref={aboutRef}><TestimonialSlider /></div>
      <View />
      <div ref={contactRef}><Contact /></div>
    </div>
  );
};

export default App;

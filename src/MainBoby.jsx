import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

const MainBoby = () => {
    return (
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
    );
}

export default MainBoby;

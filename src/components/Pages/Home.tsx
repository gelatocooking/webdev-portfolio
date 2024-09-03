import React from 'react';
import Hero from '../Hero'
import WhyUs from '../WhyUs';
import OurServices from '../OurServices';
import Footer from '../Footer';
const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <OurServices />
        <WhyUs />
        <Footer />
    </main>
  );
};

export default Home;

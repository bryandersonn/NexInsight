import React from 'react';
import Products from './components/Products';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';

import Newsletter from './components/Newsletter';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <hr className='w-3/4 border-2 rounded-lg m-auto'></hr>
      <Abouts />
      <Products />
      {/* <Newsletter /> */}
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}

export default App;

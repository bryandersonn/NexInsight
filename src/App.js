import React from 'react';
import Products from './components/Products';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <hr className='w-3/4 border-2 rounded-lg m-auto'></hr>
      <Abouts />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Typed from 'react-typed';

import ParticlesBg from './ParticlesBg';

const Hero = () => {
  
  return (
    <section id='home'>
      <ParticlesBg />
      <div id='particles-js' className='text-white mt-24'>
        <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>
            YOUR DATA, OUR INSIGHTS
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            NexInsight
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Empowering you with
            </p>
          </div>
          <div>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['Realtime Feedback', 'Data Visualization', 'Insight Generation']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='mx-2 my-4 md:text-2xl text-xl font-bold text-gray-500 md:py-6'>From Data to Insight, Your Next Step Awaits.</p>
          <a href="#product"><button className='bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto py-3 mt-2 text-black hover:scale-110 duration-300'>Get Started</button></a>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;

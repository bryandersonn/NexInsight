import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logotransparent.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-20 w-full mx-auto px-4 text-white fixed z-50 bg-black'>
      <a href="#home"><img src={logo} alt="logo" className='w-28' /></a>
      <h1 className='w-full text-3xl font-bold cursor-default'>NexInsight</h1>
      <ul className='hidden md:flex'>
        <a href="#home">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline underline-offset-8 transition duration-300 ease-in-out'>Home</li>
        </a>
        <a href="#about">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline underline-offset-8 transition duration-300 ease-in-out'>About</li>
        </a>
        <a href="#product">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline underline-offset-8 transition duration-300 ease-in-out'>Products</li>
        </a>
        <a href="#contact">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline underline-offset-8 transition duration-300 ease-in-out'>Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NexInsight</h1>
        <a href="#home">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline'>Home</li>
        </a>
        <a href="#about">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline'>About</li>
        </a>
        <a href="#product">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline'>Products</li>
        </a>
        <a href="#contact">
          <li className='p-4 text-[#00df9a] cursor-pointer font-bold hover:underline'>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;

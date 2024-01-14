import React from 'react';
import Logo from '../assets/Rowan-IEEE-Banner-Logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={Logo} loading="lazy" alt="/" width={250}/>
      <ul className='hidden md:flex'>
        <li className='p-4'><a href="#About">About</a></li>
        <li className='p-4'><a href="#Sponsors">Sponsors</a></li>
        <li className='p-4'><a href="#FAQ">FAQ</a></li>
        <li className='p-4'><a href="https://www.w3schools.com/">Register</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
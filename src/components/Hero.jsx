import React from 'react';
import Typed from 'react-typed';
import Logo from '../assets/profhacks-logo (1).png'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex justify-center items-center'> 
          <img src={Logo} alt="/" />
        </div>

        <button className='bg-[#00df9a] w-[200px] rounded-md font-bold mx-auto py-3 text-black'>Register Here!</button>

        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Join our 24 hour hackathon full of
          </p>
          <Typed
          className='md:text-4xl sm:text-2xl text-1xl font-bold md:pl-4 pl-2'
            strings={['FUN!', 'CODING!', 'PRIZES!', 'GAMES!']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div classNName='my-6 mx-auto'>
          <br></br>
        <p className='md:text-2xl text-1xl'><u>Date:</u> March 9th, 2024 </p>
        <p className='md:text-2xl text-1xl'><u>Location:</u> 401 North Campus Drive (ENGR Building) </p>
        <p className='md:text-2xl text-1xl'><u>Time:</u> Doors Open at 9:30 AM</p>
        </div>
     
        
      </div>
    </div>
  );
};

export default Hero;
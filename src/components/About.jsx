import React from 'react';
import Images from './Images'

const About = () => {
  return (
    <div id="About" className='w-full bg-white py-16 px-4'>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-4 flex justify-center items-center'>
          <u>What is Profhacks?</u>
        </h1>
    <div className='md:text-4xl sm:text-3xl text-2xl flex flex-col justify-center'>
      <p>
      Profhacks is largest annual event held by the Rowan IEEE Student Branch! It is a 24-hour Hackathon 
      where you can create innovative hardware and software solutions to solve real world problems. For 2024, the theme is "Island Hack", so be prepared for different island-based events and activites. 
      Go solo or with a team and follow the theme, or just build whatever your heart desires! There are a variety of different activities you can do including:
      </p>
    
    <br></br>
    <ul>
        <li>- 3D Printing</li>
        <li>- Programming</li>
        <li>- Playing Games</li>
        <li>- Attending Workshops</li>
        <li>- Getting Free Merch</li>
        <li>- Winning Prizes</li>
        <li>- HAVING FUN!!!</li>
    </ul>
    <br></br>

    <p>
      Last event was ProfHacks 2023, which was the 8th iteration of our annual hackathon. 
      The theme of the hackathon was "Haunted Hack", which had a series of spooky events and activities involved with it. Below are a few images took throughout the event
      </p>
    <br></br>
    </div>

      <Images />

      </div>

  );
};

export default About;
import React from 'react';
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div id="FAQ" className="p-4 bg-gray-200 rounded-lg">
        <h1 id="FAQ" className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-4 flex justify-center items-center'>
          FAQ
        </h1>
    <div className='max-w-[1240px] mx-auto grid bg-white-200'>
    <Accordion
        title="What is a hackathon?"
        answer="A hackathon is an event, where people come together to collaborate in order to solve a problem or identify new opportunities using whatever technologies they would like"
      />
      <Accordion
        title="Who can attend?"
        answer="Anyone from high school, undergraduate, and graduate students can attend ProfHacks!"
      />
      <Accordion
        title="Is there any cost?"
        answer="Nope! ProfHacks is free to attend"
      />
      <Accordion 
        title="a" 
        answer="I am using Supabase!" />
      <Accordion 
        title="a" 
        answer="I am using Supabase!" />
      <Accordion 
        title="a" 
        answer="I am using Supabase!" />
      <Accordion 
        title="a" 
        answer="I am using Supabase!" />
    </div>

    </div>
  );
};

export default FAQ;
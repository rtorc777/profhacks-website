import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FAQ from './components/FAQ'
import Sponsors from './components/Sponsors'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <FAQ />
    </div>
  );
}

export default App;

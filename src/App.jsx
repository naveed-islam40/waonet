import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/Home/Home';
import ServicesSection from './Components/Services/Services';
import About from './Components/About/About';
import Portfolio from './Components/portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <ServicesSection />
      <About />
      <Portfolio />
    </div>
  )
}


export default App;
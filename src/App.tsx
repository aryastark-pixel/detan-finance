import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SIPCalculator from './components/SIPCalculator';
import MutualFundCalculator from './components/MutualFundCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SIPCalculator />
      <MutualFundCalculator />
      <Footer />
    </div>
  );
}

export default App;
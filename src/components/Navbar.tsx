import React from 'react';
import { BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <BarChart3 className="h-8 w-8 text-indigo-900" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-900 to-emerald-700 text-transparent bg-clip-text">
                Detan Finance
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sip-calculator" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">
              SIP Calculator
            </a>
            <a href="#mutual-fund-calculator" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">
              Mutual Fund Calculator
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#sip-calculator" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              SIP Calculator
            </a>
            <a 
              href="#mutual-fund-calculator" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Mutual Fund Calculator
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
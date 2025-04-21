import React from 'react';
import { BarChart3 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-2xl font-bold">Detan Finance</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering investors with state-of-the-art financial calculators and insights for a better financial future.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#sip-calculator" className="text-gray-400 hover:text-white transition-colors">SIP Calculator</a>
              </li>
              <li>
                <a href="#mutual-fund-calculator" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</a>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Detan Finance. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
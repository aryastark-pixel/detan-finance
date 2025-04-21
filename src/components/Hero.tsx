import React from 'react';
import { BarChart4, Calculator, LineChart, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span className="block">Plan your financial</span>
              <span className="block">
                future with{' '}
                <span className="text-amber-400">
                  confidence
                </span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-indigo-100">
              Calculate your SIP returns and mutual fund investments with Detan's state-of-the-art financial calculators.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <LineChart className="h-8 w-8 text-amber-400" />
                <p className="mt-2 text-sm text-center text-white font-medium">SIP Calculator</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <BarChart4 className="h-8 w-8 text-amber-400" />
                <p className="mt-2 text-sm text-center text-white font-medium">Mutual Funds</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center">
                <TrendingUp className="h-8 w-8 text-amber-400" />
                <p className="mt-2 text-sm text-center text-white font-medium">Investment Goals</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform translate-x-4 translate-y-4 lg:translate-y-8">
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-3 px-4 flex items-center">
                <div className="flex space-x-1">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-amber-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-white font-medium">Detan Finance Calculator</div>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">SIP Calculator Preview</h3>
                    <Calculator className="h-5 w-5 text-indigo-800" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Monthly Investment</label>
                      <div className="h-3 bg-indigo-200 rounded-full w-3/4"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Expected Return (%)</label>
                      <div className="h-3 bg-indigo-200 rounded-full w-1/2"></div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Time Period (Years)</label>
                      <div className="h-3 bg-indigo-200 rounded-full w-2/3"></div>
                    </div>
                    <div className="bg-indigo-900 text-white py-3 rounded-md text-center mt-6 animate-pulse">
                      Calculate Returns
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Calculator, Shield, BarChart4, TrendingUp, ZapIcon, LineChart, ArrowRightLeft } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="h-8 w-8 text-indigo-900" />,
    title: 'SIP Calculator',
    description: 'Calculate returns on your monthly SIP investments with our easy-to-use calculator.',
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-indigo-900" />,
    title: 'Mutual Fund Returns',
    description: 'Estimate mutual fund returns considering expense ratios and market performance.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-indigo-900" />,
    title: 'Goal-based Planning',
    description: 'Set financial goals and determine the investment needed to achieve them.',
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-900" />,
    title: 'Risk Assessment',
    description: 'Understand the risk associated with different investment options.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-indigo-900" />,
    title: 'Visual Analytics',
    description: 'Visualize your investment growth over time with interactive charts.',
  },
  {
    icon: <ArrowRightLeft className="h-8 w-8 text-indigo-900" />,
    title: 'Investment Comparison',
    description: 'Compare different investment options to choose the best one for your needs.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full text-sm font-medium mb-2">
            <ZapIcon className="inline-block h-4 w-4 mr-1" />
            Powerful Calculators
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            All the tools you need for smart investing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of financial calculators helps you make informed investment decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
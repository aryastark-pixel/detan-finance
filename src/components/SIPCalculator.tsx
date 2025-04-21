import React, { useState, useEffect } from 'react';
import RangeInput from './RangeInput';
import { calculateSIP, formatCurrency } from '../utils/calculatorUtils';
import { SIPCalculatorInputs, CalculationResult } from '../types/calculator';
import ResultsChart from './ResultsChart';
import { Calculator } from 'lucide-react';

const SIPCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<SIPCalculatorInputs>({
    monthlyInvestment: 5000,
    annualReturn: 12,
    timePeriod: 10,
  });

  const [results, setResults] = useState<CalculationResult | null>(null);

  useEffect(() => {
    const result = calculateSIP(inputs);
    setResults(result);
  }, [inputs]);

  const handleMonthlyInvestmentChange = (value: number) => {
    setInputs((prev) => ({ ...prev, monthlyInvestment: value }));
  };

  const handleAnnualReturnChange = (value: number) => {
    setInputs((prev) => ({ ...prev, annualReturn: value }));
  };

  const handleTimePeriodChange = (value: number) => {
    setInputs((prev) => ({ ...prev, timePeriod: value }));
  };

  return (
    <section id="sip-calculator" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <Calculator className="inline-block mr-2 h-8 w-8 text-indigo-900" />
            SIP Calculator
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate returns on your monthly SIP investments and plan for your financial goals with confidence.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:border-r border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Details</h3>
              
              <div className="space-y-6">
                <RangeInput
                  label="Monthly Investment"
                  min={500}
                  max={100000}
                  step={500}
                  value={inputs.monthlyInvestment}
                  onChange={handleMonthlyInvestmentChange}
                  prefix="₹ "
                />
                
                <RangeInput
                  label="Expected Annual Return"
                  min={1}
                  max={30}
                  step={0.5}
                  value={inputs.annualReturn}
                  onChange={handleAnnualReturnChange}
                  suffix="%"
                />
                
                <RangeInput
                  label="Time Period"
                  min={1}
                  max={30}
                  step={1}
                  value={inputs.timePeriod}
                  onChange={handleTimePeriodChange}
                  suffix=" years"
                />
              </div>
            </div>
            
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Returns</h3>
              
              {results && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Invested Amount</p>
                      <p className="text-xl font-semibold text-gray-900">
                        {formatCurrency(results.totalInvestment)}
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                      <p className="text-xl font-semibold text-emerald-600">
                        {formatCurrency(results.estimatedReturns)}
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200 border-2">
                      <p className="text-sm text-gray-600 mb-1">Total Value</p>
                      <p className="text-xl font-semibold text-indigo-900">
                        {formatCurrency(results.totalValue)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-64">
                    <ResultsChart data={results.yearlyData} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPCalculator;
import React, { useState, useEffect } from 'react';
import RangeInput from './RangeInput';
import { calculateMutualFund, formatCurrency } from '../utils/calculatorUtils';
import { MutualFundCalculatorInputs, CalculationResult } from '../types/calculator';
import ResultsChart from './ResultsChart';
import { Briefcase, Percent } from 'lucide-react';

const MutualFundCalculator = () => {
  const [inputs, setInputs] = useState<MutualFundCalculatorInputs>({
    initialInvestment: 100000,
    monthlyAddition: 5000,
    annualReturn: 12,
    timePeriod: 10,
    expenseRatio: 1.5,
  });

  const [results, setResults] = useState<CalculationResult | null>(null);

  useEffect(() => {
    const result = calculateMutualFund(inputs);
    setResults(result);
  }, [inputs]);

  const handleInputChange = (field: keyof MutualFundCalculatorInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="mutual-fund-calculator" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <Briefcase className="inline-block mr-2 h-8 w-8 text-indigo-900" />
            Mutual Fund Calculator
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Estimate your mutual fund investments with our advanced calculator that accounts for expense ratios and monthly additions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-6 sm:p-8 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Parameters</h3>
              
              <div className="space-y-6">
                <RangeInput
                  label="Initial Investment"
                  min={1000}
                  max={1000000}
                  step={1000}
                  value={inputs.initialInvestment}
                  onChange={(value) => handleInputChange('initialInvestment', value)}
                  prefix="₹ "
                />
                
                <RangeInput
                  label="Monthly Addition"
                  min={0}
                  max={100000}
                  step={500}
                  value={inputs.monthlyAddition}
                  onChange={(value) => handleInputChange('monthlyAddition', value)}
                  prefix="₹ "
                />
                
                <RangeInput
                  label="Expected Annual Return"
                  min={1}
                  max={30}
                  step={0.5}
                  value={inputs.annualReturn}
                  onChange={(value) => handleInputChange('annualReturn', value)}
                  suffix="%"
                />
                
                <RangeInput
                  label="Time Period"
                  min={1}
                  max={30}
                  step={1}
                  value={inputs.timePeriod}
                  onChange={(value) => handleInputChange('timePeriod', value)}
                  suffix=" years"
                />
                
                <RangeInput
                  label="Expense Ratio"
                  min={0.1}
                  max={3}
                  step={0.1}
                  value={inputs.expenseRatio}
                  onChange={(value) => handleInputChange('expenseRatio', value)}
                  suffix="%"
                />
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Projection</h3>
              
              {results && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Total Investment</p>
                      <p className="text-xl font-semibold text-gray-900">
                        {formatCurrency(results.totalInvestment)}
                      </p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Estimated Returns</p>
                      <p className="text-xl font-semibold text-emerald-600">
                        {formatCurrency(results.estimatedReturns)}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-amber-600">
                        <Percent className="h-3 w-3 mr-1" />
                        After expense ratio of {inputs.expenseRatio}%
                      </div>
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
                  
                  <div className="mt-6">
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-sm text-amber-800 max-w-xs">
                      <p className="font-medium">Important Note:</p>
                      <p className="text-xs mt-1">Past performance is not indicative of future results. These calculations are for educational purposes only.</p>
                    </div>
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

export default MutualFundCalculator;
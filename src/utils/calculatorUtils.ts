import { CalculationResult, SIPCalculatorInputs, MutualFundCalculatorInputs, YearlyData } from "../types/calculator";

export const calculateSIP = (inputs: SIPCalculatorInputs): CalculationResult => {
  const { monthlyInvestment, annualReturn, timePeriod } = inputs;
  const monthlyRate = annualReturn / 12 / 100;
  const months = timePeriod * 12;
  
  let totalInvestment = monthlyInvestment * months;
  let futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  
  const yearlyData: YearlyData[] = [];
  
  for (let year = 1; year <= timePeriod; year++) {
    const monthsCompleted = year * 12;
    const investmentTillDate = monthlyInvestment * monthsCompleted;
    const valueTillDate = monthlyInvestment * ((Math.pow(1 + monthlyRate, monthsCompleted) - 1) / monthlyRate) * (1 + monthlyRate);
    
    yearlyData.push({
      year,
      investment: Math.round(investmentTillDate),
      value: Math.round(valueTillDate)
    });
  }
  
  return {
    totalInvestment,
    estimatedReturns: Math.max(0, futureValue - totalInvestment),
    totalValue: futureValue,
    yearlyData
  };
};

export const calculateMutualFund = (inputs: MutualFundCalculatorInputs): CalculationResult => {
  const { initialInvestment, monthlyAddition, annualReturn, timePeriod, expenseRatio } = inputs;
  const effectiveReturn = annualReturn - expenseRatio;
  const monthlyRate = effectiveReturn / 12 / 100;
  const months = timePeriod * 12;
  
  let totalInvestment = initialInvestment + (monthlyAddition * months);
  
  // Calculate future value of lump sum
  let lumpSumFutureValue = initialInvestment * Math.pow(1 + monthlyRate, months);
  
  // Calculate future value of SIP
  let sipFutureValue = monthlyAddition * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  
  let totalFutureValue = lumpSumFutureValue + sipFutureValue;
  
  const yearlyData: YearlyData[] = [];
  
  for (let year = 1; year <= timePeriod; year++) {
    const monthsCompleted = year * 12;
    const investmentTillDate = initialInvestment + (monthlyAddition * monthsCompleted);
    const lumpSumValueTillDate = initialInvestment * Math.pow(1 + monthlyRate, monthsCompleted);
    const sipValueTillDate = monthlyAddition * ((Math.pow(1 + monthlyRate, monthsCompleted) - 1) / monthlyRate) * (1 + monthlyRate);
    
    yearlyData.push({
      year,
      investment: Math.round(investmentTillDate),
      value: Math.round(lumpSumValueTillDate + sipValueTillDate)
    });
  }
  
  return {
    totalInvestment,
    estimatedReturns: Math.max(0, totalFutureValue - totalInvestment),
    totalValue: totalFutureValue,
    yearlyData
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};
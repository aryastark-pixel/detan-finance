export interface SIPCalculatorInputs {
    monthlyInvestment: number;
    annualReturn: number;
    timePeriod: number;
  }
  
  export interface MutualFundCalculatorInputs {
    initialInvestment: number;
    monthlyAddition: number;
    annualReturn: number;
    timePeriod: number;
    expenseRatio: number;
  }
  
  export interface CalculationResult {
    totalInvestment: number;
    estimatedReturns: number;
    totalValue: number;
    yearlyData: YearlyData[];
  }
  
  export interface YearlyData {
    year: number;
    investment: number;
    value: number;
  }
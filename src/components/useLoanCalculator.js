
import { useState, useEffect } from 'react';
export const useLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(14500000);
  const [loanPeriod, setLoanPeriod] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(100000);

  useEffect(() => {
    const calculatedPayment = Math.round(loanAmount / loanPeriod);
    setMonthlyPayment(calculatedPayment);
  }, [loanAmount, loanPeriod]);

  const handleApplyLoan = () => {
    console.log({
      loanAmount,
      loanPeriod,
      monthlyPayment
    });
  };

  return {
    loanAmount,
    setLoanAmount,
    loanPeriod,
    setLoanPeriod,
    monthlyPayment,
    handleApplyLoan
  };
};

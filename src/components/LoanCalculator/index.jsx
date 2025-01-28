import React from 'react';
import Header from './Header';
import MaximumFunding from './MaximumFunding';
import RangeSlider from './RangeSlider';
import MonthlyPayment from './MonthlyPayment';
import ApplyLoanButton from './ApplyLoan';
import { useLoanCalculator } from '../useLoanCalculator';


const LoanCalculator = () => {
    const {
      loanAmount,
      setLoanAmount,
      loanPeriod,
      setLoanPeriod,
      monthlyPayment,
      handleApplyLoan
    } = useLoanCalculator();
  
    return (
      <div className="max-w-md mx-auto bg-slate-900 min-h-screen p-4">
        <Header />
        <MaximumFunding amount={17484500} />
        <RangeSlider
          label="Loan Amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          min={1500000}
          max={17484500}
          displayValue={`Rp ${new Intl.NumberFormat().format(loanAmount)}`}
          minLabel="1.000.000"
          maxLabel="17.484.500"
        />
        <RangeSlider
          label="Loan Period"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(Number(e.target.value))}
          min={6}
          max={18}
          displayValue={`${loanPeriod} Months`}
          minLabel="6 Months"
          maxLabel="18 Months"
        />
        <MonthlyPayment amount={monthlyPayment} />
        <ApplyLoanButton onClick={handleApplyLoan} />
      </div>
    );
  };
  
  export default LoanCalculator;
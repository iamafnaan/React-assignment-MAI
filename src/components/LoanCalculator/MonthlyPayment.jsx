
import React from 'react';

const MonthlyPayment = ({ amount }) => {
  return (
    <div className="mb-4">
      <p className="text-slate-400 mb-2">Estimated monthly installments</p>
      <p className="text-white text-2xl font-bold">
        Rp {new Intl.NumberFormat().format(amount)}
      </p>
      <p className="text-slate-400 text-xs mt-2">
        Installment fees may change according to the results of the verification of the physical condition of the vehicle at the branch office.
      </p>
    </div>
  );
};

export default MonthlyPayment;
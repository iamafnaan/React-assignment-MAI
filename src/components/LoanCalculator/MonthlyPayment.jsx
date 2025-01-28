
import React from 'react';
const MonthlyPayment = ({ amount }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#94A3B8', marginBottom: '8px' }}>Estimated monthly installments</p>
      <p style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        Rp {new Intl.NumberFormat().format(amount)}
      </p>
      <p style={{ color: '#94A3B8', fontSize: '12px', marginTop: '8px' }}>
        Installment fees may change according to the results of the verification of the physical condition of the vehicle at the branch office.
      </p>
    </div>
  );
};
export default MonthlyPayment;

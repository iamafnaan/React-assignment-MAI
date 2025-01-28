
import React from 'react';
const ApplyLoan = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: '100%', backgroundColor: '#22D3EE', color: 'white', padding: '16px', borderRadius: '8px', fontWeight: '500' }}
    >
      APPLY LOAN
    </button>
  );
};
export default ApplyLoan;
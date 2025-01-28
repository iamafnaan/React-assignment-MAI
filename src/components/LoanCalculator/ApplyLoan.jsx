
import React from 'react';

const ApplyLoanButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-cyan-400 text-white py-4 rounded-lg font-medium hover:bg-cyan-500 transition-colors"
    >
      APPLY LOAN
    </button>
  );
};

export default ApplyLoanButton;
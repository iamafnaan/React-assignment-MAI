

import React from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <ChevronLeft className="w-6 h-6 text-white" />
        <h1 className="text-xl text-white ml-2">Loan Calculator</h1>
      </div>
      <MoreVertical className="w-6 h-6 text-white" />
    </div>
  );
};

export default Header;
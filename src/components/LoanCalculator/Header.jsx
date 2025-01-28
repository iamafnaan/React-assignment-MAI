
import React from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ChevronLeft style={{ width: '24px', height: '24px', color: 'white' }} />
        <h1 style={{ fontSize: '20px', color: 'white', marginLeft: '8px' }}>Loan Calculator</h1>
      </div>
      <MoreVertical style={{ width: '24px', height: '24px', color: 'white' }} />
    </div>
  );
};
export default Header;
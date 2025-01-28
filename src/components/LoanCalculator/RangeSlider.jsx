

import React from 'react';
const RangeSlider = ({ label, value, onChange, min, max, displayValue, minLabel, maxLabel }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <p style={{ color: '#94A3B8', marginBottom: '8px' }}>{label}</p>
      <p style={{ color: 'white', fontSize: '20px', marginBottom: '12px' }}>{displayValue}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        style={{ width: '100%', height: '8px', backgroundColor: '#334155', borderRadius: '4px', cursor: 'pointer' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};
export default RangeSlider;

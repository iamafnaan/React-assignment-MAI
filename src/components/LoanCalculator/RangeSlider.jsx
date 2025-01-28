
import React from 'react';

const RangeSlider = ({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  displayValue, 
  minLabel, 
  maxLabel 
}) => {
  return (
    <div className="mb-6">
      <p className="text-slate-400 mb-2">{label}</p>
      <p className="text-white text-xl mb-3">{displayValue}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
      />
      <div className="flex justify-between text-slate-400 text-sm mt-1">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
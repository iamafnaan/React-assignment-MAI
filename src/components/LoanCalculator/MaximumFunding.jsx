import React from 'react';
import { Card } from '@/components/ui/card';

const MaximumFunding = ({ amount }) => {
  return (
    <Card className="bg-slate-800 p-4 mb-6 rounded-xl">
      <p className="text-slate-400 text-sm mb-2">Maximum Funding</p>
      <h2 className="text-2xl text-white font-bold mb-3">
        Rp {new Intl.NumberFormat().format(amount)}
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white">Honda ADV 150 CBS</p>
          <p className="text-slate-400 text-sm">2022</p>
        </div>
        <div className="flex gap-0.5">
          <div className="w-1 h-4 bg-cyan-400 rounded"></div>
          <div className="w-1 h-4 bg-cyan-400 rounded"></div>
          <div className="w-1 h-4 bg-cyan-400 rounded"></div>
        </div>
      </div>
    </Card>
  );
};

export default MaximumFunding;
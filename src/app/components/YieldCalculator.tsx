import React from 'react';
import { ChevronDown } from 'lucide-react';

const YieldCalculator: React.FC = () => {
  const data = [30500, 31000, 30700, 30600, 30550, 30500, 30600];
  const weekData = Array(50).fill(0).map(() => Math.random() * 10);

  const SimpleChart: React.FC<{ data: number[], color: string }> = ({ data, color }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return (
      <svg className="w-full h-full" viewBox={`0 0 ${data.length} 100`}>
        <path
          d={data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i} ${100 - ((d - min) / (max - min)) * 100}`).join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    );
  };

  return (
    <div className="bg-gray-900 text-white p-6 w-full rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Yield Calculator</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">NCT price (USD)</p>
          <p className="text-xl font-bold">$30,457.66</p>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <p className="text-sm text-gray-400">NCT TVL</p>
          <p className="text-xl font-bold">$30,457.66</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-bold">$30,457.66</p>
          <p className="text-sm text-yellow-500">▼ 0.6%</p>
        </div>
        <div className="h-40">
          <SimpleChart data={data} color="#D97706" />
        </div>
        <div className="flex justify-between mt-2">
          <button className="bg-yellow-600 text-xs px-2 py-1 rounded-full">1H</button>
          {['24H', '7D', '1M', '3M', '1Y', 'MAX'].map((period) => (
            <button key={period} className="text-xs px-2 py-1 rounded-full">{period}</button>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-400 mb-1">Real Time Vault APY</p>
        <p className="text-4xl font-bold">8.16%</p>
      </div>
      
      <div className="bg-gray-800 rounded-lg">
        <div className="p-4 flex justify-between items-center">
          <p className="text-sm">Avg. over the past week</p>
          <div className="flex items-center">
            <p className="mr-1">8.51%</p>
            <ChevronDown size={16} />
          </div>
        </div>
        <div className="h-24 px-4 pb-4">
          <SimpleChart data={weekData} color="#D97706" />
        </div>
      </div>
    </div>
  );
};

export default YieldCalculator;
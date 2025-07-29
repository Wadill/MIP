import React from 'react';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const HedgingTools: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <ArrowTrendingUpIcon className="h-6 w-6 mr-2" />
        Hedging Tools
      </h3>
      <p className="text-gray-300 mb-4">
        Hedge your mining rewards with futures or options on Citrea’s zk-rollup.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Futures Contract</label>
          <input
            type="number"
            placeholder="Enter amount (cBTC)"
            className="w-full p-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Options Contract</label>
          <select className="w-full p-2 bg-gray-700 rounded-lg text-white">
            <option>Call Option</option>
            <option>Put Option</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          Execute Hedge
        </button>
      </div>
    </div>
  );
};

export default HedgingTools;
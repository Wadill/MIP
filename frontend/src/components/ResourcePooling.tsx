import React from 'react';
import { UsersIcon } from '@heroicons/react/24/outline';

const ResourcePooling: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <UsersIcon className="h-6 w-6 mr-2" />
        Resource Pooling
      </h3>
      <p className="text-gray-300 mb-4">
        Join or create mining pools to share resources and stabilize rewards.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Pool Name</label>
          <input
            type="text"
            placeholder="Enter pool name"
            className="w-full p-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contribution (cBTC)</label>
          <input
            type="number"
            placeholder="Enter contribution"
            className="w-full p-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          Join Pool
        </button>
      </div>
    </div>
  );
};

export default ResourcePooling;
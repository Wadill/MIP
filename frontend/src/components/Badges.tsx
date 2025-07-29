import React from 'react';
import { TrophyIcon } from '@heroicons/react/24/outline';

const Badges: React.FC = () => {
  const badges = [
    { name: 'Top Miner', description: 'Awarded for consistent mining contributions.' },
    { name: 'Network Supporter', description: 'Earned for validating 100+ blocks.' },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <TrophyIcon className="h-6 w-6 mr-2" />
        Social Rewards
      </h3>
      <p className="text-gray-300 mb-4">
        Earn badges for your contributions to the Bitcoin network via Citrea.
      </p>
      <div className="space-y-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-yellow-500 text-gray-900 p-2 rounded-full">
              <TrophyIcon className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium">{badge.name}</h4>
              <p className="text-sm text-gray-400">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges

;
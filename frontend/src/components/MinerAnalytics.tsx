import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface AnalyticsData {
  blocksMined: number;
  reward: number;
}

const MinerAnalytics: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({ blocksMined: 0, reward: 0 });

  useEffect(() => {
    // Mock Blocksense data retrieval
    axios
      .get<AnalyticsData>('https://api.blocksense.mock/miner-data')
      .then((response) => setAnalytics(response.data))
      .catch((error: Error) => console.error('Error fetching analytics:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Miner Analytics</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>Blocks Mined: {analytics.blocksMined}</p>
        <p>Reward: ${analytics.reward.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MinerAnalytics;
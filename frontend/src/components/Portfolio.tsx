import React, { useState } from 'react';
import axios from 'axios';

const Portfolio: React.FC = () => {
  const [prices, setPrices] = useState({ BTC: 0, ETH: 0 });

  React.useEffect(() => {
    // Mock Redstone API call for real-time prices
    axios.get('https://api.redstone.finance/prices?symbol=BTC,ETH')
      .then(response => setPrices(response.data.data))
      .catch(error => console.error('Error fetching prices:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Portfolio</h3>
      <div className="bg-pastel-green p-4 rounded-md text-green-800">
        <p>BTC: ${prices.BTC.toFixed(2)}</p>
        <p>ETH: ${prices.ETH.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Portfolio;
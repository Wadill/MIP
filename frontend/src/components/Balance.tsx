import React from 'react';

const Balance: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Balance</h3>
      <div className="bg-pastel-blue p-4 rounded-md text-pastel-blue">
        <p className="font-bold">Total cBTC</p>
        <p className="text-2xl font-bold">$3,445.0</p>
      </div>
    </div>
  );
};

export default Balance;
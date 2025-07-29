import React from 'react';

const Accounts: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Accounts</h3>
      <div className="bg-pastel-pink p-4 rounded-md text-white">
        <p className="font-bold">Miner Wallet</p>
        <p>**** **** **** 1234</p>
        <p>Total Revenue: $3,445.0</p>
      </div>
    </div>
  );
};

export default Accounts;
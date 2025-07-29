import React, { useState } from 'react';

const Transactions: React.FC = () => {
  const [amount, setAmount] = useState(0);

  // Mock Stork transaction processing
  const handleTransaction = () => {
    console.log(`Processing ${amount} cBTC transaction via Stork...`);
    // Placeholder for Stork integration
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">Transactions</h3>
      <div className="bg-pastel-blue p-4 rounded-md text-pastel-blue">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter cBTC amount"
        />
        <button
          onClick={handleTransaction}
          className="mt-4 w-full bg-pastel-pink text-white px-4 py-2 rounded-md hover:bg-pink-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Transactions;
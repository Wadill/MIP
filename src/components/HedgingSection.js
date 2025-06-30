import React, { useState } from 'react';
import { ethers } from 'ethers';

const HedgingSection = ({ account, contract }) => {
  const [hedgeAmount, setHedgeAmount] = useState('');

  const placeHedge = async () => {
    if (!contract || !hedgeAmount) return;
    try {
      const tx = await contract.placeHedge({ value: ethers.parseEther(hedgeAmount) });
      await tx.wait();
      setHedgeAmount('');
      alert('Hedge placed successfully!');
    } catch (error) {
      console.error('Error placing hedge:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Hedging Tools</h3>
      <p>Place a futures contract to hedge your mining rewards.</p>
      <input
        type="text"
        value={hedgeAmount}
        onChange={(e) => setHedgeAmount(e.target.value)}
        placeholder="Hedge amount (cBTC)"
        className="border p-2 rounded w-full mt-2"
      />
      <button
        onClick={placeHedge}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        disabled={!account || !hedgeAmount}
      >
        Place Hedge
      </button>
    </div>
  );
};

export default HedgingSection;
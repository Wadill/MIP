import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const PoolSection = ({ account, contract }) => {
  const [pools, setPools] = useState([]);
  const [stakeAmount, setStakeAmount] = useState('');

  const fetchPools = async () => {
    if (!contract) return;
    try {
      const poolCount = await contract.poolCount();
      const poolList = [];
      for (let i = 1; i <= poolCount; i++) {
        const [creator, totalStake, active] = await contract.getPoolDetails(i);
        poolList.push({ id: i, creator, totalStake: ethers.formatEther(totalStake), active });
      }
      setPools(poolList);
    } catch (error) {
      console.error('Error fetching pools:', error);
    }
  };

  const createPool = async () => {
    if (!contract) return;
    try {
      const tx = await contract.createPool();
      await tx.wait();
      fetchPools();
    } catch (error) {
      console.error('Error creating pool:', error);
    }
  };

  const stakeInPool = async (poolId) => {
    if (!contract || !stakeAmount) return;
    try {
      const tx = await contract.stakeInPool(poolId, { value: ethers.parseEther(stakeAmount) });
      await tx.wait();
      fetchPools();
      setStakeAmount('');
    } catch (error) {
      console.error('Error staking:', error);
    }
  };

  useEffect(() => {
    fetchPools();
  }, [contract]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Mining Pools</h3>
      <button
        onClick={createPool}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        disabled={!account}
      >
        Create Pool
      </button>
      <div className="space-y-4">
        {pools.map((pool) => (
          <div key={pool.id} className="border p-4 rounded">
            <p>Pool ID: {pool.id}</p>
            <p>Creator: {pool.creator.slice(0, 6)}...{pool.creator.slice(-4)}</p>
            <p>Total Stake: {pool.totalStake} cBTC</p>
            <p>Status: {pool.active ? 'Active' : 'Inactive'}</p>
            <input
              type="text"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              placeholder="Amount to stake (cBTC)"
              className="border p-2 rounded w-full mt-2"
            />
            <button
              onClick={() => stakeInPool(pool.id)}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
              disabled={!account || !stakeAmount}
            >
              Stake
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolSection;
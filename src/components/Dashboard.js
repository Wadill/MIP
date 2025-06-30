import React from 'react';
import PoolSection from './PoolSection';
import HedgingSection from './HedgingSection';
import BadgesSection from './BadgesSection';

const Dashboard = ({ account, contract }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Miners' Incentive Platform</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PoolSection account={account} contract={contract} />
        <HedgingSection account={account} contract={contract} />
        <BadgesSection account={account} contract={contract} />
      </div>
    </div>
  );
};

export default Dashboard;
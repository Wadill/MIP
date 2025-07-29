import React from 'react';
import Accounts from './Accounts';
import Balance from './Balance';
import Portfolio from './Portfolio';
import Transactions from './Transactions';
import MinerAnalytics from './MinerAnalytics';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">MIP Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Accounts />
        <Balance />
        <Portfolio />
        <Transactions />
        <MinerAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;
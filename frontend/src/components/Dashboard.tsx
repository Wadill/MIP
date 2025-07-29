import React from 'react';
import HedgingTools from './HedgingTools';
import ResourcePooling from './ResourcePooling';
import Badges from './Badges';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Miners' Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HedgingTools />
        <ResourcePooling />
        <Badges />
      </div>
    </div>
  );
};

export default Dashboard;
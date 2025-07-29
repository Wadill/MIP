import React from 'react';
import { WalletIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MIP - Miners' Incentive Platform</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            <WalletIcon className="h-5 w-5 mr-2" />
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
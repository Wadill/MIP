import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Header = ({ setAccount }) => {
  const [account, setLocalAccount] = useState(null);
  const [network, setNetwork] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const network = await provider.getNetwork();
        setLocalAccount(accounts[0]);
        setAccount(accounts[0]);
        setNetwork(network.name);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setLocalAccount(accounts[0] || null);
        setAccount(accounts[0] || null);
      });
      window.ethereum.on('chainChanged', () => window.location.reload());
    }
  }, [setAccount]);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MIP</h1>
      <div>
        {account ? (
          <span className="text-sm">
            Connected: {account.slice(0, 6)}...{account.slice(-4)} | Network: {network || 'Unknown'}
          </span>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
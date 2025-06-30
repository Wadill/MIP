import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import abi from './abi.json';

const App = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initContract = async () => {
      if (window.ethereum && account) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || 'YOUR_CONTRACT_ADDRESS'; // Use env or fallback
          const contractInstance = new ethers.Contract(contractAddress, abi, signer);
          setContract(contractInstance);
        } catch (error) {
          console.error('Error initializing contract:', error);
        }
      }
    };
    initContract();
  }, [account]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setAccount={setAccount} />
      {account ? (
        <Dashboard account={account} contract={contract} />
      ) : (
        <div className="text-center py-10">
          <p className="text-xl">Please connect your wallet to use MIP.</p>
        </div>
      )}
    </div>
  );
};

export default App;
import { ethers } from 'ethers';

export const initContract = async (account) => {
  if (window.ethereum && account) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || 'YOUR_CONTRACT_ADDRESS';
      const abi = require('../abi.json');
      return new ethers.Contract(contractAddress, abi, signer);
    } catch (error) {
      console.error('Error initializing contract:', error);
      return null;
    }
  }
  return null;
};
const express = require('express');
const Web3 = require('web3');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const web3 = new Web3('https://rpc.testnet.citrea.xyz'); // Citrea Testnet RPC

// Mock Redstone API endpoint
app.get('/api/prices', async (req, res) => {
  try {
    const response = await axios.get('https://api.redstone.finance/prices?symbol=BTC,ETH');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Mock Blocksense endpoint
app.get('/api/miner-data', (req, res) => {
  res.json({ blocksMined: 50, reward: 100.50 });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
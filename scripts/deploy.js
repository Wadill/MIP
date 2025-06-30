const hre = require("hardhat");

async function main() {
  const MIP = await hre.ethers.getContractFactory("MIP");
  const mip = await MIP.deploy();
  await mip.deployed();
  console.log("MIP deployed to:", mip.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MIP", function () {
  let MIP, mip, owner, addr1;

  beforeEach(async function () {
    MIP = await ethers.getContractFactory("MIP");
    [owner, addr1] = await ethers.getSigners();
    mip = await MIP.deploy();
    await mip.deployed();
  });

  it("Should create a pool", async function () {
    await mip.createPool();
    expect(await mip.poolCount()).to.equal(1);
  });

  it("Should allow staking", async function () {
    await mip.createPool();
    await mip.stakeInPool(1, { value: ethers.parseEther("1.0") });
    const [creator, totalStake, active] = await mip.getPoolDetails(1);
    expect(totalStake).to.equal(ethers.parseEther("1.0"));
  });
});
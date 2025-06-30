// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract MIP {
    address public owner;
    uint256 public poolCount;
    uint256 public badgeCount;

    struct Pool {
        uint256 id;
        address creator;
        uint256 totalStake;
        mapping(address => uint256) stakes;
        bool active;
    }

    struct Badge {
        uint256 id;
        address recipient;
        string metadata;
    }

    mapping(uint256 => Pool) public pools;
    mapping(uint256 => Badge) public badges;
    mapping(address => uint256[]) public userBadges;

    mapping(address => uint256) public hedges;
    uint256 public constant HEDGE_PRICE = 0.01 ether;

    event PoolCreated(uint256 poolId, address creator);
    event Staked(uint256 poolId, address staker, uint256 amount);
    event BadgeAwarded(uint256 badgeId, address recipient, string metadata);
    event HedgePlaced(address user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function createPool() external {
        poolCount++;
        pools[poolCount] = Pool(poolCount, msg.sender, 0, true);
        emit PoolCreated(poolCount, msg.sender);
    }

    function stakeInPool(uint256 _poolId) external payable {
        require(pools[_poolId].active, "Pool not active");
        pools[_poolId].stakes[msg.sender] += msg.value;
        pools[_poolId].totalStake += msg.value;
        emit Staked(_poolId, msg.sender, msg.value);
    }

    function placeHedge() external payable {
        require(msg.value >= HEDGE_PRICE, "Insufficient cBTC");
        hedges[msg.sender] += msg.value;
        emit HedgePlaced(msg.sender, msg.value);
    }

    function awardBadge(address _recipient, string memory _metadata) external {
        require(msg.sender == owner, "Only owner can award badges");
        badgeCount++;
        badges[badgeCount] = Badge(badgeCount, _recipient, _metadata);
        userBadges[_recipient].push(badgeCount);
        emit BadgeAwarded(badgeCount, _recipient, _metadata);
    }

    function getUserBadges(address _user) external view returns (uint256[] memory) {
        return userBadges[_user];
    }

    function getPoolDetails(uint256 _poolId) external view returns (address creator, uint256 totalStake, bool active) {
        Pool storage pool = pools[_poolId];
        return (pool.creator, pool.totalStake, pool.active);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
}

contract DailyCheckInAttestation {
    IERC20 public immutable GMMC;
    address public owner;

    uint256 public constant DAY = 1 days;
    uint256 public rewardAmount = 5 * 1e18;

    struct CheckIn {
        uint256 lastDay;
        uint256 streak;
        uint256 total;
    }

    mapping(address => CheckIn) public checkIns;

    event CheckedIn(
        address indexed user,
        uint256 day,
        uint256 streak,
        uint256 total
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(address _gmmc, address _owner) {
        GMMC = IERC20(_gmmc);
        owner = _owner;
    }

    function checkIn() external {
        uint256 today = block.timestamp / DAY;
        CheckIn storage c = checkIns[msg.sender];

        require(c.lastDay < today, "Already checked in");

        if (c.lastDay == today - 1) {
            c.streak++;
        } else {
            c.streak = 1;
        }

        c.lastDay = today;
        c.total++;

        GMMC.transfer(msg.sender, rewardAmount);

        emit CheckedIn(msg.sender, today, c.streak, c.total);
    }

    function setReward(uint256 amount) external onlyOwner {
        rewardAmount = amount;
    }
}

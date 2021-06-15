//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract JetToken is ERC20 {
    constructor(string memory name, string memory symbol, uint numTokens) ERC20(name, symbol) {
        _mint(msg.sender, numTokens * (10 ** 18));
    }
}

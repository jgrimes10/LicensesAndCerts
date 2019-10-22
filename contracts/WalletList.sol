pragma solidity ^0.5.0;

contract WalletList {

    address[] public wallets;

    struct Wallet {
        uint id;
        string firstName;
        string lastName;
        string walletAddress;
        bool deleted;
    }

    function saveWallet() {

    }

    function removeWallet() {

    }

    function getWallets() {

    }
}
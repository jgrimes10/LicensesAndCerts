pragma solidity ^0.5.0;

contract WalletList {

    address[] public walletList;

    uint public walletCount = 0;

    struct Wallet {
        uint id;
        string firstName;
        string lastName;
        address walletAddress;
        bool deleted;
    }

    mapping(uint => Wallet) public wallets;

    event addWalletToList(
        uint id,
        string firstName,
        string lastName,
        address walletAddress,
        bool deleted
    );

    function addWallet(string memory _firstName, string memory _lastName, address _walletAddressToAdd) public {
    walletCount++;
    wallets[walletCount] = Wallet(walletCount, _firstName, _lastName, _walletAddressToAdd, false);
    emit addWalletToList(walletCount, _firstName, _lastName, _walletAddressToAdd, false);
    }

    event removeWalletFromList(
        uint id
    );

    event getWalletByAddress(
        uint id,
        string firstName,
        string lastName,
        address walletAddress,
        bool deleted
    );

    function removeWallet() {

    }

    function getWallet() {

    }
}
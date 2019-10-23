pragma solidity ^0.5.0;

contract WalletList {

    constructor() public {
        addWallet("firstname1", "lastname1", 0xb3848590f10e042C47448d17A44c6bD66762A25c);
    }

    mapping(uint => Wallet) public wallet;

    uint public walletCount = 0;

    struct Wallet {
        uint id;
        string firstName;
        string lastName;
        address walletAddress;
        bool deleted;
    }

    event addWalletToList(
        uint id,
        string firstName,
        string lastName,
        address walletAddress,
        bool deleted
    );

    function addWallet(string memory _firstName, string memory _lastName, address _walletAddressToAdd) public {
    walletCount++;
    wallet[walletCount] = Wallet(walletCount, _firstName, _lastName, _walletAddressToAdd, false);
    emit addWalletToList(walletCount, _firstName, _lastName, _walletAddressToAdd, false);
    }

    event removeWalletFromList(
        uint id,
        bool deleted
    );

    function removeWallet(uint _idToRemove) public {
        Wallet memory _walletToBeRemoved = wallet[_idToRemove];
        _walletToBeRemoved.deleted = true;
        emit removeWalletFromList(_idToRemove, _walletToBeRemoved.deleted);
    }
}
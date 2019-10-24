export const LICENSE_LIST_ADDRESS = '0x689E0d515a90f5F80b4494c3DCB4F0bb95d12f7d';

export const LICENSE_LIST_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "walletCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "wallet",
        "outputs": [
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "firstName",
                "type": "string"
            },
            {
                "name": "lastName",
                "type": "string"
            },
            {
                "name": "walletAddress",
                "type": "address"
            },
            {
                "name": "deleted",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "firstName",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "lastName",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "walletAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "deleted",
                "type": "bool"
            }
        ],
        "name": "addWalletToList",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "deleted",
                "type": "bool"
            }
        ],
        "name": "removeWalletFromList",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_firstName",
                "type": "string"
            },
            {
                "name": "_lastName",
                "type": "string"
            },
            {
                "name": "_walletAddressToAdd",
                "type": "address"
            }
        ],
        "name": "addWallet",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_idToRemove",
                "type": "uint256"
            }
        ],
        "name": "removeWallet",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
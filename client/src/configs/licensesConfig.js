export const LICENSES_LIST_ADDRESS = '0xf4A8318f4f00B7D2Fe758654a76057290a258c75';

export const LICENSES_LIST_ABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "licenseAndCertCount",
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
      "name": "licenses",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "professionalRole",
          "type": "string"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "licenseName",
          "type": "string"
        },
        {
          "name": "totalHoursRequired",
          "type": "uint256"
        },
        {
          "name": "totalOnlineHoursAccepted",
          "type": "uint256"
        },
        {
          "name": "renewalPeriod",
          "type": "uint256"
        },
        {
          "name": "reminder",
          "type": "uint256"
        },
        {
          "name": "professionalNumber",
          "type": "string"
        },
        {
          "name": "nextRenewalDate",
          "type": "uint256"
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
          "name": "professionalRole",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "licenseName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "totalHoursRequired",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalOnlineHoursAccepted",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "renewalPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "reminder",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "professionalNumber",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "nextRenewalDate",
          "type": "uint256"
        }
      ],
      "name": "LicenseCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "LicenseRemoved",
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
          "name": "professionalRole",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "licenseName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "totalHoursRequired",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalOnlineHoursAccepted",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "renewalPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "reminder",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "professionalNumber",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "nextRenewalDate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "deleted",
          "type": "bool"
        }
      ],
      "name": "LicenseUpdated",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_professionalRole",
          "type": "string"
        },
        {
          "name": "_state",
          "type": "string"
        },
        {
          "name": "_licenseName",
          "type": "string"
        },
        {
          "name": "_totalHoursRequired",
          "type": "uint256"
        },
        {
          "name": "_totalOnlineHoursAccepted",
          "type": "uint256"
        },
        {
          "name": "_renewalPeriod",
          "type": "uint256"
        },
        {
          "name": "_reminder",
          "type": "uint256"
        },
        {
          "name": "_professionalNumber",
          "type": "string"
        },
        {
          "name": "_nextRenewalDate",
          "type": "uint256"
        }
      ],
      "name": "addLicense",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "removeLicense",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "editLicense",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

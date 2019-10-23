const walletList = artifacts.require("../contracts/WalletList.sol");

module.exports = function (deployer) {
    deployer.deploy(walletList);
};
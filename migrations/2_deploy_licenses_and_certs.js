const LicensesAndCerts = artifacts.require('../contracts/LicenseAndCert.sol');

module.exports = function(deployer) {
    deployer.deploy(LicensesAndCerts);
}

pragma solidity >=0.4.21 <0.6.0;

contract LicenseAndCert {
    uint public licenseAndCertCount = 0;

    struct License {
        uint id;
        string professionalRole;
        string state;
        string licenseName;
        uint totalHoursRequired;
        uint totalOnlineHoursAccepted;
        uint renewalPeriod;
        uint reminder;
        string professionalNumber;
        uint nextRenewalDate;
        bool deleted;
    }

    mapping(uint => License) public licenses;

    event LicenseCreated (
        uint id,
        string professionalRole,
        string state,
        string licenseName,
        uint totalHoursRequired,
        uint totalOnlineHoursAccepted,
        uint renewalPeriod,
        uint reminder,
        string professionalNumber,
        uint nextRenewalDate
    );

    event LicenseRemoved (
        uint id
    );

    event LicenseUpdated (
        uint id,
        string professionalRole,
        string state,
        string licenseName,
        uint totalHoursRequired,
        uint totalOnlineHoursAccepted,
        uint renewalPeriod,
        uint reminder,
        string professionalNumber,
        uint nextRenewalDate,
        bool deleted
    );

    // Runs once, upon deployment
    constructor() public {
        // Seed the starting data here
        addLicense("My frist license", "NC", "The best license", 100, 85, 12, 8, "9x8747839hg1", now);
    }

    function addLicense(string memory _professionalRole, string memory _state,
        string memory _licenseName, uint _totalHoursRequired,
        uint _totalOnlineHoursAccepted, uint _renewalPeriod,
        uint _reminder, string memory _professionalNumber, uint _nextRenewalDate) public {
        // Increase the counter for the next ID number
        licenseAndCertCount ++;

        // Create the new License w/ the variables passed in
        licenses[licenseAndCertCount] = License(licenseAndCertCount, _professionalRole, _state, _licenseName,
            _totalHoursRequired, _totalOnlineHoursAccepted, _renewalPeriod, _reminder, _professionalNumber, _nextRenewalDate, false);

        // Emit the event
        emit LicenseCreated(licenseAndCertCount, _professionalRole, _state, _licenseName,
            _totalHoursRequired, _totalOnlineHoursAccepted, _renewalPeriod, _reminder, _professionalNumber, _nextRenewalDate);
    }

    function removeLicense(uint _id) public {
        License memory _license = licenses[_id];
        _license.deleted = true;

        licenses[_id] = _license;

        emit LicenseRemoved(_id);
    }

    function editLicense(string memory _content) public {

    }
}

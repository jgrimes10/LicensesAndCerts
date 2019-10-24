import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { NewLicenseModalComponent } from '../new-license-modal/new-license-modal.component';
import { LicenseData } from 'src/app/models/license.model';
import { LicenseToSendData } from 'src/app/models/licenseToSend.model';

import { WEB3 } from '../../web3';
import Web3 from 'web3';
import { LICENSE_LIST_ADDRESS, LICENSE_LIST_ABI } from '../../config/licenseList.config.js';
import { Contract } from 'web3-eth-contract';
import { asciiToHex } from 'web3-utils';

@Component({
  selector: 'app-licenselist',
  templateUrl: './licenselist.component.html',
  styleUrls: ['./licenselist.component.scss']
})
export class LicenselistComponent implements OnInit {

  license: LicenseData = {
    id: 1,
    professionalRole: 'test',
    state: 'NC',
    licenseName: 'test license name',
    totalHoursRequired: 222,
    totalOnlineHoursAccepted: 34,
    renewalPeriod: 12,
    reminder: 3,
    professionalNumber: 'test prof #',
    nextRenewalDate: 12,
    deleted: false
  };

  numberOfLicenses = 0;
  public accounts: any;
  allLicenses: LicenseData[] = [];
  licenseList: Contract;
  activeLicenseCount = 0;

  constructor(
    public dialog: MatDialog,
    @Inject(WEB3) private web3: Web3
  ) { }

  async ngOnInit() {
    const accounts = await this.web3.eth.getAccounts();
    this.accounts = accounts;

    await this.getLicenseList();
  }

  async getLicenseList() {
    const licenseList = new this.web3.eth.Contract(LICENSE_LIST_ABI, LICENSE_LIST_ADDRESS, {
      // this is just a default so you don't have to enter it every time you want to call 'send()' on a smart contract method
      from: this.accounts[0],
      gasPrice: '2000'
    });
    this.licenseList = licenseList;

    // get the total number if licenses (including "deleted")
    const licenseCount = await licenseList.methods.licenseAndCertCount().call();
    this.numberOfLicenses = licenseCount;

    // empty the all license array for refresh
    this.allLicenses = [];

    // loop through the array of license in blockchain and pull each one
    for (let index = 1; index <= this.numberOfLicenses; index++) {
      const license = await licenseList.methods.licenses(index).call();

      this.allLicenses.push(license);
      if (license.deleted !== true) {
        this.activeLicenseCount++;
      }
    }
  }

  async addLicenseToBlockchain(license: LicenseToSendData) {
    const result = await this.licenseList.methods.addLicense(
      license.professionalRole,
      license.state,
      license.licenseName,
      license.totalHoursRequired,
      license.totalOnlineHoursAccepted,
      license.renewalPeriod,
      license.reminder,
      license.professionalNumber,
      license.nextRenewalDate).send();
  }

  openNewLicenseDialog(): void {
    const newLicenseDialogRef = this.dialog.open(NewLicenseModalComponent, {
      width: '700px',
      data: {
        license: this.license
      }
    });

    newLicenseDialogRef.afterClosed().subscribe(result => {
      if (!result || result.state === undefined) {
        console.log('error');
        return;
      }

      const addResult = this.addLicenseToBlockchain(result);
    });
  }

  async addTest() {
    const licenseToAdd: LicenseToSendData = {
      professionalRole: 'test',
      state: 'NC',
      licenseName: 'test',
      totalHoursRequired: 100,
      totalOnlineHoursAccepted: 50,
      renewalPeriod: 10,
      reminder: 100,
      professionalNumber: 'fjdkskjf323',
      nextRenewalDate: 232342
    };

    console.log(this.accounts[0]);

    this.licenseList.methods.addLicense(
      licenseToAdd.professionalRole,
      licenseToAdd.state,
      licenseToAdd.licenseName,
      licenseToAdd.totalHoursRequired,
      licenseToAdd.totalOnlineHoursAccepted,
      licenseToAdd.renewalPeriod,
      licenseToAdd.reminder,
      licenseToAdd.professionalNumber,
      licenseToAdd.nextRenewalDate
    ).send(function (error, hash) {
      if (error) {
        console.log(error);
      } else {
        console.log('Adding license result: ' + hash);
      }
    });
  }

  async deleteLicense(id: number) {
    this.licenseList.methods.removeLicense(id).send(function (error, hash) {
      if (error) {
        console.log(error);
      } else {
        console.log('Deleting license result: ' + hash);
      }
    });
  }

  openConfirm(license: LicenseData): void {
    const confirmDialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: { licenseToDelete: license.licenseName }
    });

    confirmDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        this.deleteLicense(license.id);
      }
    });
  }
}

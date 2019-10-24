import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { NewLicenseModalComponent } from '../new-license-modal/new-license-modal.component';
import { LicenseData } from 'src/app/models/license.model';

import { WEB3 } from '../../web3';
import Web3 from 'web3';
import { LICENSE_LIST_ADDRESS, LICENSE_LIST_ABI } from '../../config/licenseList.config.js';

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

  constructor(
    public dialog: MatDialog,
    @Inject(WEB3) private web3: Web3
  ) { }

  async ngOnInit() {
    const accounts = await this.web3.eth.getAccounts();
    this.accounts = accounts;

    const licenseList = new this.web3.eth.Contract(LICENSE_LIST_ABI, LICENSE_LIST_ADDRESS);
    const licenseCount = await licenseList.methods.licenseAndCertCount().call();
    this.numberOfLicenses = licenseCount;
    console.log(this.numberOfLicenses);

    for (let index = 1; index <= this.numberOfLicenses; index++) {
      const license = await licenseList.methods.licenses(index).call();

      console.log(license.professionalRole);

      this.allLicenses.push(license);
      console.log(this.allLicenses);
    }
  }

  openNewLicenseDialog(): void {
    const newLicenseDialogRef = this.dialog.open(NewLicenseModalComponent, {
      width: '700px',
      data: {
        license: this.license
      }
    });

    newLicenseDialogRef.afterClosed().subscribe(result => {
      console.log('New dialog closed');
      if (!result || result.state === undefined) {
        console.log('error');
        return;
      }

      console.log(result);
    });
  }

  openConfirm(): void {
    const confirmDialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      data: { licenseToDelete: this.license }
    });

    confirmDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        console.log('Deleting');
      }
    });
  }
}

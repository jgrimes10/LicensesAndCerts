import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { NewLicenseModalComponent } from '../new-license-modal/new-license-modal.component';
import { LicenseData } from 'src/app/models/license.model';

// import * as States from '../../models/states';

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

  // states = States.States;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // let name = 'alabama';
    // name = name.toUpperCase();

    // for (let state of this.states) {
    //   if (state.name === name) {
    //     console.log(state.abbreviation);
    //   }
    // }
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

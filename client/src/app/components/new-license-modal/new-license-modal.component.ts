import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LicenseData } from '../../models/license.model';
import * as States from '../../models/states';

@Component({
  selector: 'app-new-license-modal',
  templateUrl: './new-license-modal.component.html',
  styleUrls: ['./new-license-modal.component.scss']
})
export class NewLicenseModalComponent {

  states = States.States;
  licenseToSend = {} as LicenseData;

  constructor(
    public dialogRef: MatDialogRef<NewLicenseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public license: LicenseData
  ) {
    this.licenseToSend.deleted = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

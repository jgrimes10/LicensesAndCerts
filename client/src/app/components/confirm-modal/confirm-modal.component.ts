import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  constructor(
      public dialogRef: MatDialogRef<ConfirmModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

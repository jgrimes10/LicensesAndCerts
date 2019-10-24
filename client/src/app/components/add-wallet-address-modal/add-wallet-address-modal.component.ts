import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-wallet-address-modal',
  templateUrl: './add-wallet-address-modal.component.html',
  styleUrls: ['./add-wallet-address-modal.component.scss']
})
export class AddWalletAddressModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddWalletAddressModalComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

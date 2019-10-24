import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { WalletDataToSend } from 'src/app/models/walletDataToSend.model';

@Component({
  selector: 'app-add-wallet-address-modal',
  templateUrl: './add-wallet-address-modal.component.html',
  styleUrls: ['./add-wallet-address-modal.component.scss']
})
export class AddWalletAddressModalComponent implements OnInit {

  walletToSend = {} as WalletDataToSend;

  constructor(
    public dialogRef: MatDialogRef<AddWalletAddressModalComponent>,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { WEB3 } from 'src/app/web3';
import Web3 from 'web3';
import { MatDialog } from '@angular/material';
import { AddWalletAddressModalComponent } from 'src/app/add-wallet-address-modal/add-wallet-address-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-walletlist',
  templateUrl: './walletlist.component.html',
  styleUrls: ['./walletlist.component.scss']
})
export class WalletlistComponent implements OnInit {

  constructor(@Inject(WEB3) private web3: Web3,
    public dialog: MatDialog) { }

  public accounts: any;
  public loading = true;

  async ngOnInit() {
    const accounts = await this.web3.eth.getAccounts().finally(() => this.loading = false);

    this.accounts = accounts;
  }

  openAddWalletDialog(): void {
    const addWalletDialogRef = this.dialog.open(AddWalletAddressModalComponent, {
      width: '700px',
      data: {
        // license: this.license
      }
    });

    addWalletDialogRef.afterClosed().subscribe(result => {
      console.log('New dialog closed');
      if (!result || result.state === undefined) {
        console.log('error');
        return;
      }
    });
  }

  openConfirm(): void {
    const confirmDialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '250px',
      // data: { licenseToDelete: this.license }
    });

    confirmDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        console.log('Deleting');
      }
    });
  }
}

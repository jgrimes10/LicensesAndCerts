import { Component, OnInit, Inject } from '@angular/core';
import { WEB3 } from 'src/app/web3';
import Web3 from 'web3';
import { MatDialog } from '@angular/material';
import { AddWalletAddressModalComponent } from 'src/app/components/add-wallet-address-modal/add-wallet-address-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

import { WALLET_LIST_ADDRESS, WALLET_LIST_ABI } from '../../config/walletList.config.js';
import { WalletData } from 'src/app/models/wallet-list.model';
import { WalletDataToSend } from 'src/app/models/walletDataToSend.model';
import { Contract } from 'web3-eth-contract';


@Component({
  selector: 'app-walletlist',
  templateUrl: './walletlist.component.html',
  styleUrls: ['./walletlist.component.scss']
})
export class WalletlistComponent implements OnInit {

  wallet: WalletData = {
    id: 1,
    walletAddress: '0x2342k3jn',
    firstName: 'the first name',
    lastName: 'the last name',
    deleted: false
  };

  walletList: Contract;


  numberOfWallets = 0;
  public accounts: any;
  allWallets: WalletData[] = [];

  constructor(@Inject(WEB3) private web3: Web3,
    public dialog: MatDialog) { }

  public loading = true;

  async ngOnInit() {
    const accounts = await this.web3.eth.getAccounts();
    this.accounts = accounts;

    await this.getWalletList();
  }

  async getWalletList() {
    const walletList = new this.web3.eth.Contract(WALLET_LIST_ABI, WALLET_LIST_ADDRESS, {
      // this is just a default so you don't have to enter it every time you want to call 'send()' on a smart contract method
      from: this.accounts[0],
      gasPrice: '2000'
    });
    this.walletList = walletList;
    console.log(walletList);
    // Get total number of wallets, including deleted.
    const walletCount = await walletList.methods.walletCount().call();
    this.numberOfWallets = walletCount;
    console.log(this.numberOfWallets);

    // Empty the allWallets array for refresh.
    this.allWallets = [];

    for (let index = 1; index <= this.numberOfWallets; index++) {
      const wallet = await walletList.methods.wallet(index).call();

      console.log(wallet.walletAddress);

      this.allWallets.push(wallet);
      console.log(this.allWallets);
    }
  }

  async addWalletAddressToBlockchain(wallet: WalletDataToSend) {
    const result = await this.walletList.methods.addWallet(
      wallet.firstName,
      wallet.lastName,
      wallet.walletAddress)
      .send();
  }

  openAddWalletDialog(): void {
    const addWalletDialogRef = this.dialog.open(AddWalletAddressModalComponent, {
      width: '700px',
      data: {
        wallet: this.walletList
      }
    });

    addWalletDialogRef.afterClosed().subscribe(result => {
      console.log('New dialog closed');
      if (!result) {
        console.log('error');
        return;
      }
      console.log(result.walletAddress);
      this.addWalletAddressToBlockchain(result);
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

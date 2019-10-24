import { Component, Inject, OnInit } from '@angular/core';
import { WEB3 } from '../../web3';
import Web3 from 'web3';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(WEB3) private web3: Web3) { }

  public accounts: any;
  public loading = true;

  myWalletAddress = '';

  async ngOnInit() {
    const accounts = await this.web3.eth.getAccounts().finally(() => this.loading = false);

    this.accounts = accounts;
  }

}

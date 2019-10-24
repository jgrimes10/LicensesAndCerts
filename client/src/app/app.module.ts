import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletlistComponent } from './components/walletlist/walletlist.component';
import { LicenselistComponent } from './components/licenselist/licenselist.component';
import { NewLicenseModalComponent } from './components/new-license-modal/new-license-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

import {
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
import { AddWalletAddressModalComponent } from './add-wallet-address-modal/add-wallet-address-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WalletlistComponent,
    LicenselistComponent,
    NewLicenseModalComponent,
    ConfirmModalComponent,
    AddWalletAddressModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmModalComponent,
    NewLicenseModalComponent,
    AddWalletAddressModalComponent
  ]
})
export class AppModule { }

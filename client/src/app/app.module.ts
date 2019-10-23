import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WalletlistComponent } from './components/walletlist/walletlist.component';
import { LicenselistComponent } from './components/licenselist/licenselist.component';
import { NewLicenseModalComponent } from './components/new-license-modal/new-license-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WalletlistComponent,
    LicenselistComponent,
    NewLicenseModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

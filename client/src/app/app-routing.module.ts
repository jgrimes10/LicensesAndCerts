import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenselistComponent } from './components/licenselist/licenselist.component';
import { WalletlistComponent } from './components/walletlist/walletlist.component';


const routes: Routes = [
  { path: '', component: LicenselistComponent },
  { path: 'wallet-list', component: WalletlistComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletlistComponent } from './components/walletlist/walletlist.component';


const routes: Routes = [
  {
    path: 'walletlist',
    component: WalletlistComponent
  },
  {
    path: '*',
    redirectTo: '/walletlist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

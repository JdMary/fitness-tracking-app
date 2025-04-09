import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerWalletComponent } from './customer-wallet.component';

const routes: Routes = [{ path: '', component: CustomerWalletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerWalletRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderWalletComponent } from './provider-wallet.component';

const routes: Routes = [{ path: '', component: ProviderWalletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderWalletRoutingModule { }

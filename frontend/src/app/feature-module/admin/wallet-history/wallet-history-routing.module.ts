import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletHistoryComponent } from './wallet-history.component';

const routes: Routes = [{ path: '', component: WalletHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletHistoryRoutingModule { }

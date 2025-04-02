import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletHistoryRoutingModule } from './wallet-history-routing.module';
import { WalletHistoryComponent } from './wallet-history.component';


@NgModule({
  declarations: [
    WalletHistoryComponent
  ],
  imports: [
    CommonModule,
    WalletHistoryRoutingModule
  ]
})
export class WalletHistoryModule { }

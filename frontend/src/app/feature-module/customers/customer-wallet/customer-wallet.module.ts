import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerWalletRoutingModule } from './customer-wallet-routing.module';
import { CustomerWalletComponent } from './customer-wallet.component';


@NgModule({
  declarations: [
    CustomerWalletComponent
  ],
  imports: [
    CommonModule,
    CustomerWalletRoutingModule
  ]
})
export class CustomerWalletModule { }

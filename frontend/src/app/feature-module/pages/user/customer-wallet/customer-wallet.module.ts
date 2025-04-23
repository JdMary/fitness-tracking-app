import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerWalletRoutingModule } from './customer-wallet-routing.module';
import { CustomerWalletComponent } from './customer-wallet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerWalletComponent
  ],
  imports: [
    CommonModule,
    CustomerWalletRoutingModule,
    FormsModule
  ]
})
export class CustomerWalletModule { }

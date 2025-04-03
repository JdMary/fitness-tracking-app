import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerWalletRoutingModule } from './customer-wallet-routing.module';
import { CustomerWalletComponent } from './customer-wallet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerWalletComponent
  ],
  imports: [
    CommonModule,
    CustomerWalletRoutingModule,
    SharedModule
  ]
})
export class CustomerWalletModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderWalletRoutingModule } from './provider-wallet-routing.module';
import { ProviderWalletComponent } from './provider-wallet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderWalletComponent
  ],
  imports: [
    CommonModule,
    ProviderWalletRoutingModule,
    SharedModule
  ]
})
export class ProviderWalletModule { }

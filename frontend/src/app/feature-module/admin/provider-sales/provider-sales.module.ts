import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSalesRoutingModule } from './provider-sales-routing.module';
import { ProviderSalesComponent } from './provider-sales.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderSalesComponent
  ],
  imports: [
    CommonModule,
    ProviderSalesRoutingModule,
    SharedModule
  ]
})
export class ProviderSalesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRatesRoutingModule } from './tax-rates-routing.module';
import { TaxRatesComponent } from './tax-rates.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaxRatesComponent
  ],
  imports: [
    CommonModule,
    TaxRatesRoutingModule,
    SharedModule
  ]
})
export class TaxRatesModule { }

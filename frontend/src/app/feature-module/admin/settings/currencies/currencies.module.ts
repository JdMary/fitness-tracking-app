import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    CurrenciesRoutingModule,
    SharedModule
  ]
})
export class CurrenciesModule { }

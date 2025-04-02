import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesTransactionsRoutingModule } from './sales-transactions-routing.module';
import { SalesTransactionsComponent } from './sales-transactions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SalesTransactionsComponent
  ],
  imports: [
    CommonModule,
    SalesTransactionsRoutingModule,
    SharedModule
  ]
})
export class SalesTransactionsModule { }

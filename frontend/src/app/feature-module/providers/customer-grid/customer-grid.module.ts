import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerGridRoutingModule } from './customer-grid-routing.module';
import { CustomerGridComponent } from './customer-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerGridComponent
  ],
  imports: [
    CommonModule,
    CustomerGridRoutingModule,
    SharedModule
  ]
})
export class CustomerGridModule { }

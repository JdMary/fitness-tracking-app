import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCustomerRoutingModule } from './add-customer-routing.module';
import { AddCustomerComponent } from './add-customer.component';


@NgModule({
  declarations: [
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    AddCustomerRoutingModule
  ]
})
export class AddCustomerModule { }

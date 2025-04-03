import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCustomerRoutingModule } from './edit-customer-routing.module';
import { EditCustomerComponent } from './edit-customer.component';


@NgModule({
  declarations: [
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    EditCustomerRoutingModule
  ]
})
export class EditCustomerModule { }

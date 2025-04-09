import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerProfileRoutingModule } from './customer-profile-routing.module';
import { CustomerProfileComponent } from './customer-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    CustomerProfileRoutingModule,
    SharedModule
  ]
})
export class CustomerProfileModule { }

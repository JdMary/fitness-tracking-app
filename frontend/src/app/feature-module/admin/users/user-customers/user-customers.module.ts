import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCustomersRoutingModule } from './user-customers-routing.module';
import { UserCustomersComponent } from './user-customers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserCustomersComponent
  ],
  imports: [
    CommonModule,
    UserCustomersRoutingModule,
    SharedModule
  ]
})
export class UserCustomersModule { }

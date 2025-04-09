import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEarningsRoutingModule } from './admin-earnings-routing.module';
import { AdminEarningsComponent } from './admin-earnings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminEarningsComponent
  ],
  imports: [
    CommonModule,
    AdminEarningsRoutingModule,
    SharedModule
  ]
})
export class AdminEarningsModule { }

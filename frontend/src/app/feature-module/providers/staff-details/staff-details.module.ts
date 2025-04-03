import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StaffDetailsRoutingModule } from './staff-details-routing.module';
import { StaffDetailsComponent } from './staff-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StaffDetailsComponent
  ],
  imports: [
    CommonModule,
    StaffDetailsRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe,
  ]
})
export class StaffDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffGridRoutingModule } from './staff-grid-routing.module';
import { StaffGridComponent } from './staff-grid.component';


@NgModule({
  declarations: [
    StaffGridComponent
  ],
  imports: [
    CommonModule,
    StaffGridRoutingModule
  ]
})
export class StaffGridModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditManagementRoutingModule } from './edit-management-routing.module';
import { EditManagementComponent } from './edit-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditManagementComponent
  ],
  imports: [
    CommonModule,
    EditManagementRoutingModule,
    SharedModule
  ]
})
export class EditManagementModule { }

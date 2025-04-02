import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDeviceManagementRoutingModule } from './user-device-management-routing.module';
import { UserDeviceManagementComponent } from './user-device-management.component';


@NgModule({
  declarations: [
    UserDeviceManagementComponent
  ],
  imports: [
    CommonModule,
    UserDeviceManagementRoutingModule
  ]
})
export class UserDeviceManagementModule { }

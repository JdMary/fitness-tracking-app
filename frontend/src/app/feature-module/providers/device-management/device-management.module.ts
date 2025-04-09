import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceManagementRoutingModule } from './device-management-routing.module';
import { DeviceManagementComponent } from './device-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeviceManagementComponent
  ],
  imports: [
    CommonModule,
    DeviceManagementRoutingModule,
    SharedModule
  ]
})
export class DeviceManagementModule { }

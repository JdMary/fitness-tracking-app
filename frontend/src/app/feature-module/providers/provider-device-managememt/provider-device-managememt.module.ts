import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDeviceManagememtRoutingModule } from './provider-device-managememt-routing.module';
import { ProviderDeviceManagememtComponent } from './provider-device-managememt.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderDeviceManagememtComponent
  ],
  imports: [
    CommonModule,
    ProviderDeviceManagememtRoutingModule,
    SharedModule
  ]
})
export class ProviderDeviceManagememtModule { }

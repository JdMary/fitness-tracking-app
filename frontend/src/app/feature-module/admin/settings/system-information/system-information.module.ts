import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemInformationRoutingModule } from './system-information-routing.module';
import { SystemInformationComponent } from './system-information.component';


@NgModule({
  declarations: [
    SystemInformationComponent
  ],
  imports: [
    CommonModule,
    SystemInformationRoutingModule
  ]
})
export class SystemInformationModule { }

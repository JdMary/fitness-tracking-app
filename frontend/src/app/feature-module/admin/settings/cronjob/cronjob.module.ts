import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronjobRoutingModule } from './cronjob-routing.module';
import { CronjobComponent } from './cronjob.component';


@NgModule({
  declarations: [
    CronjobComponent
  ],
  imports: [
    CommonModule,
    CronjobRoutingModule
  ]
})
export class CronjobModule { }

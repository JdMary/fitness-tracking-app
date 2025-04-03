import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NexmoRoutingModule } from './nexmo-routing.module';
import { NexmoComponent } from './nexmo.component';


@NgModule({
  declarations: [
    NexmoComponent
  ],
  imports: [
    CommonModule,
    NexmoRoutingModule
  ]
})
export class NexmoModule { }

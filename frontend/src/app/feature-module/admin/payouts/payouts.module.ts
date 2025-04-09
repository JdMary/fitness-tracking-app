import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts.component';


@NgModule({
  declarations: [
    PayoutsComponent
  ],
  imports: [
    CommonModule,
    PayoutsRoutingModule
  ]
})
export class PayoutsModule { }

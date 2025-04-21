import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    NgApexchartsModule 
  ]
})
export class SubscriptionModule { }

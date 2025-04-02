import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSubscriptionRoutingModule } from './add-subscription-routing.module';
import { AddSubscriptionComponent } from './add-subscription.component';


@NgModule({
  declarations: [
    AddSubscriptionComponent
  ],
  imports: [
    CommonModule,
    AddSubscriptionRoutingModule
  ]
})
export class AddSubscriptionModule { }

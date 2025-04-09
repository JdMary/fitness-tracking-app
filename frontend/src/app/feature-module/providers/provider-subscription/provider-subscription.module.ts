import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSubscriptionRoutingModule } from './provider-subscription-routing.module';
import { ProviderSubscriptionComponent } from './provider-subscription.component';


@NgModule({
  declarations: [
    ProviderSubscriptionComponent
  ],
  imports: [
    CommonModule,
    ProviderSubscriptionRoutingModule
  ]
})
export class ProviderSubscriptionModule { }

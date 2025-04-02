import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSignupSubscriptionRoutingModule } from './provider-signup-subscription-routing.module';
import { ProviderSignupSubscriptionComponent } from './provider-signup-subscription.component';


@NgModule({
  declarations: [
    ProviderSignupSubscriptionComponent
  ],
  imports: [
    CommonModule,
    ProviderSignupSubscriptionRoutingModule
  ]
})
export class ProviderSignupSubscriptionModule { }

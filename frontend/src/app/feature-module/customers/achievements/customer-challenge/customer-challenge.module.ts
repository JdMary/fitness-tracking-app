import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerChallengeComponent } from './customer-challenge.component';
import { CustomerChallengeRoutingModule } from './customer-challenge-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerChallengeComponent
  ],
  imports: [
    CommonModule,
    CustomerChallengeRoutingModule,
    SharedModule
  ]
})
export class CustomerChallengeModule { }

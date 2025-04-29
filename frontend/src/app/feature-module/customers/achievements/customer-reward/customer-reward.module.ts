import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRewardComponent } from './customer-reward.component';
import { CustomerRewardRoutingModule } from './customer-reward-routing.module';

@NgModule({
  declarations: [CustomerRewardComponent],
  imports: [
    CommonModule,
    CustomerRewardRoutingModule
  ]
})
export class CustomerRewardModule {}

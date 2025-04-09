import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAchievementDetailsRoutingModule } from './customer-achievement-details-routing.module';
import { CustomerAchievementDetailsComponent } from './customer-achievement-details.component';


@NgModule({
  declarations: [
    CustomerAchievementDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerAchievementDetailsRoutingModule
  ]
})
export class CustomerAchievementDetailsModule { }

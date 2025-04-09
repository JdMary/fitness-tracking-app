import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerLeaderboardRoutingModule } from './customer-leaderboard-routing.module';
import { CustomerLeaderboardComponent } from './customer-leaderboard.component';


@NgModule({
  declarations: [
    CustomerLeaderboardComponent
  ],
  imports: [
    CommonModule,
    CustomerLeaderboardRoutingModule
  ]
})
export class CustomerLeaderboardModule { }

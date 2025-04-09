import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomerLeaderboardDetailRoutingModule } from './customer-leaderboard-detail-routing.module';
import { CustomerLeaderboardDetailComponent } from './customer-leaderboard-detail.component';

@NgModule({
  declarations: [CustomerLeaderboardDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomerLeaderboardDetailRoutingModule
  ]
})
export class CustomerLeaderboardDetailModule {}

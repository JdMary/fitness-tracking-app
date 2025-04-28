import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailsLeaderboardComponent } from './details-leaderboard.component';
import { DetailsLeaderboardRoutingModule } from './details-leaderboard-routing.module';

@NgModule({
  declarations: [DetailsLeaderboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    DetailsLeaderboardRoutingModule
  ],
  exports: [DetailsLeaderboardComponent]
})
export class DetailsLeaderboardModule { }

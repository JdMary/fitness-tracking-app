import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditLeaderboardRoutingModule } from './edit-leaderboard-routing.module';
import { EditLeaderboardComponent } from './edit-leaderboard.component';

@NgModule({
  declarations: [EditLeaderboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditLeaderboardRoutingModule
  ]
})
export class EditLeaderboardModule {}

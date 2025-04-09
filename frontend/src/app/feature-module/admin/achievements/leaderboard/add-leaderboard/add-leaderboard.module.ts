import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddLeaderboardRoutingModule } from './add-leaderboard-routing.module';
import { AddLeaderboardComponent } from './add-leaderboard.component';

@NgModule({
  declarations: [
    AddLeaderboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Assurez-vous que FormsModule est bien importé ici
    AddLeaderboardRoutingModule
  ]
})
export class AddLeaderboardModule {}

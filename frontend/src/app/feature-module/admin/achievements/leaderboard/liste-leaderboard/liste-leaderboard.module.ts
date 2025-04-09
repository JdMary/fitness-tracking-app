import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Pour ngModel
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ListeLeaderboardRoutingModule } from './liste-leaderboard-routing.module';
import { ListeLeaderboardComponent } from './liste-leaderboard.component';

@NgModule({
  declarations: [
    ListeLeaderboardComponent
  ],
  imports: [
    CommonModule,
    ListeLeaderboardRoutingModule, // 👈 Nom corrigé ici
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ListeLeaderboardModule { } // 👈 Nom corrigé ici aussi

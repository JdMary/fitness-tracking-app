import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Pour ngModel
import { MatTableModule } from '@angular/material/table'; // ✅ Pour le tableau
import { MatSelectModule } from '@angular/material/select'; // ✅ Optionnel pour améliorer les <select>
import { MatFormFieldModule } from '@angular/material/form-field'; // Optionnel pour le style des formulaires
import { MatInputModule } from '@angular/material/input'; // Optionnel pour les champs input

import { ListeAchievementsRoutingModule } from './liste-achievements-routing.module';
import { ListeAchievementsComponent } from './liste-achievements.component';

@NgModule({
  declarations: [
    ListeAchievementsComponent
  ],
  imports: [
    CommonModule,
    ListeAchievementsRoutingModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ListeAchievementsModule { }

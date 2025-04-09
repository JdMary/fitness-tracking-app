import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAchievementsRoutingModule } from './customer-achievements-routing.module';
import { CustomerAchievementsComponent } from './customer-achievements.component';
import { FormsModule } from '@angular/forms'; // ✅ Ajoute ceci pour le ngModel
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'; // Si tu utilises MatTable

@NgModule({
  declarations: [
    CustomerAchievementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    MatTableModule,
    CustomerAchievementsRoutingModule
  ]
})
export class CustomerAchievementsModule { }

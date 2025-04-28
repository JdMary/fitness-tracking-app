import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditAchievementComponent } from './edit-achievement.component';
import { EditAchievementRoutingModule } from './edit-achievement-routing.module'; 

@NgModule({
  declarations: [
    EditAchievementComponent
  ],
  imports: [
    CommonModule,
    EditAchievementRoutingModule, 
    FormsModule,
  ]
})
export class EditAchievementModule {}

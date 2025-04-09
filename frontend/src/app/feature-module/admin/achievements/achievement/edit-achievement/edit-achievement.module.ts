import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditAchievementComponent } from './edit-achievement.component';

const routes: Routes = [
  { path: '', component: EditAchievementComponent }
];

@NgModule({
  declarations: [
    EditAchievementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes) // lazy loading routing
  ]
})
export class EditAchievementModule { }

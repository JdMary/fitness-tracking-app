import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAchievementComponent } from './edit-achievement.component';
const routes: Routes = [
  { path: ':achieveId', component: EditAchievementComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAchievementRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAchievementsComponent } from './liste-achievements.component';

const routes: Routes = [
  { path: '', component: ListeAchievementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeAchievementsRoutingModule { }

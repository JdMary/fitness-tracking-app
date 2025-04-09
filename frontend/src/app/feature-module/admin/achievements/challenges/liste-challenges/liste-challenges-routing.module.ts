import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeChallengesComponent } from './liste-challenges.component';

const routes: Routes = [
  { path: '', component: ListeChallengesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeChallengesRoutingModule { }

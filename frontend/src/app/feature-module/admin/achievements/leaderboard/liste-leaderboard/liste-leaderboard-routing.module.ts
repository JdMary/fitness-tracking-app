import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLeaderboardComponent } from './liste-leaderboard.component';

const routes: Routes = [
  { path: '', component: ListeLeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeLeaderboardRoutingModule { }

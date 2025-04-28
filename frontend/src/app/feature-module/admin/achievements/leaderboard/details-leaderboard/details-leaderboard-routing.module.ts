import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsLeaderboardComponent } from './details-leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsLeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsLeaderboardRoutingModule { }

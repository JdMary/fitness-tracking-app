import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeaderboardComponent } from './add-leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: AddLeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLeaderboardRoutingModule {}

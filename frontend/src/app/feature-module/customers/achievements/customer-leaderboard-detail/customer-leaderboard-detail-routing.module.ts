import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLeaderboardDetailComponent } from './customer-leaderboard-detail.component';

const routes: Routes = [
  { path: ':userId', component: CustomerLeaderboardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLeaderboardDetailRoutingModule {}

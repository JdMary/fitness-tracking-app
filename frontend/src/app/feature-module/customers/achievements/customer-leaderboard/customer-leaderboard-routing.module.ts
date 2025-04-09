import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLeaderboardComponent } from './customer-leaderboard.component';

const routes: Routes = [{ path: '', component: CustomerLeaderboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLeaderboardRoutingModule { }

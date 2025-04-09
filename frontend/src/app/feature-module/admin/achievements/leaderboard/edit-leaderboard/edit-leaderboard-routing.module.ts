import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLeaderboardComponent } from './edit-leaderboard.component';

const routes: Routes = [
  {
    path: '', // La route par défaut dans ce module lazy-loaded
    component: EditLeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditLeaderboardRoutingModule { }

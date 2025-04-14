import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyMatchesListComponent } from './buddy-matches-list.component';

const routes: Routes = [{ path: '', component: BuddyMatchesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyMatchesListRoutingModule { }
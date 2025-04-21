import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyRequestsListComponent } from './buddy-requests-list.component';

const routes: Routes = [{ path: '', component: BuddyRequestsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyRequestsListRoutingModule { }
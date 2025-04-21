import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyListComponent } from './buddy-list.component';

const routes: Routes = [{ path: '', component: BuddyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyListRoutingModule { }

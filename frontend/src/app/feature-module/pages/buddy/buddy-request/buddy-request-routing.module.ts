import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyRequestComponent } from './buddy-request.component';

const routes: Routes = [{ path: '', component: BuddyRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyRequestRoutingModule { }
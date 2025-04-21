import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyMatchComponent } from './buddy-match.component';

const routes: Routes = [{ path: '', component: BuddyMatchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyMatchRoutingModule { }
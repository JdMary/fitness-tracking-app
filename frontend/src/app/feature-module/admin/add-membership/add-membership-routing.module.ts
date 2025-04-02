import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMembershipComponent } from './add-membership.component';

const routes: Routes = [{ path: '', component: AddMembershipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMembershipRoutingModule { }

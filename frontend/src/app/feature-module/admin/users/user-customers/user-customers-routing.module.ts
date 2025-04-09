import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCustomersComponent } from './user-customers.component';

const routes: Routes = [{ path: '', component: UserCustomersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCustomersRoutingModule { }

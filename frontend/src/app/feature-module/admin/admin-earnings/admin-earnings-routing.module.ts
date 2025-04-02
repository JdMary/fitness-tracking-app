import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEarningsComponent } from './admin-earnings.component';

const routes: Routes = [{ path: '', component: AdminEarningsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEarningsRoutingModule { }

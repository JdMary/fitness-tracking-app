import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffDetailsComponent } from './staff-details.component';

const routes: Routes = [{ path: '', component: StaffDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffDetailsRoutingModule { }

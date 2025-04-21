import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanListComponent } from './diet-plan-list.component';

const routes: Routes = [
  { path: '', component: DietPlanListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietPlanListRoutingModule { }

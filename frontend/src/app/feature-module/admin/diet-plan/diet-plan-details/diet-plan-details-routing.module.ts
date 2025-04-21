import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanDetailsComponent } from './diet-plan-details.component';

const routes: Routes = [
  { path: '', component: DietPlanDetailsComponent },
  { path: 'diet-plan-details/:id', component: DietPlanDetailsComponent }  ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietPlanDetailsRoutingModule { }

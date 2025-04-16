import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlanFormComponent } from '../workout-plan-form/workout-plan-form.component';
import { WorkoutPlanListComponent } from '../workout-plan-list/workout-plan-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: WorkoutPlanListComponent },
  { path: 'create', component: WorkoutPlanFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutPlanRoutingModule { }

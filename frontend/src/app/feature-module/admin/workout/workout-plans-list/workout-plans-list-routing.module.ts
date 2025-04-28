import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlansListComponent } from './workout-plans-list.component';
const routes: Routes = [
  { path: '', component: WorkoutPlansListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPlansListRoutingModule {}

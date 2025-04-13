import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from "../workouts.component";
import { ExerciceDetailsComponent } from './exercice-details/exercice-details.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsComponent,
    children: [
      {
        path: 'exercice-details',
        component: ExerciceDetailsComponent,
        loadChildren: () =>
  import('./exercice-details/exercice-details.module').then(
    (m) => m.ExerciceDetailsModule
  ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }

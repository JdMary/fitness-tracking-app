import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesListComponent } from './exercices-list.component';

const routes: Routes = [
  { path: '', component: ExercicesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesListRoutingModule {}

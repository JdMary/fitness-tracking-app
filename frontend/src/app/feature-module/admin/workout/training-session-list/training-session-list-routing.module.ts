import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingSessionListComponent } from './training-session-list.component';
const routes: Routes = [
  { path: '', component: TrainingSessionListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingSessionListRoutingModule {}

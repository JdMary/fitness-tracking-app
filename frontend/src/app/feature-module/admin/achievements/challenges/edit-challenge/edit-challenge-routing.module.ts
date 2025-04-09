import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditChallengeComponent } from './edit-challenge.component';

const routes: Routes = [
  { path: ':challengeId', component: EditChallengeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditChallengeRoutingModule {}

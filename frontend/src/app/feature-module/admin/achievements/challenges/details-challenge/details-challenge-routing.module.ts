import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsChallengeComponent } from './details-challenge.component';

const routes: Routes = [
  { path: ':id', component: DetailsChallengeComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsChallengeRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerChallengeDetailsComponent } from './customer-challenge-details.component';

const routes: Routes = [
  { path: ':challengeId', component: CustomerChallengeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerChallengeDetailsRoutingModule {}

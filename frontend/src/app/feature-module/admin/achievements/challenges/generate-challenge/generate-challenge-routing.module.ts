import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateChallengeComponent } from './generate-challenge.component';

const routes: Routes = [
  { path: '', component: GenerateChallengeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateChallengeRoutingModule {}

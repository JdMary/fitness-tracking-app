import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRewardComponent } from './customer-reward.component';

const routes: Routes = [
  { path: '', component: CustomerRewardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRewardRoutingModule {}

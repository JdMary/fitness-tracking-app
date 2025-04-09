import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAchievementDetailsComponent } from './customer-achievement-details.component';

const routes: Routes = [
  {
    path: ':achieveId',
    component: CustomerAchievementDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAchievementDetailsRoutingModule { }

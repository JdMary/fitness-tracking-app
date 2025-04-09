import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAchievementsComponent } from './customer-achievements.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerAchievementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAchievementsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component'; 

const routes: Routes = [
  { path: 'my-subscriptions', component: UserSubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule {}

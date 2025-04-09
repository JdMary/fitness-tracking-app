import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerNotificationComponent } from './customer-notification.component';

const routes: Routes = [{ path: '', component: CustomerNotificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerNotificationRoutingModule { }

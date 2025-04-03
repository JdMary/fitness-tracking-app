import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerNotificationRoutingModule } from './customer-notification-routing.module';
import { CustomerNotificationComponent } from './customer-notification.component';


@NgModule({
  declarations: [
    CustomerNotificationComponent
  ],
  imports: [
    CommonModule,
    CustomerNotificationRoutingModule
  ]
})
export class CustomerNotificationModule { }

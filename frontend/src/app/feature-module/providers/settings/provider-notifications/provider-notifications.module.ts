import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderNotificationsRoutingModule } from './provider-notifications-routing.module';
import { ProviderNotificationsComponent } from './provider-notifications.component';


@NgModule({
  declarations: [
    ProviderNotificationsComponent
  ],
  imports: [
    CommonModule,
    ProviderNotificationsRoutingModule
  ]
})
export class ProviderNotificationsModule { }

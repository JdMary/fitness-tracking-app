import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDashboardRoutingModule } from './provider-dashboard-routing.module';
import { ProviderDashboardComponent } from './provider-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderDashboardComponent
  ],
  imports: [
    CommonModule,
    ProviderDashboardRoutingModule,
    SharedModule
  ]
})
export class ProviderDashboardModule { }

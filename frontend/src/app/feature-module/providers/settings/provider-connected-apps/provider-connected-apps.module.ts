import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderConnectedAppsRoutingModule } from './provider-connected-apps-routing.module';
import { ProviderConnectedAppsComponent } from './provider-connected-apps.component';


@NgModule({
  declarations: [
    ProviderConnectedAppsComponent
  ],
  imports: [
    CommonModule,
    ProviderConnectedAppsRoutingModule
  ]
})
export class ProviderConnectedAppsModule { }

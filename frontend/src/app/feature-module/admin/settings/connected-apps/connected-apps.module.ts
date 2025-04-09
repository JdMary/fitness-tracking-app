import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectedAppsRoutingModule } from './connected-apps-routing.module';
import { ConnectedAppsComponent } from './connected-apps.component';


@NgModule({
  declarations: [
    ConnectedAppsComponent
  ],
  imports: [
    CommonModule,
    ConnectedAppsRoutingModule
  ]
})
export class ConnectedAppsModule { }

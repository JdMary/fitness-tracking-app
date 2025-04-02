import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailablePluginsRoutingModule } from './available-plugins-routing.module';
import { AvailablePluginsComponent } from './available-plugins.component';


@NgModule({
  declarations: [
    AvailablePluginsComponent
  ],
  imports: [
    CommonModule,
    AvailablePluginsRoutingModule
  ]
})
export class AvailablePluginsModule { }

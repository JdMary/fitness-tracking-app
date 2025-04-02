import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsManagerRoutingModule } from './plugins-manager-routing.module';
import { PluginsManagerComponent } from './plugins-manager.component';


@NgModule({
  declarations: [
    PluginsManagerComponent
  ],
  imports: [
    CommonModule,
    PluginsManagerRoutingModule
  ]
})
export class PluginsManagerModule { }

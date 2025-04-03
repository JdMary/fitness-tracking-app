import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageSettingsRoutingModule } from './storage-settings-routing.module';
import { StorageSettingsComponent } from './storage-settings.component';


@NgModule({
  declarations: [
    StorageSettingsComponent
  ],
  imports: [
    CommonModule,
    StorageSettingsRoutingModule
  ]
})
export class StorageSettingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailStorageSettingsRoutingModule } from './email-storage-settings-routing.module';
import { EmailStorageSettingsComponent } from './email-storage-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailStorageSettingsComponent
  ],
  imports: [
    CommonModule,
    EmailStorageSettingsRoutingModule,
    SharedModule
  ]
})
export class EmailStorageSettingsModule { }

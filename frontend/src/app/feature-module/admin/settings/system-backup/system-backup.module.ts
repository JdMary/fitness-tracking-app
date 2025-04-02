import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemBackupRoutingModule } from './system-backup-routing.module';
import { SystemBackupComponent } from './system-backup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SystemBackupComponent
  ],
  imports: [
    CommonModule,
    SystemBackupRoutingModule,
    SharedModule
  ]
})
export class SystemBackupModule { }

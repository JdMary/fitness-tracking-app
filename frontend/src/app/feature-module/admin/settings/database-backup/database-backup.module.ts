import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseBackupRoutingModule } from './database-backup-routing.module';
import { DatabaseBackupComponent } from './database-backup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DatabaseBackupComponent
  ],
  imports: [
    CommonModule,
    DatabaseBackupRoutingModule,
    SharedModule
  ]
})
export class DatabaseBackupModule { }

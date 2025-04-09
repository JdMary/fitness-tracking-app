import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallerRoutingModule } from './installer-routing.module';
import { InstallerComponent } from './installer.component';


@NgModule({
  declarations: [
    InstallerComponent
  ],
  imports: [
    CommonModule,
    InstallerRoutingModule
  ]
})
export class InstallerModule { }

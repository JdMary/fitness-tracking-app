import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesPermissionsRoutingModule } from './roles-permissions-routing.module';
import { RolesPermissionsComponent } from './roles-permissions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RolesPermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesPermissionsRoutingModule,
    SharedModule
  ]
})
export class RolesPermissionsModule { }

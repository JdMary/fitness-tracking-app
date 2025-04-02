import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolePermissionRoutingModule } from './role-permission-routing.module';
import { RolePermissionComponent } from './role-permission.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RolePermissionComponent
  ],
  imports: [
    CommonModule,
    RolePermissionRoutingModule,
    SharedModule
  ]
})
export class RolePermissionModule { }

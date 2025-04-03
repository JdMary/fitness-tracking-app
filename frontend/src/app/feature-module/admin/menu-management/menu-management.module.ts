import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuManagementRoutingModule } from './menu-management-routing.module';
import { MenuManagementComponent } from './menu-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MenuManagementComponent
  ],
  imports: [
    CommonModule,
    MenuManagementRoutingModule,
    SharedModule
  ]
})
export class MenuManagementModule { }

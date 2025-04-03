import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminHeaderComponent } from './common/admin-header/admin-header.component';
import { AdminSidebarComponent } from './common/admin-sidebar/admin-sidebar.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }

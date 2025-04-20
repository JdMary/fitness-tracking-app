import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesHeaderComponent } from './common/pages-header/pages-header.component';
import { PagesFooterComponent } from './common/pages-footer/pages-footer.component';
import { SidebarTwoComponent } from './common/sidebar-two/sidebar-two.component';
import { CustomersSidebarComponent } from './common/customers-sidebar/customers-sidebar.component';
@NgModule({
  declarations: [
    UserComponent,
    PagesHeaderComponent,
    PagesFooterComponent,
    SidebarTwoComponent,
    CustomersSidebarComponent
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

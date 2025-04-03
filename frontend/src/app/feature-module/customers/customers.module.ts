import { CustomerFooterComponent } from './common/customer-footer/customer-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SidebarTwoComponent } from './common/sidebar-two/sidebar-two.component';
import { CustomersHeaderComponent } from './common/customers-header/customers-header.component';
import { CustomersSidebarComponent } from './common/customers-sidebar/customers-sidebar.component';


@NgModule({
  declarations: [
    CustomersComponent,
    SidebarTwoComponent,
    CustomersHeaderComponent,
    CustomersSidebarComponent,
    CustomerFooterComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }

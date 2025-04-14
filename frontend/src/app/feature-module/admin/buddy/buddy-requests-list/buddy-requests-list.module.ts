import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyRequestsListRoutingModule } from './buddy-requests-list-routing.module';
import { BuddyRequestsListComponent } from './buddy-requests-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BuddyRequestsListComponent
    ],
  imports: [
    CommonModule,
    BuddyRequestsListRoutingModule,
    SharedModule
  ]
})
export class BuddyRequestsModule { }  
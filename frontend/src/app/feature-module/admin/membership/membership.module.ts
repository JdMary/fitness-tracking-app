import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    SharedModule
  ]
})
export class MembershipModule { }

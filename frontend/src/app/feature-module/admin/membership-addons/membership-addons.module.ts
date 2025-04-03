import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipAddonsRoutingModule } from './membership-addons-routing.module';
import { MembershipAddonsComponent } from './membership-addons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MembershipAddonsComponent
  ],
  imports: [
    CommonModule,
    MembershipAddonsRoutingModule,
    SharedModule
  ]
})
export class MembershipAddonsModule { }

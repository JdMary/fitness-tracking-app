import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMembershipRoutingModule } from './add-membership-routing.module';
import { AddMembershipComponent } from './add-membership.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddMembershipComponent
  ],
  imports: [
    CommonModule,
    AddMembershipRoutingModule,
    SharedModule
  ]
})
export class AddMembershipModule { }

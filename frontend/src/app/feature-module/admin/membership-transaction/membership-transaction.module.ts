import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipTransactionRoutingModule } from './membership-transaction-routing.module';
import { MembershipTransactionComponent } from './membership-transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MembershipTransactionComponent
  ],
  imports: [
    CommonModule,
    MembershipTransactionRoutingModule,
    SharedModule
  ]
})
export class MembershipTransactionModule { }

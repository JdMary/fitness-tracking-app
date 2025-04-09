import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAccountRequestsRoutingModule } from './delete-account-requests-routing.module';
import { DeleteAccountRequestsComponent } from './delete-account-requests.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeleteAccountRequestsComponent
  ],
  imports: [
    CommonModule,
    DeleteAccountRequestsRoutingModule,
    SharedModule
  ]
})
export class DeleteAccountRequestsModule { }

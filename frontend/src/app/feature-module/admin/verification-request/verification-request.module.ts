import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationRequestRoutingModule } from './verification-request-routing.module';
import { VerificationRequestComponent } from './verification-request.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerificationRequestComponent
  ],
  imports: [
    CommonModule,
    VerificationRequestRoutingModule,
    SharedModule
  ]
})
export class VerificationRequestModule { }

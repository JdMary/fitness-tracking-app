import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmtpRoutingModule } from './smtp-routing.module';
import { SmtpComponent } from './smtp.component';


@NgModule({
  declarations: [
    SmtpComponent
  ],
  imports: [
    CommonModule,
    SmtpRoutingModule
  ]
})
export class SmtpModule { }

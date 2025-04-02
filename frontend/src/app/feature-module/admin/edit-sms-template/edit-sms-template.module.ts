import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSmsTemplateRoutingModule } from './edit-sms-template-routing.module';
import { EditSmsTemplateComponent } from './edit-sms-template.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditSmsTemplateComponent
  ],
  imports: [
    CommonModule,
    EditSmsTemplateRoutingModule,
    SharedModule
  ]
})
export class EditSmsTemplateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmailTemplateRoutingModule } from './edit-email-template-routing.module';
import { EditEmailTemplateComponent } from './edit-email-template.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditEmailTemplateComponent
  ],
  imports: [
    CommonModule,
    EditEmailTemplateRoutingModule,
    SharedModule
  ]
})
export class EditEmailTemplateModule { }

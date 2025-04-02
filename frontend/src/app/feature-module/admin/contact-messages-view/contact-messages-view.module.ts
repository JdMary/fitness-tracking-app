import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactMessagesViewRoutingModule } from './contact-messages-view-routing.module';
import { ContactMessagesViewComponent } from './contact-messages-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactMessagesViewComponent
  ],
  imports: [
    CommonModule,
    ContactMessagesViewRoutingModule,
    SharedModule
  ]
})
export class ContactMessagesViewModule { }

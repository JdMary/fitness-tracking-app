import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerChatRoutingModule } from './customer-chat-routing.module';
import { CustomerChatComponent } from './customer-chat.component';


@NgModule({
  declarations: [
    CustomerChatComponent
  ],
  imports: [
    CommonModule,
    CustomerChatRoutingModule
  ]
})
export class CustomerChatModule { }

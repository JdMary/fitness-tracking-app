import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderChatRoutingModule } from './provider-chat-routing.module';
import { ProviderChatComponent } from './provider-chat.component';


@NgModule({
  declarations: [
    ProviderChatComponent
  ],
  imports: [
    CommonModule,
    ProviderChatRoutingModule
  ]
})
export class ProviderChatModule { }

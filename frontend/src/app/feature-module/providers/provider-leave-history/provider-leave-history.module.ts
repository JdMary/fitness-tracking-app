import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderLeaveHistoryRoutingModule } from './provider-leave-history-routing.module';
import { ProviderLeaveHistoryComponent } from './provider-leave-history.component';


@NgModule({
  declarations: [
    ProviderLeaveHistoryComponent
  ],
  imports: [
    CommonModule,
    ProviderLeaveHistoryRoutingModule
  ]
})
export class ProviderLeaveHistoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderLoginActivityRoutingModule } from './provider-login-activity-routing.module';
import { ProviderLoginActivityComponent } from './provider-login-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderLoginActivityComponent
  ],
  imports: [
    CommonModule,
    ProviderLoginActivityRoutingModule,
    SharedModule
  ]
})
export class ProviderLoginActivityModule { }

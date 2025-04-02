import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderAddonsRoutingModule } from './provider-addons-routing.module';
import { ProviderAddonsComponent } from './provider-addons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderAddonsComponent
  ],
  imports: [
    CommonModule,
    ProviderAddonsRoutingModule,
    SharedModule
  ]
})
export class ProviderAddonsModule { }

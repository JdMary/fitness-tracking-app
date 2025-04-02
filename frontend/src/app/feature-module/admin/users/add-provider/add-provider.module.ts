import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProviderRoutingModule } from './add-provider-routing.module';
import { AddProviderComponent } from './add-provider.component';


@NgModule({
  declarations: [
    AddProviderComponent
  ],
  imports: [
    CommonModule,
    AddProviderRoutingModule
  ]
})
export class AddProviderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProviderRoutingModule } from './edit-provider-routing.module';
import { EditProviderComponent } from './edit-provider.component';


@NgModule({
  declarations: [
    EditProviderComponent
  ],
  imports: [
    CommonModule,
    EditProviderRoutingModule
  ]
})
export class EditProviderModule { }

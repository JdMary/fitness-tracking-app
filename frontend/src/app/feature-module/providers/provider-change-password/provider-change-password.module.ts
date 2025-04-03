import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderChangePasswordRoutingModule } from './provider-change-password-routing.module';
import { ProviderChangePasswordComponent } from './provider-change-password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProviderChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ProviderChangePasswordRoutingModule,
    FormsModule
  ]
})
export class ProviderChangePasswordModule { }

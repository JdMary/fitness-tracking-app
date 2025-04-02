import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSignupRoutingModule } from './provider-signup-routing.module';
import { ProviderSignupComponent } from './provider-signup.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [
    ProviderSignupComponent
  ],
  imports: [
    CommonModule,
    ProviderSignupRoutingModule,
    NgxIntlTelInputModule
  ]
})
export class ProviderSignupModule { }

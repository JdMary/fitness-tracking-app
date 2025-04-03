import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderSocialProfileRoutingModule } from './provider-social-profile-routing.module';
import { ProviderSocialProfileComponent } from './provider-social-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderSocialProfileComponent
  ],
  imports: [
    CommonModule,
    ProviderSocialProfileRoutingModule,
    SharedModule
  ]
})
export class ProviderSocialProfileModule { }

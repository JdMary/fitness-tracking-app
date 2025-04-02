import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProfilesRoutingModule } from './social-profiles-routing.module';
import { SocialProfilesComponent } from './social-profiles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SocialProfilesComponent
  ],
  imports: [
    CommonModule,
    SocialProfilesRoutingModule,
    SharedModule
  ]
})
export class SocialProfilesModule { }

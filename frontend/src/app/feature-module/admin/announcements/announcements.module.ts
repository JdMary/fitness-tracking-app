import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementsComponent } from './announcements.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AnnouncementsComponent
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    SharedModule
  ]
})
export class AnnouncementsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAnnouncementRoutingModule } from './add-announcement-routing.module';
import { AddAnnouncementComponent } from './add-announcement.component';


@NgModule({
  declarations: [
    AddAnnouncementComponent
  ],
  imports: [
    CommonModule,
    AddAnnouncementRoutingModule
  ]
})
export class AddAnnouncementModule { }

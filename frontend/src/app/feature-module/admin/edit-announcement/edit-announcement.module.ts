import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAnnouncementRoutingModule } from './edit-announcement-routing.module';
import { EditAnnouncementComponent } from './edit-announcement.component';


@NgModule({
  declarations: [
    EditAnnouncementComponent
  ],
  imports: [
    CommonModule,
    EditAnnouncementRoutingModule
  ]
})
export class EditAnnouncementModule { }

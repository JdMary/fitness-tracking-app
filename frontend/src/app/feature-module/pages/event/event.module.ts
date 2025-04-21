import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { ListEventsComponent } from './list-events/list-events.component';
import { ListUserRegistrationsComponent } from './list-user-registrations/list-user-registrations.component';

@NgModule({
  declarations: [
    ListEventsComponent,
    ListUserRegistrationsComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatOptionModule } from '@angular/material/core'; 
import { ListEventRegistrationsComponent } from './list-event-registrations/list-event-registrations.component';

@NgModule({
  declarations: [
    AddEventComponent,
    EditEventComponent,
    ListEventComponent,
    ListEventRegistrationsComponent 
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,     
    MatOptionModule   
  ]
})
export class EventModule { }

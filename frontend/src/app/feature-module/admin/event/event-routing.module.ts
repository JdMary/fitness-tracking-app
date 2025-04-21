import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { ListEventRegistrationsComponent } from './list-event-registrations/list-event-registrations.component';

const routes: Routes = [
  { path: 'add', component: AddEventComponent },
  { path: 'edit/:id', component: EditEventComponent },
  { path: 'list', component: ListEventComponent },
  { path: 'registrations/:eventId', component: ListEventRegistrationsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

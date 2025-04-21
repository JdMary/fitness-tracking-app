import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './list-events/list-events.component';
import { ListUserRegistrationsComponent } from './list-user-registrations/list-user-registrations.component';

const routes: Routes = [
    { path: '', component: ListEventsComponent },
    { path: 'list-user-registrations', component: ListUserRegistrationsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

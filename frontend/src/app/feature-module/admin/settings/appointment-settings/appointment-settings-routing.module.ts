import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentSettingsComponent } from './appointment-settings.component';

const routes: Routes = [{ path: '', component: AppointmentSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentSettingsRoutingModule { }

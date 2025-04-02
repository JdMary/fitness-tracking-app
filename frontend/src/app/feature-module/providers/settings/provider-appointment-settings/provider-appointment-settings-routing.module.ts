import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAppointmentSettingsComponent } from './provider-appointment-settings.component';

const routes: Routes = [{ path: '', component: ProviderAppointmentSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAppointmentSettingsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceSettingsComponent } from './service-settings.component';

const routes: Routes = [{ path: '', component: ServiceSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceSettingsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderProfileSettingsComponent } from './provider-profile-settings.component';

const routes: Routes = [{ path: '', component: ProviderProfileSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderProfileSettingsRoutingModule { }

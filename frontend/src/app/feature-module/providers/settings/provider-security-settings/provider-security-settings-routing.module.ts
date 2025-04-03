import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderSecuritySettingsComponent } from './provider-security-settings.component';

const routes: Routes = [{ path: '', component: ProviderSecuritySettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderSecuritySettingsRoutingModule { }

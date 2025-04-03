import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAccountsSettingsComponent } from './provider-accounts-settings.component';

const routes: Routes = [{ path: '', component: ProviderAccountsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAccountsSettingsRoutingModule { }

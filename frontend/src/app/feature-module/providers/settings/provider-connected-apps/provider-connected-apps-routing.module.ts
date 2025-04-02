import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderConnectedAppsComponent } from './provider-connected-apps.component';

const routes: Routes = [{ path: '', component: ProviderConnectedAppsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderConnectedAppsRoutingModule { }

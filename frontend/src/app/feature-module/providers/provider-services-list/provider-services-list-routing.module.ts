import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderServicesListComponent } from './provider-services-list.component';

const routes: Routes = [{ path: '', component: ProviderServicesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderServicesListRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderServicesComponent } from './provider-services.component';

const routes: Routes = [{ path: '', component: ProviderServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderServicesRoutingModule { }

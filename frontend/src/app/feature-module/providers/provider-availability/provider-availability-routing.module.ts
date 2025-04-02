import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderAvailabilityComponent } from './provider-availability.component';

const routes: Routes = [{ path: '', component: ProviderAvailabilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderAvailabilityRoutingModule { }

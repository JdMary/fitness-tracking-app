import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderOffersComponent } from './provider-offers.component';

const routes: Routes = [{ path: '', component: ProviderOffersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderOffersRoutingModule { }

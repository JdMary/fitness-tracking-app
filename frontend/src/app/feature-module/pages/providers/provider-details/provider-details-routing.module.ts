import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderDetailsComponent } from './provider-details.component';

const routes: Routes = [{ path: '', component: ProviderDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDetailsRoutingModule { }

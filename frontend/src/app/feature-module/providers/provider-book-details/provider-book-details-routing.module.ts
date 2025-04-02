import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderBookDetailsComponent } from './provider-book-details.component';

const routes: Routes = [{ path: '', component: ProviderBookDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderBookDetailsRoutingModule { }

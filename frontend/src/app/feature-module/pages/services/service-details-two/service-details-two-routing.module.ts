import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailsTwoComponent } from './service-details-two.component';

const routes: Routes = [{ path: '', component: ServiceDetailsTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailsTwoRoutingModule { }

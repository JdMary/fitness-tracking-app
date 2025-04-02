import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceInformationComponent } from './service-information.component';

const routes: Routes = [{ path: '', component: ServiceInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceInformationRoutingModule { }

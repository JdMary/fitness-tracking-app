import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InactiveServicesComponent } from './inactive-services.component';

const routes: Routes = [{ path: '', component: InactiveServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InactiveServicesRoutingModule { }

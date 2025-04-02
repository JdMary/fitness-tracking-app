import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewServicesComponent } from './view-services.component';

const routes: Routes = [{ path: '', component: ViewServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewServicesRoutingModule { }

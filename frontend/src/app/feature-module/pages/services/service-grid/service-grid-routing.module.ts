import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceGridComponent } from './service-grid.component';

const routes: Routes = [{ path: '', component: ServiceGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceGridRoutingModule { }

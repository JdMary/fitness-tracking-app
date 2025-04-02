import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingServicesComponent } from './pending-services.component';

const routes: Routes = [{ path: '', component: PendingServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingServicesRoutingModule { }

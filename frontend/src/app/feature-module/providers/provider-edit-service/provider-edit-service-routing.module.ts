import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderEditServiceComponent } from './provider-edit-service.component';

const routes: Routes = [{ path: '', component: ProviderEditServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderEditServiceRoutingModule { }

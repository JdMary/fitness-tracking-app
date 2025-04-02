import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderNotificationsComponent } from './provider-notifications.component';

const routes: Routes = [{ path: '', component: ProviderNotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderNotificationsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectedAppsComponent } from './connected-apps.component';

const routes: Routes = [{ path: '', component: ConnectedAppsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectedAppsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdprSettingsComponent } from './gdpr-settings.component';

const routes: Routes = [{ path: '', component: GdprSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdprSettingsRoutingModule { }

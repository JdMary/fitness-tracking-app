import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferenceSettingsComponent } from './preference-settings.component';

const routes: Routes = [{ path: '', component: PreferenceSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceSettingsRoutingModule { }

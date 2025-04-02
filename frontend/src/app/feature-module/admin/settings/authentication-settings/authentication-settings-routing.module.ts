import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationSettingsComponent } from './authentication-settings.component';

const routes: Routes = [{ path: '', component: AuthenticationSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationSettingsRoutingModule { }

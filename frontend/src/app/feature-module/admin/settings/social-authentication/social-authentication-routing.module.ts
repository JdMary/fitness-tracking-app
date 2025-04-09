import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAuthenticationComponent } from './social-authentication.component';

const routes: Routes = [{ path: '', component: SocialAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialAuthenticationRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialProfilesComponent } from './social-profiles.component';

const routes: Routes = [{ path: '', component: SocialProfilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialProfilesRoutingModule { }

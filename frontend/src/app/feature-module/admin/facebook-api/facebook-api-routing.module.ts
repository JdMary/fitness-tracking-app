import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookApiComponent } from './facebook-api.component';

const routes: Routes = [{ path: '', component: FacebookApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookApiRoutingModule { }

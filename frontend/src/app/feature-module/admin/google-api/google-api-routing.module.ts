import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleApiComponent } from './google-api.component';

const routes: Routes = [{ path: '', component: GoogleApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleApiRoutingModule { }

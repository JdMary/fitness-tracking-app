import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationRequestComponent } from './verification-request.component';

const routes: Routes = [{ path: '', component: VerificationRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationRequestRoutingModule { }

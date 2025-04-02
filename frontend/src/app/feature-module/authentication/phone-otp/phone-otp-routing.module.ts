import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneOtpComponent } from './phone-otp.component';

const routes: Routes = [{ path: '', component: PhoneOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneOtpRoutingModule { }

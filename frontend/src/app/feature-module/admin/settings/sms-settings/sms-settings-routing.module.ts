import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsSettingsComponent } from './sms-settings.component';

const routes: Routes = [{ path: '', component: SmsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsSettingsRoutingModule { }

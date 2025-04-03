import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutSettingsComponent } from './payout-settings.component';

const routes: Routes = [{ path: '', component: PayoutSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutSettingsRoutingModule { }

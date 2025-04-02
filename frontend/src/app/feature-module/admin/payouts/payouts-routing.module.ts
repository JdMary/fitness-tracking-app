import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutsComponent } from './payouts.component';

const routes: Routes = [
  {
    path: '',
    component: PayoutsComponent,
    children: [
      {
        path: 'payout-request',
        loadChildren: () =>
          import('./payout-request/payout-request.module').then(
            (m) => m.PayoutRequestModule
          ),
      },
      {
        path: 'payout-settings',
        loadChildren: () =>
          import('./payout-settings/payout-settings.module').then(
            (m) => m.PayoutSettingsModule
          ),
      },
      {
        path: 'add-payout',
        loadChildren: () =>
          import('./add-payout/add-payout.module').then(
            (m) => m.AddPayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutsRoutingModule {}

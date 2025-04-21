import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyComponent } from './buddy.component';

const routes: Routes = [
  {
    path: '',
    component: BuddyComponent,
    children: [
      {
        path: 'buddy-list',
        loadChildren: () =>
          import('./buddy-list/buddy-list.module').then(
            (m) => m.BuddyListModule
          ),
      },
      {
        path: 'buddy-request',
        loadChildren: () =>
          import('./buddy-request/buddy-request.module').then(
            (m) => m.BuddyRequestModule
          ),
      },
      {
        path: 'buddy-match',
        loadChildren: () =>
          import('./buddy-match/buddy-match.module').then(
            (m) => m.BuddyMatchModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuddyRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddyComponent } from './buddy.component';

const routes: Routes = [
  {
    path: '',
    component: BuddyComponent,
    children: [
      {
        path: 'requests-list',
        loadChildren: () =>
          import('./buddy-requests-list/buddy-requests-list.module').then(
            (m) => m.BuddyRequestsModule
          ),
      },
      {
        path: 'matches-list',
        loadChildren: () =>
          import('./buddy-matches-list/buddy-matches-list.module').then(
            (m) => m.BuddyMatchesModule
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

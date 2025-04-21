import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDietPlanComponent } from './diet-plan.component';
import { DietPlanDetailsComponent } from './diet-plan-details/diet-plan-details.component';
const routes: Routes = [
  {
    path: '',
    component: AdminDietPlanComponent,
    children: [
      {
        path: 'diet-plan-list',
        loadChildren: () =>
          import('./diet-plan-list/diet-plan-list.module').then((m) => m.DietPlanListModule),
      },
      // {
      //   path: 'diet-plan-details',
      //   loadChildren: () =>
      //     import('./diet-plan-details/diet-plan-details.module').then((m) => m.DietPlanDetailsRoutingModule),
      // },
      { path: 'diet-plan-details/:dietPlanId', component: DietPlanDetailsComponent },
      
      {
        path: 'preferences',
        loadChildren: () =>
          import('./preferences/preferences.module').then((m) => m.PreferencesModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietPlanRoutingModule { }

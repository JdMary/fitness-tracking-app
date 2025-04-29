import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanComponent } from './diet-plan.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: DietPlanComponent,
//     children: [
//       {
//         path: 'generate-diet-plan',
//         loadChildren: () =>
//           import('./generate-diet-plan/generate-diet-plan.module').then(
//             (m) => m.GenerateDietPlanModule
//           ),
//       },
//       {
//         path: 'diet-plan/meal-details/:id',
//         component: MealDetailsComponent,
//       },
      
      
//     ],
//   },
// ];
const routes: Routes = [
  {
    path: '',
    component: DietPlanComponent,
    children: [
      {
        path: 'ai',
        loadChildren: () =>
          import('./ai/ai.module').then(
            (m) => m.AiModule
          ),
      },
    ],
  },
  {
    path: 'meal-details/:id', // Move this route outside the DietPlanComponent's children
    loadChildren: () =>
      import('./meal-details/meal-details.module').then(
        (m) => m.MealDetailsModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DietPlanRoutingModule {}
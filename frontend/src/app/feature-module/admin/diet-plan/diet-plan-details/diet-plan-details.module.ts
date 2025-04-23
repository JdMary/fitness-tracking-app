import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanDetailsComponent } from './diet-plan-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: DietPlanDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),  
      CommonModule,
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DietPlanDetailsRoutingModule { }

import { CommonModule } from '@angular/common';
import { MealDetailsComponent } from './meal-details.component';
import { MealDetailRoutingModule } from './meal-details-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: MealDetailsComponent , outlet: 'primary',}
];

@NgModule({
  imports: [RouterModule.forChild(routes),  
      CommonModule,
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class MealDetailsModule { }

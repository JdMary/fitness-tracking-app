import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MealRoutingModule } from './meal-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MealDetailsComponent } from './meal-details.component';

const routes: Routes = [
  { path: '', component: MealDetailsComponent }
];

@NgModule({
  declarations: [MealDetailsComponent],
  imports: [
    CommonModule, // Ensure CommonModule is imported here
    FormsModule,
    RouterModule.forChild(routes),
    MealRoutingModule,
    SharedModule,
  ]
})
export class MealDetailsModule { }

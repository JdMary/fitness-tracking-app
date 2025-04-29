import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MealRoutingModule } from './meal-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MealDetailsComponent } from './meal-details.component';
import { AIComponent } from '../ai/ai.component';

@NgModule({
  declarations: [MealDetailsComponent, AIComponent], // Ensure AIComponent is declared
  imports: [
    CommonModule, 
    FormsModule,
    MealRoutingModule,
    SharedModule,
  ]
})
export class MealDetailsModule { }
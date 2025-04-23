import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateDietPlanRoutingModule } from './generate-diet-plan-routing.module';
import { GenerateDietPlanComponent } from './generate-diet-plan.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GenerateDietPlanComponent],
  imports: [
    CommonModule,
    GenerateDietPlanRoutingModule,
    SharedModule
  ]
})
export class GenerateDietPlanModule { }

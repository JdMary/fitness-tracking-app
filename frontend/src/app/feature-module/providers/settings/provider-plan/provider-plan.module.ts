import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderPlanRoutingModule } from './provider-plan-routing.module';
import { ProviderPlanComponent } from './provider-plan.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProviderPlanComponent
  ],
  imports: [
    CommonModule,
    ProviderPlanRoutingModule,
    SharedModule
  ]
})
export class ProviderPlanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { SharedModule } from '../shared/shared.module';
import { DietPlanComponent } from './pages/diet-plan/diet-plan.component'; 

@NgModule({
  declarations: [
    FeatureModuleComponent,  
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    FeatureModuleRoutingModule,
    SharedModule
  ]
})
export class FeatureModuleModule { }

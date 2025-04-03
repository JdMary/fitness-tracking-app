import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeTrialRoutingModule } from './free-trial-routing.module';
import { FreeTrialComponent } from './free-trial.component';


@NgModule({
  declarations: [
    FreeTrialComponent
  ],
  imports: [
    CommonModule,
    FreeTrialRoutingModule
  ]
})
export class FreeTrialModule { }

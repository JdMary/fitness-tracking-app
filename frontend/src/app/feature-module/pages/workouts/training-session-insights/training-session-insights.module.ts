import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../../shared/shared.module";
import { TrainingSessionInsightsComponent } from './training-session-insights.component';
import { Chart } from 'chart.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TrainingSessionInsightsComponent

    ],
  exports: [
    TrainingSessionInsightsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Chart,
    BrowserModule,
    NgChartsModule

  ]
})
export class TrainingSessionInsightsModule { }

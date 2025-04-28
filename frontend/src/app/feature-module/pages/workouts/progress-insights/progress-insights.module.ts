import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../../shared/shared.module";
import { ProgressInsightsComponent } from './progress-insights.component';
import { ProgressInsightsRoutingModule } from './progress-insights-routing.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ProgressInsightsComponent
  ],
  exports: [
    ProgressInsightsComponent
  ],
  imports: [
    CommonModule,
    ProgressInsightsRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class ProgressInsightsModule { }
